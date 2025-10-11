# docker-qbittorrent

## 创建配置目录

```bash
mkdir -p /mnt/disk01/qbittorrent/config
mkdir -p /mnt/disk01/downloads
```

```bash
sudo chown -R 1000:1000 /mnt/disk01/qbittorrent/config /mnt/disk01/downloads
```

## 创建 docker-compose.yml

```bash
sudo nano /mnt/disk01/qbittorrent/docker-compose.yml
```

```yml
services:
  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Etc/UTC
      - WEBUI_PORT=8080
      - TORRENTING_PORT=6881
    volumes:
      - /mnt/disk01/qbittorrent/config:/config
      - /mnt/disk01/downloads:/downloads
    ports:
      - 8080:8080
      - 6881:6881
      - 6881:6881/udp
    restart: unless-stopped
```

## 启动容器

```bash
docker compose up -d
```

## 停止容器

```bash
docker compose down
```

### 更新镜像并重启

```bash
docker compose pull
docker compose up -d
```

## 查看日志

```bash
docker compose logs -f qbittorrent
```

## 访问 Web UI

```
http://<server-IP>:8080
```

>>>
默认用户名：`admin`  
默认密码：`adminadmin`
>>>
