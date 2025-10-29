---
outline: deep
---

# Running Laravel Reverb in Production

[Official Documentation](https://laravel.com/docs/reverb)

## Supervisor Setup

### Install Supervisor

```bash
sudo apt-get install supervisor
```

### Create Supervisor Config

```bash
sudo vim /etc/supervisor/conf.d/laravel-reverb.conf
```

```ini
[program:laravel-reverb]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/laravel-reverb/artisan reverb:start
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=1
redirect_stderr=true
stdout_logfile=/var/www/laravel-reverb/reverb.log
```

### Apply and Verify

```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl status
```

## Nginx Configuration

### Create Nginx Config

```shell
sudo vim /etc/nginx/conf.d/reverb.example.com.conf
```

```nginx
server {
    listen 80;
    listen [::]:80;
    
    server_name reverb.example.com;

    location / {
        proxy_http_version 1.1;
        proxy_set_header Host $http_host;
        proxy_set_header Scheme $scheme;
        proxy_set_header SERVER_PORT $server_port;
        proxy_set_header REMOTE_ADDR $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
 
        proxy_pass http://0.0.0.0:8080;
    }

    # listen [::]:443 ssl;
    # listen 443 ssl;
    # ssl_certificate /etc/letsencrypt/live/reverb.example.com/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/reverb.example.com/privkey.pem;
    # include /etc/letsencrypt/options-ssl-nginx.conf;
    # ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}
```

### Enable HTTPS

```bash
sudo apt install certbot python3-certbot-nginx
```

```bash
sudo certbot certonly --nginx -d reverb.example.com
```
