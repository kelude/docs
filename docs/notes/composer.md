# Composer

```shell
composer install --no-dev --prefer-dist --optimize-autoloader
composer update --no-dev --prefer-dist --optimize-autoloader
```

## Composer local repository

```shell
sudo nano composer.json
```

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/vendor/repo.git",
    },
    {
      "type": "path",
      "url": "/path/to/package/name",
      "options": {
        "symlink": false
      }
    }
  ]
}
```

```shell
composer require package/name:dev-main
```
