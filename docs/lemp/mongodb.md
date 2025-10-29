---
outline: deep
---

# Install MongoDB 8 on Ubuntu Server 24.04

## Install MongoDB Community Edition on Ubuntu

[Official Documentation](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)

```bash
cat /etc/lsb-release
```

```bash
sudo apt-get install gnupg curl
```

```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
   --dearmor
```

```bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
```

```bash
sudo apt-get update
```

```bash
sudo apt-get install -y mongodb-org
```


```bash
sudo systemctl start mongod
```

```bash
sudo systemctl daemon-reload
```

```bash
sudo systemctl status mongod
```

```bash
sudo systemctl enable mongod
```

```bash
sudo systemctl stop mongod
```

```bash
sudo systemctl restart mongod
```

```bash
sudo apt install php-mongodb
```

### Bind IP

```bash
sudo nano /etc/mongod.conf
```

```yaml
# network interfaces
net:
  port: 27017
  bindIp: 0.0.0.0
```

## Install mongosh only

[MongoDB Shell (mongosh)](https://www.mongodb.com/zh-cn/docs/mongodb-shell/)
[mongosh method](https://www.mongodb.com/zh-cn/docs/manual/reference/method/)

```bash
sudo apt-get install gnupg
wget -qO- https://www.mongodb.org/static/pgp/server-8.0.asc | sudo tee /etc/apt/trusted.gpg.d/server-8.0.asc

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list

sudo apt-get update
sudo apt-get install -y mongodb-mongosh

mongosh --version
```

```bash
mongosh
```

```bash
mongosh

mongosh --host mongodb0.example.com --port 27017
mongosh --host mongodb.example.com --port 27017 --username alice@dba.example.com --password 
```

```bash
db

show dbs

use my_db

show collections
```






