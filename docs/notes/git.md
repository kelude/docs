# git

## Install git on Windows

```shell
winget install --id Git.Git -e --source winget
```

## Using a Specific SSH Private Key When Using Git Command

### Using core.sshCommand

```bash
git config core.sshCommand "ssh -i ~/.ssh/id_rsa_personal -o IdentitiesOnly=yes"
```

```bash
git clone -c "core.sshCommand=ssh -i ~/.ssh/id_rsa_github -o IdentitiesOnly=yes" git@github.com:user/repo.git
```

```bash
git config core.sshCommand
```

```bash
git -c "core.sshCommand=ssh -i ~/.ssh/id_rsa_github -o IdentitiesOnly=yes" pull
```

## reset

```shell
git reflog
```

```shell
git log
```

```shell
git reset --hard d7413d0b2cc3a5bc1e2911eb221539ece894fdeb
```
