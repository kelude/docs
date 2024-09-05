# docker-qbittorrent-nox

```bash
cd /home/ubuntu/
mkdir docker
cd docker
git clone https://github.com/qbittorrent/docker-qbittorrent-nox.git qbt-nox
```

```
# Refer to Readme.md for an explanation of the variables

QBT_EULA=accept
QBT_VERSION=latest
QBT_WEBUI_PORT=8080

QBT_CONFIG_PATH=/home/ubuntu/docker/qbt-nox/config
QBT_DOWNLOADS_PATH=/home/ubuntu/downloads
#QBT_DOWNLOADS_PATH=/mnt/disk01/downloads
```

```bash
sudo docker compose up
```

```bash
sudo docker compose up -d
```

```bash
sudo docker ps
```

```bash
sudo docker logs qbittorrent-nox
```

```bash
sudo docker compose down
```
