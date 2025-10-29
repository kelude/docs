# MySQL

## Create database and user

```shell
mysql -u root -p
```

Specify `host` and `port`:

```shell
mysql -u root -h 127.0.0.1 -P 33060 -p
```

```sql
CREATE DATABASE example_database CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

```sql
CREATE USER 'example_user'@'%' IDENTIFIED BY RANDOM PASSWORD;
```

```
+----------------+-----------+----------------------+-------------+
| user           | host      | generated password   | auth_factor |
+----------------+-----------+----------------------+-------------+
| example_user   | %         | 3u5][_hSi{Z(+YS;;(pk |           1 |
+----------------+-----------+----------------------+-------------+
1 row in set (0.13 sec)
```

```sql
CREATE USER 'example_user'@'%' IDENTIFIED BY 'password';
```

```sql
GRANT ALL PRIVILEGES ON example_database.* TO 'example_user'@'%';
FLUSH PRIVILEGES;
```

```sql
SHOW DATABASES;
```

## Export & Import

#### Export

```shell
mysqldump -u root -p example_database > dump.sql
```

Excluding multiple tables

```shell
mysqldump -u root -p example_database --ignore-table=example_database.table1 --ignore-table=example_database.table2 > dump.sql 
```

#### Import

```shell
mysql -u root -p example_database < dump.sql
```

```sql
source dump.sql
```

```bash
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

```ini
[mysqld]
bind-address            = 0.0.0.0
```

```bash
sudo systemctl restart mysql
```

```sql
SELECT user, host FROM mysql.user;
```
