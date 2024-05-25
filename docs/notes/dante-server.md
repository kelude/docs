# Dante Server

## Install on Ubuntu

```shell
sudo apt update
```

```shell
sudo apt install dante-server
```

```shell
sudo systemctl status danted
```

```shell
sudo danted -v
```

```shell
sudo nano /etc/danted.conf
```

```text
logoutput: syslog

# The listening network interface or address.
internal: eth0 port = 1080

# The proxying network interface or address.
external: eth0

# socks-rules determine what is proxied through the external interface.
socksmethod: username

# client-rules determine who can connect to the internal interface.
clientmethod: none

user.privileged: root

user.unprivileged: nobody

user.libwrap: nobody

client pass {
    from: 0.0.0.0/0 to: 0.0.0.0/0
}

socks pass {
    from: 0.0.0.0/0 to: 0.0.0.0/0
}
```

```shell
sudo ufw allow 1080
```

```shell
sudo useradd -r -s /bin/false your_dante_user
sudo passwd your_dante_user
```

```shell
sudo systemctl restart danted
```

```shell
sudo systemctl status danted
```

```shell
curl -v -x socks5://your_dante_user:your_dante_password@your_server_ip:1080 \
http://www.google.com/
```
