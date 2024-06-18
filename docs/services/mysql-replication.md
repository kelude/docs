# MySQL Replication

[How To Set Up Replication in MySQL](https://www.digitalocean.com/community/tutorials/how-to-set-up-replication-in-mysql)

[How to Configure MySQL 8.0 Master-Slave Replication on Ubuntu 22.04 LTS Server](https://www.youtube.com/watch?v=s4oYWBGy_FE)

### Configuring the Source Database 

IP: 192.168.1.101

```shell
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

```ini
bind-address            = 0.0.0.0
server-id               = 1
log_bin          		= /var/log/mysql/mysql-bin.log
```

```shell
sudo systemctl restart mysql
```

### Creating a Replication User

```shell
sudo mysql
```

```sql
CREATE USER 'replica_user'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT REPLICATION SLAVE ON *.* TO 'replica_user'@'%';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'replica_user'@'%';
```

```sql
SHOW MASTER STATUS;
```

```sql
SHOW REPLICAS;
```

### Configuring the Replica Database

IP: 192.168.1.102, 192.168.1.103

```shell
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

```ini
bind-address            = 0.0.0.0
server-id               = 2
log_bin          		= /var/log/mysql/mysql-bin.log

relay-log               = /var/log/mysql/mysql-relay-bin.log
```

```shell
sudo systemctl restart mysql
```

```shell
sudo mysql
```

```sql
CHANGE REPLICATION SOURCE TO SOURCE_HOST='192.168.1.101', SOURCE_USER='replica_user', SOURCE_PASSWORD='password', SOURCE_LOG_FILE='mysql-bin.000001', SOURCE_LOG_POS=1577;
```

```sql
START REPLICA;
```

```sql
SHOW REPLICA STATUS\G;
```

```sql
STOP REPLICA;
```


```sql
CREATE DATABASE example_database CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'example_user'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON example_database.* TO 'example_user'@'%';
```
