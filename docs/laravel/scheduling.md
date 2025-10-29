---
outline: deep
---

# Laravel Task Scheduling

[Official Documentation](https://laravel.com/docs/scheduling)

## Running the Scheduler

### Edit the Crontab for `www-data`

```bash
sudo crontab -u www-data -e
```

```
* * * * * cd /var/wwww/your-laravel-app && php artisan schedule:run >> /dev/null 2>&1
```

## systemd timer

### Create a Systemd Service Unit

Create a new service file:

```bash
sudo nano /etc/systemd/system/laravel-scheduler.service
```

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
ExecStart=/usr/bin/php artisan schedule:run

# Don't restart automatically (not a daemon)
Type=oneshot
```

Save and exit (`Ctrl+O`, `Ctrl+X`).

### Create the Timer Unit

Now create the timer file:

```bash
sudo nano /etc/systemd/system/laravel-scheduler.timer
```

```ini
[Unit]
Description=Run Laravel Task Scheduler every minute

[Timer]
OnBootSec=1min
OnUnitActiveSec=1min
AccuracySec=30s
Unit=laravel-scheduler.service
Persistent=true

[Install]
WantedBy=timers.target
```

### Enable and Start the Timer

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
