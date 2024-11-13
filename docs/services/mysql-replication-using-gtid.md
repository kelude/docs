# MySQL Setting Up Replication Using GTIDs

[Setting Up Replication Using GTIDs](https://dev.mysql.com/doc/mysql-replication-excerpt/8.0/en/replication-gtids-howto.html)

[Setting up a basic GTID based MySQL Replication setup](https://medium.com/@nandagopal05/setting-up-a-basic-gtid-based-mysql-replication-setup-e615890672)

### Configure the Master Server

Edit the MySQL configuration file

```bash
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

```ini
[mysqld]
bind-address            = 0.0.0.0

server-id               = 1
log_bin                 = /var/log/mysql/mysql-bin.log
max_binlog_size   = 100M

gtid_mode = ON
enforce-gtid-consistency = ON

binlog_format = ROW # Recommended binlog format

binlog_expire_logs_seconds = 604800 # MySQL 8.0.3+
```

Restart the MySQL service to apply the changes:

```bash
sudo systemctl restart mysql
```

Create a user for replication on the master server:

```sql
CREATE USER 'replicator'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT REPLICATION SLAVE ON *.* TO 'replicator'@'%';
FLUSH PRIVILEGES;
```

#### Checking Binary Log Position

Run the following command on the master server to record the current binary log position:

```sql
SHOW MASTER STATUS;
```

```sql
SHOW REPLICAS;
```

### Configure the Replica Server

Edit the `mysqld.cnf` file on the replica server:

```bash
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

```ini
[mysqld]
bind-address            = 0.0.0.0

server-id               = 2

gtid_mode = ON
enforce-gtid-consistency = ON

binlog_format = ROW

read_only = 1
# super_read_only = 1
```

Restart the MySQL service:

```bash
sudo systemctl restart mysql
```

#### Setting Up Replication on the Replica Server

Log into the MySQL console on the replica server and run:

```sql
CHANGE REPLICATION SOURCE TO
    SOURCE_HOST = '192.168.56.102',
    SOURCE_PORT = 3306,
    SOURCE_USER = 'replicator',
    SOURCE_PASSWORD = 'password',
    SOURCE_AUTO_POSITION = 1;
```

```sql
START REPLICA;
```

#### Verifying the Replication Status

```sql
SHOW REPLICA STATUS\G;
```

Ensure that `Replica_IO_Running` and `Replica_SQL_Running` are both `Yes` and that there are no errors.

```sql
SELECT * FROM performance_schema.replication_applier_status_by_worker;
```
