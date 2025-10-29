---
outline: deep
---

# Install MySQL 8.4 on Ubuntu Server

[Official Documentation](https://dev.mysql.com/doc/refman/8.4/en/linux-installation-apt-repo.html)

## Update the Package Index

First, update the package index to ensure the latest information on available packages.

```bash
sudo apt update
```

## Install MySQL Server

Install the MySQL server package using the `apt` package manager.

```bash
sudo apt install mysql-server
```

Check the MySQL version:

```bash
mysql -V
```

Output

```
mysql  Ver 8.0.36-0ubuntu0.22.04.1 for Linux on x86_64 ((Ubuntu))
```

## Secure MySQL Installation

Run the `mysql_secure_installation` command to secure the MySQL installation.

```bash
sudo mysql_secure_installation
```

```
Securing the MySQL server deployment.

Connecting to MySQL using a blank password.

VALIDATE PASSWORD COMPONENT can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD component?

Press y|Y for Yes, any other key for No: y
```

```
There are three levels of password validation policy:

LOW    Length >= 8
MEDIUM Length >= 8, numeric, mixed case, and special characters
STRONG Length >= 8, numeric, mixed case, special characters and dictionary                  file

Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: 2
```

```
Skipping password set for root as authentication with auth_socket is used by default.
If you would like to use password authentication instead, this can be done with the "ALTER_USER" command.
See https://dev.mysql.com/doc/refman/8.0/en/alter-user.html#alter-user-password-management for more information.

By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) : y
```

```
Success.
```

```
Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : y
```

```
Success.
```

```
By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.


Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y
```

```
 - Dropping test database...
Success.

 - Removing privileges on test database...
Success.
```

```
Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y
```

```
Success.

All done!
```

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
