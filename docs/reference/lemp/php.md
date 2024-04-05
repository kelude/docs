# PHP

### Installation

```shell
sudo add-apt-repository ppa:ondrej/php
```

```shell
sudo apt update
```

```shell
sudo apt install php-{fpm,mysql,curl,xml,gd,zip,redis,imagick,mongodb}
```

```shell
php -v
```

```shell
sudo systemctl status php-fpm
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
sudo vim /var/www/example.com/.user.ini
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
sudo vim /var/www/example.com/test.php
```

```php
<?php

$contents = file_get_contents("../another.com/README.md");
var_dump($contents);
die();
```

If the response is `false`, it works.
