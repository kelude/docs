# Certbot

### Installing Certbot

```shell
sudo apt install certbot python3-certbot-nginx
```

### Obtain the SSL/TLS Certificate

```shell
sudo certbot certonly --nginx -d example.com -d www.example.com
```

### Nginx configuration

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;

    root /var/www/example.com/public;
    index index.html index.htm index.php;

    access_log /var/log/nginx/example.com.log;

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

    listen [::]:443 ssl;
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

}
```

If you want to `HTTP` redirect to `HTTPS`:

```nginx
server {
    if ($host = example.com) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    listen [::]:80;
    server_name example.com;
    return 404;

}
```

### Verifying Certbot Auto-Renewal

```shell
sudo systemctl status certbot.timer
```

Output
```
● certbot.timer - Run certbot twice daily
     Loaded: loaded (/lib/systemd/system/certbot.timer; enabled; vendor preset: enabled)
     Active: active (waiting) since Sun 2024-04-07 09:59:09 UTC; 18min ago
    Trigger: Sun 2024-04-07 23:45:05 UTC; 13h left
   Triggers: ● certbot.service

Apr 07 09:59:09 vultr systemd[1]: Started Run certbot twice daily.
```
