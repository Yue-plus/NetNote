# Chrony（时间同步）

::: tip
chrony 是网络时间协议（NTP）的通用实现。

> [与其他 NTP 实现比较](https://chrony.tuxfamily.org/comparison.html)

chrony 包含两个程序：
- chronyd 是一个可以在启动时启动的守护程序。
- chronyc 是一个命令行界面程序，用于监视 chronyd 的性能并在运行时更改各种操作参数。
:::

## 安装

```sh
sudo yum install chrony
```

## 配置

在 CentOS 中配置文件在 `/etc/chrony.conf`：

``` conf
# Use public servers from the pool.ntp.org project.
# Please consider joining the pool (http://www.pool.ntp.org/join.html).
server 0.centos.pool.ntp.org iburst
server 1.centos.pool.ntp.org iburst
server 2.centos.pool.ntp.org iburst
server 3.centos.pool.ntp.org iburst

# Record the rate at which the system clock gains/losses time.
driftfile /var/lib/chrony/drift

# Allow the system clock to be stepped in the first three updates
# if its offset is larger than 1 second.
makestep 1.0 3

# Enable kernel synchronization of the real-time clock (RTC).
rtcsync

# Enable hardware timestamping on all interfaces that support it.
#hwtimestamp *

# Increase the minimum number of selectable sources required to adjust
# the system clock.
#minsources 2

# Allow NTP client access from local network.
#allow 192.168.0.0/16

# Serve time even if not synchronized to a time source.
#local stratum 10

# Specify file containing keys for NTP authentication.
#keyfile /etc/chrony.keys

# Specify directory for log files.
logdir /var/log/chrony

# Select which information is logged.
#log measurements statistics tracking
```

## 示例

### 设置 Chrony 服务器

修改 `/etc/chrony.conf` 文件：

```diff
- server 0.centos.pool.ntp.org iburst
- server 1.centos.pool.ntp.org iburst
- server 2.centos.pool.ntp.org iburst
- server 3.centos.pool.ntp.org iburst
+ server <本机 IP / 域名> iburst
```

### 查看时间同源状态

``` bash
[root@host-10-20-70-107 ~]# chronyc sourcestats -v
210 Number of sources = 1
                             .- Number of sample points in measurement set.
                            /    .- Number of residual runs with same sign.
                           |    /    .- Length of measurement set (time).
                           |   |    /      .- Est. clock freq error (ppm).
                           |   |   |      /           .- Est. error in freq.
                           |   |   |     |           /         .- Est. offset.
                           |   |   |     |          |          |   On the -.
                           |   |   |     |          |          |   samples. \
                           |   |   |     |          |          |             |
Name/IP Address            NP  NR  Span  Frequency  Freq Skew  Offset  Std Dev
==============================================================================
host-10-20-70-107.openst>   0   0     0     +0.000   2000.000     +0ns  4000ms
```

## 参考链接

- [Linux 时间同步 Chrony - 江湖小小白 - 博客园](https://www.cnblogs.com/jhxxb/p/11526098.html)
- [第十五章、時間伺服器： NTP 伺服器 - 鳥哥的 Linux 私房菜](http://linux.vbird.org/linux_server/0440ntp.php)