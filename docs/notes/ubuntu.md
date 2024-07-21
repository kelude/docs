# Ubuntu

## Users

### delete user

```shell
sudo deluser --remove-home user1
```

### list users

```shell
cat /etc/passwd
```

## Networks

### Static IP

```shell
sudo nano /etc/netplan/00-installer-config.yaml
```

```yaml
network:
  ethernets:
    enp0s3: # network card name
      addresses:
      - 192.168.2.22/24 # set static ip
      nameservers:
        addresses: [192.168.2.1] # dns
      routes:
      - to: default
        via: 192.168.2.1 # geteway
  version: 2
```

```shell
sudo netplan apply
```

## Disks

```shell
sudo lvdisplay
```

```shell
sudo lvextend -l +100%FREE -r /dev/ubuntu-vg/ubuntu-lv
```
