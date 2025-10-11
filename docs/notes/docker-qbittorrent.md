# docker-qbittorrent

## Create Configuration and Downloads Directories

```bash
mkdir -p /mnt/disk01/qbittorrent/config
mkdir -p /mnt/disk01/downloads
```

optionnal

```bash
sudo chown -R 1000:1000 /mnt/disk01/qbittorrent/config /mnt/disk01/downloads
```

## Create `docker-compose.yml`

```bash
sudo nano /mnt/disk01/qbittorrent/docker-compose.yml
```

```yaml
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

## Start the Container

```bash
docker compose up -d
```

## Stop the Container

```bash
docker compose down
```

### Update the Image and Restart

```bash
docker compose pull
docker compose up -d
```

## View Logs

```bash
docker compose logs -f qbittorrent
```

## Access the Web UI

```cpp
http://<server-IP>:8080
```

Default credentials:

- Username: `admin`  
- Password: `adminadmin`

> Make sure to change the password after your first login.

### New version

```bash
docker compose logs -f qbittorrent
```

```
qbittorrent  | ******** Information ********
qbittorrent  | To control qBittorrent, access the WebUI at: http://localhost:8080
qbittorrent  | The WebUI administrator username is: admin
qbittorrent  | The WebUI administrator password was not set. A temporary password is provided for this session: `YOUR-PASSWORD`
qbittorrent  | You should set your own password in program preferences.
```
