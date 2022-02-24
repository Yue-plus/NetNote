# Unbound（DNS）

::: tip
Unbound 是一个具有验证，递归和缓存等功能的 DNS 解析器。

[官网](https://nlnetlabs.nl/projects/unbound/about/)
[官方文档](https://unbound.docs.nlnetlabs.nl/en/latest/)
:::

## 链接

- [Unbound (简体中文) - ArchWiki](https://wiki.archlinux.org/title/Unbound_(简体中文))
- [Configuring Unbound as a simple forwarding DNS server | Enable Sysadmin](https://www.redhat.com/sysadmin/forwarding-dns-2)
- [unbound域名解析 - 阿小杜 - 博客园](https://www.cnblogs.com/djlsunshine/p/9783290.html)
- [UNbound DNS -UNbound域名解析_Alkaid__3的博客-CSDN博客_alkaid](https://blog.csdn.net/Alkaid__3/article/details/104836193)
- [使用unbound搭建DNS服务器，配置缓存以及防止DNS污染 - Nrehearsal](https://blog.return0.top/blog/2018/11/使用unbound搭建dns服务器配置缓存以及防止dns污染/)

## 安装

```bash {1}
[root@host-192-168-30-100 ~]# sudo yum install unbound
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
Resolving Dependencies
--> Running transaction check
---> Package unbound.x86_64 0:1.4.20-34.el7 will be installed
--> Processing Dependency: unbound-libs(x86-64) = 1.4.20-34.el7 for package: unbound-1.4.20-34.el7.x86_64
--> Processing Dependency: ldns >= 1.6.16-10 for package: unbound-1.4.20-34.el7.x86_64
--> Processing Dependency: libunbound.so.2()(64bit) for package: unbound-1.4.20-34.el7.x86_64
--> Processing Dependency: libldns.so.1()(64bit) for package: unbound-1.4.20-34.el7.x86_64
--> Processing Dependency: libevent-2.0.so.5()(64bit) for package: unbound-1.4.20-34.el7.x86_64
--> Running transaction check
---> Package ldns.x86_64 0:1.6.16-10.el7 will be installed
--> Processing Dependency: libpcap.so.1()(64bit) for package: ldns-1.6.16-10.el7.x86_64
---> Package libevent.x86_64 0:2.0.21-4.el7 will be installed
---> Package unbound-libs.x86_64 0:1.4.20-34.el7 will be installed
--> Running transaction check
---> Package libpcap.x86_64 14:1.5.3-9.el7 will be installed
--> Finished Dependency Resolution

Dependencies Resolved

===================================================================================
 Package                        Arch        Version             Repository    Size
===================================================================================
Installing:
 unbound                        x86_64      1.4.20-34.el7       c7-media     478 k
Installing for dependencies:
 ldns                           x86_64      1.6.16-10.el7       c7-media     476 k
 libevent                       x86_64      2.0.21-4.el7        c7-media     214 k
 libpcap                        x86_64      14:1.5.3-9.el7      c7-media     138 k
 unbound-libs                   x86_64      1.4.20-34.el7       c7-media     299 k

Transaction Summary
====================================================================================
Install  1 Package (+4 Dependent packages)

Total download size: 1.6 M
Installed size: 4.7 M
Is this ok [y/d/N]: y
Downloading packages:
------------------------------------------------------------------------------------
Total                                  62 MB/s | 1.6 MB  00:00:00     
Running transaction check
Running transaction test
Transaction test succeeded
Running transaction
  Installing : libevent-2.0.21-4.el7.x86_64                                   1/5 
  Installing : 14:libpcap-1.5.3-9.el7.x86_64                                  2/5 
  Installing : ldns-1.6.16-10.el7.x86_64                                      3/5 
  Installing : unbound-libs-1.4.20-34.el7.x86_64                              4/5 
  Installing : unbound-1.4.20-34.el7.x86_64                                   5/5 
  Verifying  : unbound-1.4.20-34.el7.x86_64                                   1/5 
  Verifying  : ldns-1.6.16-10.el7.x86_64                                      2/5 
  Verifying  : libevent-2.0.21-4.el7.x86_64                                   3/5 
  Verifying  : 14:libpcap-1.5.3-9.el7.x86_64                                  4/5 
  Verifying  : unbound-libs-1.4.20-34.el7.x86_64                              5/5 

Installed:
  unbound.x86_64 0:1.4.20-34.el7                                                                                                                                             

Dependency Installed:
  ldns.x86_64 0:1.6.16-10.el7            libevent.x86_64 0:2.0.21-4.el7
  libpcap.x86_64 14:1.5.3-9.el7          unbound-libs.x86_64 0:1.4.20-34.el7           

Complete!
```

安装完成后：
**使用 `sudo systemctl start unbound` 启动服务**，
**使用 `sudo systeamctl enable unbound` 配置开机启动**，
**使用 `sudo systeamctl status unbound` 查看服务状态**：

```bash {1}
[root@host-192-168-30-100 ~]# systemctl status unbound
● unbound.service - Unbound recursive Domain Name Server
   Loaded: loaded (/usr/lib/systemd/system/unbound.service; disabled; vendor preset: disabled)
   Active: active (running) since Mon 2021-12-06 22:53:33 EST; 5s ago
  Process: 1728 ExecStartPre=/usr/sbin/unbound-anchor -a /var/lib/unbound/root.key -c /etc/unbound/icannbundle.pem (code=exited, status=0/SUCCESS)
  Process: 1727 ExecStartPre=/usr/sbin/unbound-checkconf (code=exited, status=0/SUCCESS)
 Main PID: 1731 (unbound)
   CGroup: /system.slice/unbound.service
           └─1731 /usr/sbin/unbound -d

Dec 06 22:53:15 host-192-168-30-100 systemd[1]: Starting Unbound recursive Domain Name Server...
Dec 06 22:53:15 host-192-168-30-100 unbound-checkconf[1727]: unbound-checkconf: no errors in /etc/unbound/unbound.conf
Dec 06 22:53:33 host-192-168-30-100 systemd[1]: Started Unbound recursive Domain Name Server.
Dec 06 22:53:33 host-192-168-30-100 unbound[1731]: [1731:0] notice: init module 0: validator
Dec 06 22:53:33 host-192-168-30-100 unbound[1731]: Dec 06 22:53:33 unbound[1731:0] warning: increased limit(open files) from 1024 to 8290
Dec 06 22:53:33 host-192-168-30-100 unbound[1731]: [1731:0] notice: init module 1: iterator
Dec 06 22:53:33 host-192-168-30-100 unbound[1731]: [1731:0] info: start of service (unbound 1.4.20).
```

## 配置

Unbound 的配置文件为：[`/etc/unbound/unbound.conf`](/etc/unbound/unbound.conf)

### 配置本机使用的 DNS 服务器

1. 修改 `/etc/resolv.conf` 文件，第 3 行：`nameserver 192.168.30.100`（重启失效）
2. 修改 `/etc/NetworkManager/NetworkManager.conf` 文件，在第 14 行下添加 `dns=`：
   - `none` 为使用本地 DNS
   - 可以填 IP 或域名

### 配置为本地 DNS 服务器

1. 修改 `unbound.conf` 文件，删除第 38、39 行开头的 `# `（取消注释）。
2. 在第 183 行下加一行：
   ```conf
   access-control: 0.0.0.0/0 allow
   ```
3. 将第 215 行，改为 `username: ""`，让所有用户都可访问。
4. 将第 376 行，改为 `domain-insecure: "skillschina.com"`，跳过验证域，以避免信任链验证失败。
5. 修改 `/etc/resolv.conf` 文件，第 3 行：`nameserver 192.168.30.100`
6. 使用 `firewall-cmd --permanent --add-service=dns` 指令，开启 53 端口。


### 配置为存缓存 DNS 服务器

1. 在 `unbound.conf` 文件，第 558 行下添加：
   ```conf
   forward-zone:
         name: "."
         forward-addr: 192.168.30.100
   ```
2. 重启服务：`sudo systemctl restart unbound`

### 添加本地正反向解析区域

1. 切换工作区: `cd /etc/unbound/local.d/`
2. 创建一个区域配置文件：`sudo vim skillschina.com.conf`
   ```conf
   # 正向解析
   local-data: "dns1.skillschina.com   3600 IN A 192.168.30.100"
   local-data: "dns2.skillschina.com   3600 IN A 192.168.30.101"
   local-data: "ftp.skillschina.com    3600 IN A 192.168.30.104"
   local-data: "www.skillschina.com    3600 IN A 192.168.30.101"
   local-data: "market.skillschina.com 3600 IN A 192.168.30.102"
   local-data: "mail.skillschina.com   3600 IN A 192.168.30.102"

   # 反向解析
   local-data-ptr: "192.168.30.100   dns1.skillschina.com"
   local-data-ptr: "192.168.30.101   dns2.skillschina.com"
   local-data-ptr: "192.168.30.104    ftp.skillschina.com"
   local-data-ptr: "192.168.30.101    www.skillschina.com"
   local-data-ptr: "192.168.30.102 market.skillschina.com"
   local-data-ptr: "192.168.30.102   mail.skillschina.com"
   ```
3. 配置完成后重启服务：`sudo systemctl restart unbound`

#### 验证配置

> 如果没有 `nslookup` 之类的网络工具可以 `yum install bind-utils`

```bash {1,8}
[root@host-192-168-30-100 ~]# nslookup mail.skillschina.com
Server:         192.168.30.100
Address:        192.168.30.100#53

Name:   mail.skillschina.com
Address: 192.168.30.102

[root@host-192-168-30-100 ~]# nslookup 192.168.30.102
Server:         192.168.30.100
Address:        192.168.30.100#53

102.30.168.192.in-addr.arpa     name = market.skillschina.com.
102.30.168.192.in-addr.arpa     name = mail.skillschina.com.
```
