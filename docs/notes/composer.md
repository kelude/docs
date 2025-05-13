# Composer

```bash
composer install --no-dev --prefer-dist --optimize-autoloader
```

```bash
composer update --no-dev --prefer-dist --optimize-autoloader
```

## Composer local repository

```bash
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
