# Task Scheduling

[Official Documentation](https://laravel.com/docs/scheduling)

### Running the Scheduler

```shell
crontab -e
```

```
* * * * * cd /home/vagrant/code/laravel && php artisan schedule:run >> /dev/null 2>&1
```
