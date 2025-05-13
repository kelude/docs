# scp

```bash
# download
scp user@192.168.1.100:/home/user/file.txt ~/Downloads/
# upload
scp ~/Documents/report.pdf user@192.168.1.100:/home/user/
```

```bash
scp -i "~/Documents/ssh/key.pem" ubuntu@192.168.1.100:/var/www/example.com/dump.sql ~/Downloads/
```
