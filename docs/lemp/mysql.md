---
outline: deep
---

# Install MySQL 8.4 on Ubuntu Server

[Official Documentation](https://dev.mysql.com/doc/refman/8.4/en/linux-installation-apt-repo.html)

## Update the System

```bash
sudo apt update && sudo apt upgrade -y
```

## Add the Official MySQL APT Repository

Ubuntu’s default repo only includes 8.0, so you must add the official Oracle repository that includes 8.4 LTS.

to check the latest version: [MySQL APT Repository](https://dev.mysql.com/downloads/repo/apt/)

```bash
wget https://dev.mysql.com/get/mysql-apt-config_0.8.36-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.36-1_all.deb
```

If your `wget` command can not found:

```bash
sudo apt install wget gnupg lsb-release -y
```

During the prompt:

1. In the menu, go to MySQL Server & Cluster (Currently selected: mysql-8.0)
2. Change it to mysql-8.4-lts
3. Press *OK* to confirm and exit.

Then refresh your package lists:

```bash
sudo apt update
```

## Confirm It’s Pointing to MySQL 8.4 LTS

Run:

```bash
apt-cache policy mysql-server
```

```yaml
mysql-server:
  Candidate: 8.4.2-1ubuntu24.04
  Version table:
     8.4.2-1ubuntu24.04 500
        500 http://repo.mysql.com/apt/ubuntu noble/mysql-8.4-lts amd64 Packages
```

If you still see 8.0 listed as “Candidate”, it means the repo config wasn’t set correctly — you can reconfigure:

```bash
sudo dpkg-reconfigure mysql-apt-config
sudo apt update
```

Then confirm again with `apt-cache policy`.

## Install MySQL 8.4 LTS

Now install MySQL normally — it will pull 8.4 LTS from Oracle’s repo:

```bash
sudo apt install mysql-server
```

This installs and starts the MySQL 8.4 service automatically.

## Verify Installation

Check the version:

```bash
mysql -V
```

Expected output:

```
mysql  Ver 8.0.36-0ubuntu0.22.04.1 for Linux on x86_64 ((Ubuntu))
```

You can also confirm from inside MySQL:

```bash
sudo mysql -e "SELECT VERSION();"
```

## Secure the Installation

Run the secure installation tool:

```bash
sudo mysql_secure_installation
```

- Recommended production answers:
- 
- Validate password plugin: *Y*
- Remove anonymous users: *Y*
- Disallow root login remotely: *Y*
- Remove test database: *Y*
- Reload privileges: *Y*

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
