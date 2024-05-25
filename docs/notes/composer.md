# Composer

## Composer local repository

```shell
sudo nano composer.json
```

```json
{
  "repositories": [
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
composer require package/name
```
