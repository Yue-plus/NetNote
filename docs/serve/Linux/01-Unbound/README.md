# Unbound（DNS）

::: tip
Unbound 是一个具有验证，递归和缓存等功能的 DNS 解析器。

[官网](https://nlnetlabs.nl/projects/unbound/about/)
:::

## 链接

- [Unbound (简体中文) - ArchWiki](https://wiki.archlinux.org/title/Unbound_(简体中文))
- [unbound域名解析 - 阿小杜 - 博客园](https://www.cnblogs.com/djlsunshine/p/9783290.html)

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

安装完成后 **使用 `sudo systemctl start unbound` 启动服务**，
使用 `sudo systeamctl enable unbound` 配置开机启动，
使用 `sudo systeamctl status unbound` 查看服务状态：

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

### 配置为本地 DNS 服务器

1. 删除第 38、39 行开头的 `# `（取消注释）。
2. 在第 183 行下加一行：
   ```conf
   access-control: 0.0.0.0/0 allow
   ```
3. 保存退出

### 添加本地解析区域

1. 切换工作区: `cd /etc/unbound/local.d/`
2. 创建一个区域配置文件：`vim skillschina.com.conf`
   ```conf
   
   ```


