---
outline: deep
---

# VLESS + WS + TLS Setup Guide

This guide explains how to install and configure Xray with VLESS + WebSocket + TLS, using Caddy as the reverse proxy and TLS provider.

## Installation

Official installation script from [XTLS/Xray-install](https://github.com/XTLS/Xray-install):

```bash
bash -c "$(curl -L https://github.com/XTLS/Xray-install/raw/main/install-release.sh)" @ install
```

After installation, check your Xray version and generate a UUID:

```bash
xray version
```

```bash
xray uuid
```

## Xray Configuration

Edit the configuration file:

```bash
vim /usr/local/etc/xray/config.json
```

Paste and modify the following template:

```json
{
  "inbounds": [
    {
      "port": 10000,
      "listen": "127.0.0.1",
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

Save and restart Xray:

```bash
systemctl restart xray
systemctl status xray
```

## VLESS Client URL

Use the following URL format to connect:

```
vless://YOUR-UUID@ws.example.com:443?encryption=none&security=tls&type=ws&host=ws.example.com&path=%2Fapp&sni=ws.example.com#VLESS-WS-TLS
```

> Replace `YOUR-UUID` and `ws.example.com` with your actual UUID and domain name.

## Caddy Configuration

Official Caddy installation guide for Debian/Ubuntu/Raspbian:

👉 [Caddy Documentation](https://caddyserver.com/docs/install#debian-ubuntu-raspbian)

```bash
sudo apt update
```

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
```

```bash
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
```

```bash
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
```

```bash
chmod o+r /usr/share/keyrings/caddy-stable-archive-keyring.gpg
```

```bash
chmod o+r /etc/apt/sources.list.d/caddy-stable.list
```

```bash
sudo apt update
```

```bash
sudo apt install caddy
```

### Check Caddy Installation

```bash
caddy version
```

### Backup Default Configuration

```bash
cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.default
```

### Edit the Caddyfile

```bash
vim /etc/caddy/Caddyfile
```

Example configuration:

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

### Format and Validate Configuration

```bash
sudo caddy fmt --overwrite /etc/caddy/Caddyfile
caddy validate --config /etc/caddy/Caddyfile
```

### Reload Caddy

```bash
caddy reload --config /etc/caddy/Caddyfile
systemctl status caddy
```

## Done!

Your VLESS + WS + TLS setup is now complete.

- Xray runs locally on port `10000`
- Caddy handles TLS and reverse proxies traffic to Xray
- Use the generated VLESS URL in your client app
