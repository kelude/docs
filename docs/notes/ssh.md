# SSH

## SSH Login

### Generate a new SSH key

```bash
ssh-keygen -t rsa -b 4096
```

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### Upload public key

use `scp` to copy the public key to a remote machine.

```shell
scp C:/Users/USER/.ssh/id_rsa.pub ubuntu@192.168.2.3:~/id_rsa.pub
```

Specify port

```shell
scp -P 2222 C:/Users/USER/.ssh/id_rsa.pub ubuntu@192.168.2.3:~/id_rsa.pub
```

Log in to your Linux server using your `username` and `password`

```shell
ssh ubuntu@192.168.2.3
```

then

```shell
cat ~/id_rsa.pub >> ~/.ssh/authorized_keys
```

## Set private key permission

### Windows

Remove all except for the key's user.

### Linux

```shell
chmod 600 ~/.ssh/id_rsa
```

## Specify private key

```shell
ssh -i "C:\Users\USER\.ssh\id_rsa_other" root@192.168.2.3
```
