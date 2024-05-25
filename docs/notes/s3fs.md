# s3fs

[s3fs](https://github.com/s3fs-fuse/s3fs-fuse)

### Install s3fs on Ubuntu

```shell
sudo apt install s3fs
```

```shell
which s3fs
```

### Manual mount

```shell
echo ACCESS_KEY_ID:SECRET_ACCESS_KEY > /home/ubuntu/.passwd-s3fs
```

```shell
chmod 600 /home/ubuntu/.passwd-s3fs
```

```shell
mkdir /home/ubuntu/s3mnt
```

```shell
s3fs bucket /home/ubuntu/s3mnt -o passwd_file=/home/ubuntu/.passwd-s3fs -o url=http://192.168.5.113:9000 -o use_path_request_style
```

```shell
df -h
```

```shell
cd /home/ubuntu/s3mnt
echo 'test' > 'test.txt'
```

```shell
ls -l
```

```shell
sudo umount /home/ubuntu/s3mnt
```

### Auto mount

```shell
sudo su
```

```shell
echo ACCESS_KEY_ID:SECRET_ACCESS_KEY > /etc/passwd-s3fs
```

```shell
chmod 600 /etc/passwd-s3fs
```

```shell
nano /etc/fstab
```

```shell
/usr/bin/s3fs#bucket /home/ubuntu/s3mnt fuse _netdev,allow_other,use_path_request_style,url=http://192.168.5.113:9000 0 0
```
