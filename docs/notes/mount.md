# mount

```bash
sudo fdisk -l
```

```bash
sudo fdisk /dev/sdb
```

```bash
sudo mkfs.ext4 /dev/sdb
```

```
mke2fs 1.46.5 (30-Dec-2021)
Creating filesystem with 536870656 4k blocks and 134217728 inodes
Filesystem UUID: 15fe8547-6d18-4681-a624-b8e09a2a2fab
Superblock backups stored on blocks:
        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
        4096000, 7962624, 11239424, 20480000, 23887872, 71663616, 78675968,
        102400000, 214990848, 512000000

Allocating group tables: done
Writing inode tables: done
Creating journal (262144 blocks): done
Writing superblocks and filesystem accounting information: done

```

```bash
sudo mkdir /mnt/disk01
sudo mount /dev/sdb /mnt/disk01
```

```bash
sudo unmount /mnt/disk01
```

```bash
blkid
```

```bash
sudo vi /etc/fstab
```

```
/dev/sdb	/mnt/disk01	ext4	defaults	0 0
```
