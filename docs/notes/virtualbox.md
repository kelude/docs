# VirtualBox

### Ubuntu Cloud Images on VirtualBox

[Ubuntu Cloud Images](https://cloud-images.ubuntu.com/)

```shell
sudo apt install cloud-image-utils
```

```shell
cat >user-data <<EOF
#cloud-config
password: ubuntu
chpasswd: { expire: False }
ssh_pwauth: True
EOF
```

```shell
cloud-localds user-data.iso user-data
```

and now you can login with:

 - username: `ubuntu`
 - password: `ubuntu`

### Usage on Windows

Windows PATH

```shell
SET PATH=%PATH%;C:\Program Files\Oracle\VirtualBox
```

Convert VDI / VMDK / VHD

```shell
VBoxManage clonehd --format vdi "input.vmdk" "output.vdi"
```

```shell
VBoxManage clonehd --format vmdk "input.vhd" "output.vmdk"
```

```shell
VBoxManage convertfromraw --format VMDK "input.img" "output.vmdk"
```

Command to List Virtual Machines

```shell
VBoxManage list vms
```

List all running VMs

```shell
VBoxManage list runningvms
```

Start VirtualBox VM via command

```shell
VBoxManage startvm virtualmachine-name
```

Stop Virtual machine using command

```shell
VBoxManage controlvm virtualmachine-name poweroff
```

Resize virtual disk (resize in MB)

```shell
VBoxManage modifyhd "HDD.vdi" --resize 36000
```


`D:\bin\vm.bat`

```batch
@echo off

if "%1" == "up" (
	VBoxManage startvm vm-name --type headless
) else if "%1" == "halt" (
	VBoxManage controlvm vm-name acpipowerbutton
) else (
	echo "Unknown %1"
)
```
