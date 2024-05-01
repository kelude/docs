# MinIO

[Install and Deploy MinIO](https://min.io/docs/minio/linux/operations/installation.html)

## Deploy MinIO: Single-Node Single-Drive

[Deploy MinIO: Single-Node Single-Drive](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-single-drive.html)

### Download the MinIO Server

```shell
wget https://dl.min.io/server/minio/release/linux-amd64/archive/minio_20240330094156.0.0_amd64.deb -O minio.deb
```

```shell
sudo dpkg -i minio.deb
```

### Add User and Group for MinIO

```shell
sudo groupadd -r minio-user
sudo useradd -M -r -g minio-user minio-user
sudo chown minio-user:minio-user /mnt/disk1
```

### Create the Environment Variable File

```shell
sudo vim /etc/default/minio
```

```ini
# MINIO_ROOT_USER and MINIO_ROOT_PASSWORD sets the root account for the MinIO server.
# This user has unrestricted permissions to perform S3 and administrative API operations on any resource in the deployment.
# Omit to use the default values 'minioadmin:minioadmin'.
# MinIO recommends setting non-default values as a best practice, regardless of environment

MINIO_ROOT_USER=myminioadmin
MINIO_ROOT_PASSWORD=minio-secret-key-change-me

# MINIO_VOLUMES sets the storage volume or path to use for the MinIO server.

MINIO_VOLUMES="/mnt/disk1"

# MINIO_OPTS sets any additional commandline options to pass to the MinIO server.
# For example, `--console-address :9001` sets the MinIO Console listen port
MINIO_OPTS="--console-address :9001"

# MINIO_SERVER_URL sets the hostname of the local machine for use with the MinIO Server
# MinIO assumes your network control plane can correctly resolve this hostname to the local machine

# Uncomment the following line and replace the value with the correct hostname for the local machine and port for the MinIO server (9000 by default).

#MINIO_SERVER_URL="http://minio.example.net:9000"

MINIO_BROWSER_REDIRECT=false
```

### Start the MinIO Service

Issue the following command on the local host to start the MinIO deployment as a service:

```shell
sudo systemctl start minio.service
```

Use the following commands to confirm the service is online and functional:

```shell
sudo systemctl status minio.service
```

The MinIO service does not automatically start on host reboot. You must use `systemctl enable minio.service` to start the process as part of the host boot.

```shell
sudo systemctl enable minio.service
```

## Configure NGINX Proxy for MinIO Server

[Configure NGINX Proxy for MinIO Server](https://min.io/docs/minio/linux/integrations/setup-nginx-proxy-with-minio.html)

```shell
sudo vim /etc/nginx/conf.d/minio.conf
```

### Dedicated DNS

```nginx
upstream minio_s3 {
   least_conn;
   server 127.0.0.1:9000;
}

upstream minio_console {
   least_conn;
   server 127.0.0.1:9001;
}

server {
   listen       80;
   listen  [::]:80;
   server_name  minio.example.net;

   # Allow special characters in headers
   ignore_invalid_headers off;
   # Allow any size file to be uploaded.
   # Set to a value such as 1000m; to restrict file size to a specific value
   client_max_body_size 0;
   # Disable buffering
   proxy_buffering off;
   proxy_request_buffering off;

   location / {
      proxy_set_header Host $http_host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;

      proxy_connect_timeout 300;
      # Default is HTTP/1, keepalive is only enabled in HTTP/1.1
      proxy_http_version 1.1;
      proxy_set_header Connection "";
      chunked_transfer_encoding off;

      proxy_pass https://minio_s3; # This uses the upstream directive definition to load balance
   }

   location /minio/ui/ {
      rewrite ^/minio/ui/(.*) /$1 break;
      proxy_set_header Host $http_host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_set_header X-NginX-Proxy true;

      # This is necessary to pass the correct IP to be hashed
      real_ip_header X-Real-IP;

      proxy_connect_timeout 300;

      # To support websockets in MinIO versions released after January 2023
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
      # Some environments may encounter CORS errors (Kubernetes + Nginx Ingress)
      # Uncomment the following line to set the Origin request to an empty string
      # proxy_set_header Origin '';

      chunked_transfer_encoding off;

      proxy_pass https://minio_console; # This uses the upstream directive definition to load balance
   }
}
```

### Subdomain

```nginx
upstream minio_s3 {
   least_conn;
   server 127.0.0.1:9000;
}

upstream minio_console {
   least_conn;
   server 127.0.0.1:9001;
}

server {
   listen       80;
   listen  [::]:80;
   server_name  minio.example.net;

   # Allow special characters in headers
   ignore_invalid_headers off;
   # Allow any size file to be uploaded.
   # Set to a value such as 1000m; to restrict file size to a specific value
   client_max_body_size 0;
   # Disable buffering
   proxy_buffering off;
   proxy_request_buffering off;

   location / {
      proxy_set_header Host $http_host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;

      proxy_connect_timeout 300;
      # Default is HTTP/1, keepalive is only enabled in HTTP/1.1
      proxy_http_version 1.1;
      proxy_set_header Connection "";
      chunked_transfer_encoding off;

      proxy_pass http://minio_s3; # This uses the upstream directive definition to load balance
   }
}

server {
   listen       80;
   listen  [::]:80;
   server_name  console.example.net;

   # Allow special characters in headers
   ignore_invalid_headers off;
   # Allow any size file to be uploaded.
   # Set to a value such as 1000m; to restrict file size to a specific value
   client_max_body_size 0;
   # Disable buffering
   proxy_buffering off;
   proxy_request_buffering off;

   location / {
      proxy_set_header Host $http_host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
      proxy_set_header X-NginX-Proxy true;

      # This is necessary to pass the correct IP to be hashed
      real_ip_header X-Real-IP;

      proxy_connect_timeout 300;

      # To support websocket
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";

      chunked_transfer_encoding off;

      proxy_pass http://minio_console/; # This uses the upstream directive definition to load balance
   }
}
```
