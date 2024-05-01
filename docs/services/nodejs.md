# Node.js

[NodeSource Node.js Binary Distributions](https://github.com/nodesource/distributions)

### Installation

Node.js LTS (v20.x):

```shell
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

```shell
sudo apt-get install -y nodejs
```

### Uninstall

```shell
sudo apt purge nodejs
```

```shell
sudo rm -r /etc/apt/sources.list.d/nodesource.list
```

```shell
sudo rm -r /etc/apt/keyrings/nodesource.gpg
```
