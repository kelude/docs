# Laravel Queues

[Official Documentation](https://laravel.com/docs/queues)

### Supervisor

```shell
sudo apt install supervisor
```

```shell
sudo systemctl status supervisor

sudo systemctl restart supervisor

sudo systemctl stop supervisor

sudo systemctl start supervisor
```

### Deploy

```shell
sudo vim /etc/supervisor/conf.d/laravel-worker.conf
```

```ini
[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=/usr/bin/php /home/vagrant/code/laravel-queue/artisan queue:work
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=vagrant
numprocs=8
redirect_stderr=true
stdout_logfile=/home/vagrant/code/laravel-queue/storage/logs/worker.log
stopwaitsecs=3600
```

```shell
sudo supervisorctl update
```

```shell
sudo supervisorctl start "laravel-worker:*"
```

```shell
sudo supervisorctl status
```

```shell
php artisan queue:flush
```

```shell
php artisan queue:restart
```
