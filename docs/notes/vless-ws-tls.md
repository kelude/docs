# VLESS + WS + TLS 


## Installation

[XTLS/Xray-install](https://github.com/XTLS/Xray-install)

```bash
bash -c "$(curl -L https://github.com/XTLS/Xray-install/raw/main/install-release.sh)" @ install
```

## Configuration

```bash
xray uuid
```

```bash
vim /usr/local/etc/xray/config.json
```

```json
{
  "inbounds": [
    {
      "port": 10000,
      "listen":"127.0.0.1",
      "protocol": "vless",
      "settings": {
        "clients": [
          {
            "id": "YOUR-UUID",
	    	"level": 0
          }
        ],
		"decryption": "none"
      },
      "streamSettings": {
        "network": "ws",
		"security": "none",
        "wsSettings": {
          "path": "/app"
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
systemctl restart xray
systemctl status xray
```

```
vless://YOUR-UUID@ws.example.com:443?encryption=none&security=tls&type=ws&host=ws.example.com&path=%2Fapp&sni=ws.example.com#VLESS-WS-TLS
```

## Caddy

[Install Caddy server on Debian, Ubuntu, Raspbian](https://caddyserver.com/docs/install#debian-ubuntu-raspbian)

```bash
caddy version
```

```bash
cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.default
```

```bash
vim /etc/caddy/Caddyfile
```

```caddyfile
ws.example.com {
	root * /var/www/html
	file_server

	@xray_ws {
		path /app*
	}

	reverse_proxy @xray_ws localhost:10000
}
```

```bash
sudo caddy fmt --overwrite /etc/caddy/Caddyfile
```

```bash
caddy validate --config /etc/caddy/Caddyfile
```

```bash
caddy reload --config /etc/caddy/Caddyfile
```

```bash
systemctl status caddy
```

