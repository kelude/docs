# Compile and install PHP extension

```shell
wget https://pecl.php.net/get/mongodb-1.17.3.tgz
tar -xzvf mongodb-1.17.3.tgz
cd mongodb-1.17.3

/www/server/php/82/bin/phpize
./configure --with-php-config=/www/server/php/82/bin/php-config
make && make install
```

```shell
sudo nano php.ini
```

```ini
extension=mongodb.so
```
