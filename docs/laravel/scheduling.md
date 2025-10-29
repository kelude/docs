---
outline: deep
---

# Laravel Task Scheduling

[Official Documentation](https://laravel.com/docs/scheduling)

This guide explains how to run Laravel’s task scheduler automatically using either **crontab** or a **systemd timer**.

## Running the Scheduler Using Crontab

### Edit the Crontab for `www-data`

Laravel’s task scheduler needs to be executed every minute.  
To run it as the `www-data` user (the default web server user for Apache/Nginx):

```bash
sudo crontab -u www-data -e
```

Then add the following line:

```
* * * * * cd /var/www/your-laravel-app && php artisan schedule:run >> /dev/null 2>&1
```

### Test the Command

You can test the scheduler manually to confirm it runs correctly:

```bash
sudo -u www-data php /var/www/your-laravel-app/artisan schedule:run
```

## Using a systemd Timer

A systemd timer is a more modern and reliable alternative to cron.
It provides automatic catch-up for missed runs (`Persistent=true`), better logging, and unified process management.

### Create a Systemd Service Unit

Create a new service file:

```bash
sudo nano /etc/systemd/system/laravel-scheduler.service
```

Add the following content:

```ini
[Unit]
Description=Run Laravel Task Scheduler
After=network.target

[Service]
# Run as www-data
User=www-data
Group=www-data

# Path to your Laravel project
WorkingDirectory=/var/www/your-laravel-app

# Run the scheduler
ExecStart=php artisan schedule:run

# Run once and exit
Type=oneshot
```

Save and exit (`Ctrl+O` (the letter O, not zero) to write the file, then `Ctrl+X` to exit).

### Create the Timer Unit

Now create the timer file:

```bash
sudo nano /etc/systemd/system/laravel-scheduler.timer
```

Add the following content:

```ini
[Unit]
Description=Run Laravel Task Scheduler every minute

[Timer]
# Start one minute after boot
OnBootSec=1min

# Run every minute thereafter
OnUnitActiveSec=1min

# Allow up to 30s of delay for batching
AccuracySec=30s

# The service unit to trigger
Unit=laravel-scheduler.service

# Ensure missed runs execute after downtime
Persistent=true

[Install]
WantedBy=timers.target
```

### Enable and Start the Timer

Reload the systemd daemon, enable, and start the timer:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now laravel-scheduler.timer
```

### Verify It’s Working

Check timer status:

```bash
systemctl list-timers | grep laravel
```

Or detailed info:

```bash
sudo systemctl status laravel-scheduler.timer
```

To check the service log:

```bash
sudo journalctl -u laravel-scheduler.service -n 20
```

## Log Output to a File

If you prefer to keep a log of scheduler runs, modify your service file:

```ini
ExecStart=php artisan schedule:run >> /var/www/your-laravel-app/storage/logs/scheduler.log 2>&1
```
