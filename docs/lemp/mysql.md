---
outline: deep
---

# Install MySQL 8.4 LTS on Ubuntu Server 24.04

[Official Documentation](https://dev.mysql.com/doc/refman/8.4/en/linux-installation-apt-repo.html)

## Install MySQL 8.4 from the MySQL APT repository

Since MySQL 8.0 is in Ubuntu's default repositories, you will need to add the official MySQL repository to install version 8.4 LTS.

### Update your package list:

```bash
sudo apt update
```

### Download the MySQL APT configuration package:

to check the latest version: [MySQL APT Repository](https://dev.mysql.com/downloads/repo/apt/)

```bash
wget https://dev.mysql.com/get/mysql-apt-config_0.8.36-1_all.deb
```

### Install the downloaded `.deb` package:

```bash
sudo dpkg -i mysql-apt-config_0.8.36-1_all.deb
```

During the prompt:

- Change it to `MySQL Server & Cluster (Currently selected: mysql-8.4-lts)`
- Choose `OK` to confirm and exit.

Then refresh your package lists:

```bash
sudo apt update
```

### Confirm It’s Pointing to MySQL 8.4 LTS

```bash
apt-cache policy mysql-server
```

Expected output (example):

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

Then confirm again with `apt-cache policy mysql-server`.

### Install MySQL 8.4 LTS

Now install MySQL normally — it will pull 8.4 LTS from Oracle’s repo:

```bash
sudo apt install mysql-server
```

This installs and starts the MySQL 8.4 service automatically.

```bash
sudo systemctl status mysql
```

### Verify Installation

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

## Change the root user authentication method

The `mysql_secure_installation` script will fail if you don't first set up a password for the `root` user. To fix this, change the authentication plugin from `auth_socket` to `mysql_native_password`. 

1. Log in to the MySQL shell using `sudo`:
   
   ```bash
   sudo mysql
   ```

2. Change the `root` user to use the modern plugin:

   ```sql
   ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'your_password';
   ```

   Replace `your_password` with a strong, secure password.

3. Exit the MySQL shell:

   ```sql
   exit;
   ```


## Run the security script

Now that the root user is configured for password authentication, you can run the `mysql_secure_installation` script safely.

1. Execute the command:

   ```bash
   sudo mysql_secure_installation
   ```

2. Follow the on-screen prompts to configure your server's security settings.

   - VALIDATE PASSWORD COMPONENT:  
     Press y|Y for Yes, any other key for No: `y`  
     Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: `2`
   - Enter password for user root: Re-enter the password you set in the previous step.
   - Change the password for root ? ((Press y|Y for Yes, any other key for No) : `enter`
   - Remove anonymous users? (Press y|Y for Yes, any other key for No) : `y`
   - Disallow root login remotely? (Press y|Y for Yes, any other key for No) : `y`
   - Remove test database and access to it? (Press y|Y for Yes, any other key for No) : `y`
   - Reload privilege tables now? (Press y|Y for Yes, any other key for No) :  `y`

## Revert the authentication plugin (optional)

To return to the more secure `auth_socket` authentication method for local root access, you can revert the change. This allows `sudo mysql` to work again while remote root login remains disabled. 

1. Log back in to the MySQL shell:
   ```bash
   sudo mysql
   ```
   
2. Revert the plugin:
   ```sql
   ALTER USER 'root'@'localhost' IDENTIFIED WITH auth_socket;
   ```
   
3. Exit the shell:
   ```sql
   exit;
   ```






