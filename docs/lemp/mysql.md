---
outline: deep
---

# Install MySQL 8.4 on Ubuntu Server

[Official Documentation](https://dev.mysql.com/doc/refman/8.4/en/linux-installation-apt-repo.html)

## Update the System

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install wget gnupg lsb-release -y
```

## Add the Official MySQL APT Repository

Ubuntu’s default repo only includes 8.0, so you must add the official Oracle repository that includes 8.4 LTS.

to check the latest version: [MySQL APT Repository](https://dev.mysql.com/downloads/repo/apt/)

```bash
wget https://dev.mysql.com/get/mysql-apt-config_0.8.36-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.36-1_all.deb
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
