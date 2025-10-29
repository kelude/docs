---
outline: deep
---

# Install PHP and Composer on Ubuntu Server

## Install PHP

### Add the Ondřej Surý PPA for PHP

The official Ubuntu repositories may not include the latest PHP versions.
The Ondřej Surý PPA provides up-to-date and stable PHP packages.

```bash
sudo add-apt-repository ppa:ondrej/php
```

```bash
sudo apt update
```

### Install PHP and Common Extensions

Install PHP-FPM (for web servers like Nginx) and essential PHP modules commonly used in production environments:

```bash
sudo apt install php-{cli,fpm,mysql,curl,xml,mbstring,gd,zip,redis,bcmath,soap,imagick}
```

### Verify PHP Installation

Check the installed PHP version:

```bash
php -v
```

Expected output (example):

```
PHP 8.4.7 (cli) (built: May  9 2025 06:54:31) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.4.7, Copyright (c) Zend Technologies
    with Zend OPcache v8.4.7, Copyright (c), by Zend Technologies
```    

### Verify PHP-FPM Status

Ensure that PHP-FPM is active and running:

```bash
sudo systemctl status php8.4-fpm
```

## Install Composer

Composer is the standard dependency manager for PHP.

### Download the Composer Installer

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
```

### Install Composer Globally

```bash
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

### Clean Up the Installer

```bash
php -r "unlink('composer-setup.php');"
```

### Verify the Installation

```bash
composer --version
```

## Configure PHP-FPM

### Edit the PHP-FPM Pool Configuration

Open the default pool configuration file:

```bash
sudo nano /etc/php/8.4/fpm/pool.d/www.conf
```

### Recommended Configuration

Set the process manager to `dynamic` for balanced resource usage:

```ini
pm = dynamic
```

### Suggested PHP-FPM Process Settings

| RAM | pm.max_children | pm.start_servers | pm.min_spare_servers | pm.max_spare_servers |
|-----|-----------------|------------------|----------------------|----------------------|
| 1G  | 30              | 5                | 5                    | 20                   |
| 2G  | 50              | 5                | 5                    | 30                   |
| 4G  | 80              | 10               | 10                   | 30                   |
| 8G  | 120             | 10               | 10                   | 30                   |
| 16G | 200             | 15               | 15                   | 50                   |
| 32G | 300             | 20               | 20                   | 50                   |

Template example:

```ini
pm = dynamic
pm.max_children = 40
pm.start_servers = 5
pm.min_spare_servers = 5
pm.max_spare_servers = 15
pm.max_requests = 500
```

### Apply and Restart PHP-FPM

After making changes, restart the PHP-FPM service:

```bash
sudo systemctl restart php8.4-fpm
```
