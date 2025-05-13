# redis-cli

```bash
sudo apt install redis-tools
```

```bash
redis-cli -h 127.0.0.1 -p 6379 -a password

redis-cli -h 127.0.0.1 -p 6379 -a password info memory
```

```bash
redis-cli -h 127.0.0.1 -p 6379 --tls
```

```bash
HGET key field
```

```text
"{\"key1\":\"value1\",\"key2\":\"value2\",\"key3\":1,\"key4\":\"value4\"}"
```

```bash
HDEL key field
```

```bash
HSET key field "{\"key1\":\"value1\",\"key2\":\"value2\",\"key3\":1,\"key4\":\"value4\"}"
```

