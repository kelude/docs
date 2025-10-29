# Nginx


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
