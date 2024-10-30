# MySQL Setting Up Replication Using GTIDs

[Setting Up Replication Using GTIDs](https://dev.mysql.com/doc/mysql-replication-excerpt/8.0/en/replication-gtids-howto.html)

[Setting up a basic GTID based MySQL Replication setup](https://medium.com/@nandagopal05/setting-up-a-basic-gtid-based-mysql-replication-setup-e615890672)

### Configure the Master Server

```bash
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

```ini
[mysqld]
bind-address            = 0.0.0.0

server-id               = 1
log_bin                 = /var/log/mysql/mysql-bin.log

gtid_mode = ON
enforce-gtid-consistency = ON

```

```bash
sudo systemctl restart mysql
```

```sql
CREATE USER 'replicator'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT REPLICATION SLAVE ON *.* TO 'replicator'@'%';
FLUSH PRIVILEGES;
```

```sql
SHOW MASTER STATUS;
SHOW REPLICAS;
```

### Configure the Replica Server

```bash
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

```ini
[mysqld]
bind-address            = 0.0.0.0

server-id               = 2
log_bin                 = /var/log/mysql/mysql-bin.log

gtid_mode = ON
enforce-gtid-consistency = ON
read_only = 1
```

```bash
sudo systemctl restart mysql
```

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

```sql
SHOW REPLICA STATUS\G;
```
