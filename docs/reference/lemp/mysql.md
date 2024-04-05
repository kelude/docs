# MySQL

### Installation

```shell
sudo apt update
```

```shell
sudo apt install mysql-server
```

```shell
mysql -V
```

### Configuring MySQL

```shell
sudo mysql_secure_installation
```

### Create database and user

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
CREATE USER 'example_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

```sql
GRANT ALL ON example_database.* TO 'example_user'@'localhost';
```

```sql
SHOW DATABASES;
```

### Export & Import

```shell
mysqldump -u root -p example_database > dump.sql
```

```shell
mysql -u root -p example_database < dump.sql
```

```sql
source dump.sql
```
