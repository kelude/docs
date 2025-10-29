---
outline: deep
---

# Install Nginx stable version on Ubuntu Server

[Official Documentation](https://nginx.org/en/linux_packages.html#Ubuntu)

## Installation

Install the prerequisites:

```shell
sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring
```
Import an official nginx signing key so apt could verify the packages authenticity. Fetch the key:

```shell
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null
```

Verify that the downloaded file contains the proper key:

```shell
gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
```

The output should contain the full fingerprint `573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62` as follows:

```
pub   rsa2048 2011-08-19 [SC] [expires: 2027-05-24]
      573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
uid                      nginx signing key <signing-key@nginx.com>
```

If the fingerprint is different, remove the file.

To set up the apt repository for stable nginx packages, run the following command:

```shell
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```

Set up repository pinning to prefer our packages over distribution-provided ones:

```shell
echo -e "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" \
    | sudo tee /etc/apt/preferences.d/99nginx
```

To install nginx, run the following commands:

```shell
sudo apt update
sudo apt install nginx
```

## commands

```shell
sudo systemctl status nginx
```

```shell
sudo systemctl start nginx
```

```shell
sudo systemctl enable nginx
```

## Deploy a website with php-fpm

```shell
sudo nano /etc/nginx/conf.d/example.com.conf
```

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;

    root /var/www/example.com/public;
    index index.html index.htm index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        try_files $fastcgi_script_name =404;
        fastcgi_index index.php;
        fastcgi_pass unix:/var/run/php/php-fpm.sock;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }

    location ~ /\.ht {
        deny all;
    }

    access_log /var/log/nginx/example.com.log;
}
```

```shell
nginx -t
```

```shell
sudo systemctl restart nginx
```


```nginx
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;

    root /var/www/example.com/dist;
    index index.html;

    location ^~ /api/ {
        proxy_pass http://192.168.1.2/;

        #proxy_set_header Host $host;
        proxy_set_header Host api.example.com;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_http_version 1.1;

        #proxy_ssl_server_name on;
        #proxy_ssl_verify off;
    }

    location / {
        try_files $uri $uri/ /index.html?$query_string;
    }

    location ~ /\.ht {
        deny all;
    }

    access_log /var/log/nginx/example.com.log;
}
```
