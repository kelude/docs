---
outline: deep
---

# Homestead

[Official Documentation](https://laravel.com/docs/homestead)

### Install Homestead on Windows

#### Prerequisites

[Vagrant](https://developer.hashicorp.com/vagrant/downloads)

Clone the Homestead repository

```shell
cd E:\
git clone https://github.com/laravel/homestead.git ./Homestead
```

Checkout the `release` branch

```shell
cd Homestead
```

```shell
git checkout release
```

Configure

```shell
./init.bat
```

### Configuring Homestead

`E:\Homestead\Homestead.yaml`

```yaml
---
ip: "192.168.56.56"
memory: 2048
cpus: 2
provider: virtualbox

authorize: ~/.ssh/id_rsa.pub

keys:
    - ~/.ssh/id_rsa

folders:
    - map: E:/code
      to: /home/vagrant/code

sites:
    - map: homestead.test
      to: /home/vagrant/code/laravel/public

    - map: reverb.homestead.test
      to: http://0.0.0.0:8080
      type: "proxy"

    - map: vue.homestead.test
      to: /home/vagrant/code/vue-project/dist
      type: "spa"

    - map: vue-proxy.homestead.test
      to: http://192.168.56.1:5173  # npm run dev -- --host
      type: "proxy"

databases:
    - homestead

features:
    - mariadb: false
    - postgresql: false
    - ohmyzsh: false
    - webdriver: false
    - meilisearch: true
    - minio: true
    - mongodb: true

services:
    - enabled:
          - "mysql"
#    - disabled:
#        - "postgresql@11-main"

ports:
    - send: 33060 # MySQL/MariaDB
      to: 3306
#    - send: 4040
#      to: 4040
#    - send: 54320 # PostgreSQL
#      to: 5432
    - send: 8025 # Mailpit
      to: 8025
    - send: 9600
      to: 9600
    - send: 27017
      to: 27017
    - send: 6379
      to: 6379

networks:
    - type: "public_network"
      ip: "192.168.3.21"
      bridge: "Realtek PCIe GBE Family Controller"
```

#### Hostname Resolution

`C:\Windows\System32\drivers\etc\hosts`

```
192.168.56.56	homestead.test
```

### Accessing Homestead Globally

`E:\bin\homestead.bat`

```batch
@echo off
 
set cwd=%cd%
set homesteadVagrant=E:\Homestead
 
cd /d %homesteadVagrant% && vagrant %*
cd /d %cwd%
 
set cwd=
set homesteadVagrant=
```

```shell
homestead up

homestead halt

homestead reload --provision

homestead ssh

homestead destroy
```
