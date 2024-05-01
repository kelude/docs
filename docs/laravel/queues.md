# Laravel Queues

[Official Documentation](https://laravel.com/docs/queues)

### Supervisor Configuration

#### Installing Supervisor

```shell
sudo apt install supervisor
```

```shell
sudo systemctl status supervisor

sudo systemctl restart supervisor

sudo systemctl stop supervisor

sudo systemctl start supervisor
```

#### Configuring Supervisor

```shell
sudo nano /etc/supervisor/conf.d/laravel-worker.conf
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
