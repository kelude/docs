---
outline: deep
---

# Install PHP on Ubuntu Server

## Install PHP

### Add the Ondřej Surý PPA for PHP

```bash
sudo add-apt-repository ppa:ondrej/php
sudo apt update
```

### Install PHP

```bash
sudo apt install php-{cli,fpm,mysql,curl,xml,mbstring,gd,zip,redis,bcmath,soap,imagick}
```

### Check the PHP Version

```bash
php -v
```

```
PHP 8.4.7 (cli) (built: May  9 2025 06:54:31) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.4.7, Copyright (c) Zend Technologies
    with Zend OPcache v8.4.7, Copyright (c), by Zend Technologies
```    

### Check the PHP-FPM

```bash
sudo systemctl status php8.4-fpm
```

## Install Composer

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"

sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer

php -r "unlink('composer-setup.php');"
```

Check the composer version:

```bash
composer --version
```
