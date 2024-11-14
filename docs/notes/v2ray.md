# v2ray

## Install V2Ray

[fhs-install-v2ray](https://github.com/v2fly/fhs-install-v2ray)


### Download the installation script
```bash
curl -O https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh
```

### Execute Installation

```bash
bash install-release.sh
```

```text
installed: /usr/local/bin/v2ray
installed: /usr/local/bin/v2ctl
installed: /usr/local/share/v2ray/geoip.dat
installed: /usr/local/share/v2ray/geosite.dat
installed: /usr/local/etc/v2ray/config.json
installed: /var/log/v2ray/
installed: /var/log/v2ray/access.log
installed: /var/log/v2ray/error.log
installed: /etc/systemd/system/v2ray.service
installed: /etc/systemd/system/v2ray@.service
```

### Run V2Ray

```bash
sudo systemctl start v2ray
```

Set V2Ray to start automatically at boot:

```bash
sudo systemctl enable v2ray
```

```bash
uuidgen
```

```bash
sudo nano /usr/local/etc/v2ray/config.json
```

```json
{
  "inbounds": [
    {
      "port": 10000,
      "listen":"127.0.0.1",
      "protocol": "vmess",
      "settings": {
        "clients": [
          {
            "id": "3de57403-7b9f-4e14-952a-d9e3b716695e",
            "alterId": 0
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/ray"
        }
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "settings": {}
    }
  ]
}
```

```bash
sudo systemctl restart v2ray
```

```bash
sudo systemctl status v2ray
```

### Update V2Ray

```bash
bash install-release.sh
```

### Caddy

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
```

```bash
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' \
  | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
```

```bash
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' \
  | sudo tee /etc/apt/sources.list.d/caddy-stable.list
```

```bash
sudo apt update
```

```bash
sudo apt install caddy
```

```bash
sudo systemctl status caddy
```

```bash
cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.default
```

```bash
sudo nano /etc/caddy/Caddyfile
```

```Caddyfile
mydomain.me {
    log {
        output file /etc/caddy/caddy.log
    }
    tls {
        protocols tls1.2 tls1.3
        ciphers TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
        curves x25519
    }
    @v2ray_websocket {
        path /ray
        header Connection Upgrade
        header Upgrade websocket
    }
    reverse_proxy @v2ray_websocket localhost:10000
}
```

```bash
sudo systemctl restart caddy
```

## Update `.dat`

```bash
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-dat-release.sh)
```

## Remove V2Ray

```bash
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh) --remove
```
