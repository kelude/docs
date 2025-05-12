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
