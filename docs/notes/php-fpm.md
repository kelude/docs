# php-fpm

```bash
sudo nano /etc/php/8.3/fpm/pool.d/www.conf

sudo systemctl status php8.3-fpm
sudo systemctl restart php8.3-fpm

sudo systemctl status php8.4-fpm
sudo systemctl restart php8.4-fpm
```

1GB
------

```ini
pm.max_children = 30
pm.start_servers = 5
pm.min_spare_servers = 5
pm.max_spare_servers = 20
```

[2GB]
------

```ini
pm.max_children = 50
pm.start_servers = 5
pm.min_spare_servers = 5
pm.max_spare_servers = 30
```

4GB
------

```ini
pm.max_children = 80
pm.start_servers = 10
pm.min_spare_servers = 10
pm.max_spare_servers = 30
```

8GB
------

```ini
pm.max_children = 120
pm.start_servers = 10
pm.min_spare_servers = 10
pm.max_spare_servers = 30
```

16GB
------

```ini
pm.max_children = 200
pm.start_servers = 15
pm.min_spare_servers = 15
pm.max_spare_servers = 50
```

32GB
------

```ini
pm.max_children = 300
pm.start_servers = 20
pm.min_spare_servers = 20
pm.max_spare_servers = 50
```
