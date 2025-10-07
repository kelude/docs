---
outline: deep
---

# PHP

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

### Install Composer

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"

sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer

php -r "unlink('composer-setup.php');"
```

```bash
composer --version
```

### Setting `open_basedi`r in `.user.ini`

WordPress example

```bash
sudo nano /var/www/example.com/.user.ini
```

```
open_basedir=/var/www/example.com/:/tmp/
```

Laravel app example

```bash
sudo nano /var/www/laravel-app.com/public/.user.ini
```

```
open_basedir=/var/www/laravel-app.com/public/:/tmp/:/var/www/laravel-app.com/
```

Set the immutable attribute

```bash
sudo chattr +i /var/www/example.com/.user.ini
```

```bash
sudo chattr -i /var/www/example.com/.user.ini
```

Tesing

```bash
sudo nano /var/www/example.com/test.php
```

```php
<?php

$contents = file_get_contents("../another.com/README.md");
var_dump($contents);
die();
```

If the response is `false`, it works.
