# Task Scheduling

[Official Documentation](https://laravel.com/docs/scheduling)

### Running the Scheduler

```shell
sudo crontab -u www-data -e
```

```bash
sudo -u www-data crontab -e
```

```
* * * * * cd /var/wwww/laravel && /usr/bin/php artisan schedule:run >> /dev/null 2>&1
```
