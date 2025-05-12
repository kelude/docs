# git

## Install git on Windows

```shell
winget install --id Git.Git -e --source winget
```

## Using a Specific SSH Private Key When Using Git Command

### Using core.sshCommand

```bash
git clone -c "core.sshCommand=ssh -i ~/.ssh/id_rsa_other -o IdentitiesOnly=yes" git@github.com:user/project.git
```

```bash
git config core.sshCommand
```
