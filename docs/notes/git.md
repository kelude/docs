# git

## Install git on Windows

```shell
winget install --id Git.Git -e --source winget
```

## Using a Specific SSH Private Key When Using Git Command

### Using core.sshCommand

#### Configuring core.sshCommand

```shell
git clone -c "core.sshCommand=ssh -i ~/.ssh/id_rsa_other" git@github.com:user/project.git
```

#### Persisting core.sshCommand on Repository Level

```shell
git config core.sshCommand "ssh -i ~/.ssh/id_rsa_other"
```

```shell
git config --get core.sshCommand
```

### Using SSH Config File

```shell
cat ~/.ssh/config
```

```text
Host github-work
    HostName github.com
    IdentityFile ~/.ssh/id_rsa_work

Host github-personal
    HostName github.com
    IdentityFile ~/.ssh/id_rsa_personal
```

```shell
git clone git@github-work:user/project.git
```

```shell
git clone git@github-personal:user/project.git
```

### Using ssh-agent

```shell
ssh-agent bash -c 'ssh-add ~/.ssh/id_rsa_other; git clone git@github.com:user/project.git'
```

```shell
ssh-agent bash -c 'ssh-add ~/.ssh/id_rsa_other; git pull'
```
