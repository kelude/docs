# PHP


## Setting `open_basedi`r in `.user.ini`

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
