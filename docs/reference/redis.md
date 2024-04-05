# Redis

[Install Redis server on Ubuntu/Debian](https://redis.io/docs/install/install-redis/install-redis-on-linux/)

### Installation

Prerequisites

```shell
sudo apt install lsb-release curl gpg
```

Add the repository to the apt index

```shell
curl -fsSL https://packages.redis.io/gpg \
| sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
```

```shell
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] \
https://packages.redis.io/deb $(lsb_release -cs) main" \
| sudo tee /etc/apt/sources.list.d/redis.list
```

update it

```shell
sudo apt update
```

and then install:

```shell
sudo apt install redis
```

commands:

```shell
sudo systemctl status redis-server
```

```shell
sudo systemctl enable redis-server
```

```shell
sudo systemctl start redis-server
```

redis-cli

```shell
redis-cli -h 127.0.0.1 -p 6379
```

Redis configuration file

```shell
sudo vim /etc/redis/redis.conf
```
