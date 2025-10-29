---
outline: deep
---

# Install MySQL 8.4 LTS on Ubuntu Server 24.04

[Official Documentation](https://dev.mysql.com/doc/refman/8.4/en/linux-installation-apt-repo.html)

## Update the System

```bash
sudo apt update && sudo apt upgrade -y
```

## Add the Official MySQL APT Repository

Ubuntu’s default repo only includes 8.0, so you must add the official Oracle repository that includes 8.4 LTS.

to check the latest version: [MySQL APT Repository](https://dev.mysql.com/downloads/repo/apt/)

```bash
wget https://dev.mysql.com/get/mysql-apt-config_0.8.36-1_all.deb
```

```bash
sudo dpkg -i mysql-apt-config_0.8.36-1_all.deb
```

During the prompt:

1. Change it to `MySQL Server & Cluster (Currently selected: mysql-8.4-lts)`
2. Choose **OK** to confirm and exit.

Then refresh your package lists:

```bash
sudo apt update
```

## Confirm It’s Pointing to MySQL 8.4 LTS

Run:

```bash
apt-cache policy mysql-server
```

```yaml
mysql-server:
  Installed: (none)
  Candidate: 8.4.7-1ubuntu24.04
  Version table:
     8.4.7-1ubuntu24.04 500
        500 http://repo.mysql.com/apt/ubuntu noble/mysql-8.4-lts amd64 Packages
```

If you still see 8.0 listed as “Candidate”, it means the repo config wasn’t set correctly — you can reconfigure:

```bash
sudo dpkg-reconfigure mysql-apt-config
sudo apt update
```

Then confirm again with `apt-cache policy`.

## Install MySQL 8.4 LTS

Now install MySQL normally — it will pull 8.4 LTS from Oracle’s repo:

```bash
sudo apt install mysql-server
```

This installs and starts the MySQL 8.4 service automatically.

```bash
sudo systemctl status mysql
```

## Verify Installation

Check the version:

```bash
mysql -V
```

Expected output (example):

```
mysql  Ver 8.4.7 for Linux on x86_64 (MySQL Community Server - GPL)
```

You can also confirm from inside MySQL:

```bash
sudo mysql -e "SELECT VERSION();"
```

## Secure the Installation

Run the secure installation tool:

```bash
sudo mysql_secure_installation
```

Recommended production answers:

- Validate password plugin: **Y**
- Remove anonymous users: **Y**
- Disallow root login remotely: **Y**
- Remove test database: **Y**
- Reload privileges: **Y**


