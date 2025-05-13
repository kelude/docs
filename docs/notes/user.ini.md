

```bash
sudo nano /var/www/laravel-app.com/public/.user.ini
```

```text
open_basedir=/var/www/laravel-app.com/public/:/tmp/:/var/www/laravel-app.com/
```

```bash
sudo chattr +i /var/www/laravel-app.com/public/.user.ini
sudo chattr -i /var/www/laravel-app.com/public/.user.ini
```

```bash
sudo nano /var/www/laravel-app.com/public/test.php
```

```php
<?php
$contents = file_get_contents("../../another.com/README.md");
var_dump($contents);
die();

// If the response is false, it works.
```
