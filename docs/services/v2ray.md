# V2Ray

[fhs-install-v2ray](https://github.com/v2fly/fhs-install-v2ray)

### Install

```shell
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)
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

### Update dat

```shell
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-dat-release.sh)
```

### Uninstall

```shell
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh) --remove
```

```shell
sudo systemctl enable v2ray
```

```shell
sudo systemctl start v2ray
```

```shell
uuidgen
```

```shell
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

```shell
sudo systemctl restart v2ray
```

```shell
sudo systemctl status v2ray
```

### Caddy

[Install Caddy server on Debian, Ubuntu, Raspbian](https://caddyserver.com/docs/install#debian-ubuntu-raspbian)

```shell
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

### Nginx

```shell
sudo nano /etc/nginx/conf.d/mydomain.me.conf
```

```nginx
server {
  listen 443 ssl;
  listen [::]:443 ssl;
  server_name mydomain.me;
  
  ssl_certificate /etc/letsencrypt/live/mydomain.me/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/mydomain.me/privkey.pem;
  ssl_session_timeout 1d;
  ssl_session_cache shared:MozSSL:10m;
  ssl_session_tickets off;
  
  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
  ssl_prefer_server_ciphers off;
  
  location /ray {
    if ($http_upgrade != "websocket") {
        return 404;
    }
    proxy_redirect off;
    proxy_pass http://127.0.0.1:10000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    # Show real IP in v2ray access.log
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```
