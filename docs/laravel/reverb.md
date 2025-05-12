# Reverb

[Official Documentation](https://laravel.com/docs/reverb)

### Supervisor Configuration

#### Configuring Supervisor

```shell
sudo nano /etc/supervisor/conf.d/laravel-reverb.conf
```

```ini
[program:laravel-reverb]
command=/usr/bin/php /var/www/laravel-reverb/artisan reverb:start
numprocs=1
autostart=true
autorestart=true
user=www-data
```

#### Starting Supervisor

```shell
sudo supervisorctl reread
```

```shell
sudo supervisorctl update
```

```shell
sudo supervisorctl status
```

### Web Server

```shell
sudo nano /etc/nginx/conf.d/laravel-reverb.conf
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
}
```

### Laravel Homestead

`Homestead.yaml`

```yaml
sites:
    - map: reverb.homestead.test
      to: http://0.0.0.0:8080
      type: "proxy"
```
