# PHP

### Add the Ondřej Surý PPA for PHP

```bash
sudo add-apt-repository ppa:ondrej/php
sudo apt update
```

### Install PHP

```shell
sudo apt install php8.3-{cli,fpm,mysql,curl,xml,mbstring,gd,zip,redis,bcmath,json,imagick}
```

### Check the PHP Version

```shell
php -v
```

```
PHP 8.3.4 (cli) (built: Mar 16 2024 08:40:08) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.3.4, Copyright (c) Zend Technologies
    with Zend OPcache v8.3.4, Copyright (c), by Zend Technologies
```    

### Check the PHP-FPM

```shell
sudo systemctl status php8.3-fpm
```

### Composer

```shell
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"

php composer-setup.php --install-dir=/usr/local/bin --filename=composer

php -r "unlink('composer-setup.php');"
```

```shell
composer --version
```

### .user.ini

```shell
sudo nano /var/www/example.com/.user.ini
```

```
open_basedir=/var/www/example.com/:/tmp/
```

For Laravel App

```
open_basedir=/var/www/laravel-app.com/public/:/tmp/:/var/www/laravel-app.com/
```

```shell
sudo chattr +i /var/www/example.com/.user.ini
```

```shell
sudo chattr -i /var/www/example.com/.user.ini
```

Tesing

```shell
sudo nano /var/www/example.com/test.php
```

```php
<?php

$contents = file_get_contents("../another.com/README.md");
var_dump($contents);
die();
```

If the response is `false`, it works.
