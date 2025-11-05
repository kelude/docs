# docker-emby-server

```bash
sudo nano /root/docker-emby/docker-compose.yml
```

```yaml
services:
  emby:
    image: emby/embyserver
    container_name: embyserver
    # runtime: nvidia # Expose NVIDIA GPUs
    # network_mode: host # Enable DLNA and Wake-on-Lan
    environment:
      - UID=1000 # The UID to run emby as (default: 2)
      - GID=100 # The GID to run emby as (default 2)
      - GIDLIST=100 # A comma-separated list of additional GIDs to run emby as (default: 2)
    volumes:
      - /root/docker-emby/config:/config # Configuration directory
      - /mnt/disk01/media/movies:/mnt/media/movies # Media directory
      - /mnt/disk01/media/tvshows:/mnt/media/tvshows # Media directory
    ports:
      - 8096:8096 # HTTP port
      - 8920:8920 # HTTPS port
    devices:
      - /dev/dri:/dev/dri # VAAPI/NVDEC/NVENC render nodes
      - /dev/vchiq:/dev/vchiq # MMAL/OMX on Raspberry Pi
    restart: unless-stopped
```

```bash
docker compose up -d
```

```bash
docker compose down
```

```bash
vim /etc/systemd/system/rclone-mount.service
```

```ini
[Unit]
Description=Rclone Mount for Emby
Wants=network-online.target
After=network-online.target
Before=docker.service

[Service]
Type=simple
ExecStart=/usr/bin/rclone mount s3:mybucket /mnt/disk01/media \
  --allow-other \
  --dir-cache-time 72h \
  --poll-interval 15s \
  --vfs-cache-mode full \
  --vfs-cache-max-size 50G \
  --vfs-read-chunk-size 32M \
  --vfs-read-chunk-size-limit 2G \
  --buffer-size 128M \
  --log-file /var/log/rclone-mount.log \
  --log-level INFO
ExecStop=/bin/fusermount -u /mnt/disk01/media
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now rclone-mount
```





