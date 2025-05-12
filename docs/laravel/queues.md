# Queues

[Official Documentation](https://laravel.com/docs/queues)

### Supervisor Configuration

#### Configuring Supervisor

```shell
sudo nano /etc/supervisor/conf.d/laravel-worker.conf
```

```ini
[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=/usr/bin/php /var/www/laravel-worker/artisan queue:work
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=8
redirect_stderr=true
stdout_logfile=/var/log/laravel-worker/worker.log
stopwaitsecs=3600
```

#### Starting Supervisor

```shell
sudo supervisorctl reread
```

```shell
sudo supervisorctl update
```

```shell
sudo supervisorctl start "laravel-worker:*"
```

### Commands

```shell
sudo supervisorctl status
```

To delete all of your failed jobs from the failed_jobs table, you may use the queue:flush command:

```shell
php artisan queue:flush
```

You may gracefully restart all of the workers by issuing the queue:restart command:

```shell
php artisan queue:restart
```
