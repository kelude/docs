# Redis

[Install Redis on Linux](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-linux/)

## Installation

Prerequisites

```bash
sudo apt-get install lsb-release curl gpg
```

Add the repository to the apt index

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
```

```bash
sudo chmod 644 /usr/share/keyrings/redis-archive-keyring.gpg
```

```bash
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

update it

```bash
sudo apt-get update
```

and then install:

```bash
sudo apt-get install redis
```

```bash
sudo systemctl enable redis-server
```

```bash
sudo systemctl start redis-server
```


## redis-cli

```shell
redis-cli -h 127.0.0.1 -p 6379
```

Redis configuration file

```shell
sudo nano /etc/redis/redis.conf
```
