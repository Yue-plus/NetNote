# Samba 服务

## 安装

```sh
sudo yum install samba samba-client # 安装
sudo systemctl start smb.service # 启动
sudo systemctl enable smb.service # 开机启动
```

## 配置

### 本地配置

1. 创建本地用户帐户

   - 临时切换到 root 账号

     ```sh
     su root
     ```

   - 添加 Linux 主机用户组

     ```sh
     groupadd samba
     groupadd jwc
     groupadd zsb
     ```

   - 添加 Linux 主机用户

     ```sh
     useradd -M -g samba -s /sbin/nologin smb
     useradd -M -g jwc -G samba -s /sbin/nologin cici
     useradd -M -g jwc -G samba -s /sbin/nologin vega
     useradd -M -g zsb -G samba -s /sbin/nologin lily
     useradd -M -g zsb -G samba -s /sbin/nologin lisa
     ```

   - 将账户添加到 Samba 数据库；密码设为 `2020Netw@rk`
   
     ```sh
     smbpasswd -a smb
     smbpasswd -a cici
     smbpasswd -a vega
     smbpasswd -a lily
     smbpasswd -a lisa
     ```

2. 建立共享目录

   ```sh
   sudo mkdir -p /share/public /share/jwc /share/zsb
   ```

3. 修改共享目录组权限：

   - 修改文件夹所有组
     
     ```sh
     sudo chgrp -R samba /share/
     ```

   - 修改文件夹权限

     ```sh
     sudo chmod 2775 /share/public/
     sudo chmod 2770 /share/jwc/ /share/zsb/
     ```

### Samba 配置

1. 备份配置文件

   ```sh
   cd /etc/samba/
   sudo mv smb.conf smb.conf.bak
   ```

2. 新建配置文件

   - 在 `/etc/samba/` 目录下新建 `smb.conf` 文件内容如下：
   
     ```conf
     [global]
             workgroup = WORKGROUP
             security = user
             include = /etc/samba/%G.smb.conf
     
             passdb backend = tdbsam
     
     [public]
             comment = 公共文件夹
             path = /share/public
             public = yes
             read only = yes
     ```
   
   - 在 `/etc/samba/` 目录下新建 `jwc.smb.conf` 文件内容如下：
   
     ```conf
     [jwc]
           comment = 教务处
           path = /share/jwc
           browseable = yes
           vaild users = @jwc
           write list = @jwc
     ```
   
   - 在 `/etc/samba/` 目录下新建 `zsb.smb.conf` 文件内容如下：
   
     ```conf
     [zsb]
             comment = 招生办
             path = /share/zsb
             browseable = yes
             vaild users = @zsb
             write list = @zsb
     ```

3. 重启 Samba 服务使配置生效：

   ```sh
   sudo systemctl restart smb.service
   ```

> 参考：
> - 可以使用 `man smb.conf` 指令查看详细配置方法
> - [Smaba Wiki (en)](https://wiki.samba.org/index.php/Main_Page)
>   + [将 Samba 设置为独立服务器 (en)](https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server)
>   + [使用 Windows ACL 设置共享 (en)](https://wiki.samba.org/index.php/Setting_up_a_Share_Using_Windows_ACLs)
> - [Samba服务的配置总结 - 散尽浮华 - 博客园](https://www.cnblogs.com/kevingrace/p/8662088.html)
> - [Linux Samba服务主配文件smb.conf中文详解](https://www.cnblogs.com/fatt/p/5856892.html)
> - [鳥哥的 Linux 私房菜 -- 第十三章、Linux 帳號管理與 ACL 權限設定](http://linux.vbird.org/linux_basic/0410accountmanager.php)

## 测试

- 在用户目录下建立一个 `putTest.txt` 测试文件

- 使用以下指令查看服务器资源

  ```sh
  sudo smbclient -U '<用户名>'%'<密码>' -L //127.0.0.1
  ```

- 使用以下指令访问目录：

  ```sh
  sudo smbclient -U '<用户名>'%'<密码>' //127.0.0.1/'<目录>'
  ```

- `smb`（普通用户）用户测试：

  + 只能看见 `public` 文件夹：

    ```sh
    sudo smbclient -U smb%2020Netw@rk -L //127.0.0.1
    ```
  
    ```bash
    [sudo] yueplus 的密码：
    
    	Sharename       Type      Comment
    	---------       ----      -------
    	public          Disk      公共文件夹
    	IPC$            IPC       IPC Service (Samba 4.10.4)
    Reconnecting with SMB1 for workgroup listing.
    
    	Server               Comment
    	---------            -------
    
    	Workgroup            Master
    	---------            -------
    ```
  
  + 测试上传文件：

    连接 `public` 文件夹：

    ```sh
    sudo smbclient -U smb%2020Netw@rk //127.0.0.1/public
    ```

    试图上传文件（没有权限所以上传失败，测试成功）：

    ```cmd
    smb: \> put putTest.txt 
    NT_STATUS_ACCESS_DENIED opening remote file \putTest.txt
    ```

- `cici`（`jwc` 组）用户测试：

  + 能看见 `public` 与 `jwc` 文件夹：

    ```sh
    sudo smbclient -U cici%2020Netw@rk -L //127.0.0.1
    ```

    ```bash
    	Sharename       Type      Comment
     	---------       ----      -------
     	public          Disk      公共文件夹
     	IPC$            IPC       IPC Service (Samba 4.10.4)
     	jwc             Disk      教务处
     Reconnecting with SMB1 for workgroup listing.
     
     	Server               Comment
     	---------            -------
     
     	Workgroup            Master
     	---------            -------
    ```

  + 测试上传文件：

    连接 `jwc` 文件夹：

    ```sh
    sudo smbclient -U cici%2020Netw@rk //127.0.0.1/jwc
    ```

    上传文件测试：

    ```cmd
    smb: \> put putTest.txt 
    putting file putTest.txt as \putTest.txt (0.0 kb/s) (average 0.0 kb/s)
    ```

    使用 `ls` 指令查看当前目录文件：
    
    ```cmd
    smb: \> ls
      .                                   D        0  Wed Sep  2 19:41:56 2020
      ..                                  D        0  Sun Aug 30 16:22:03 2020
      putTest.txt                         A        0  Wed Sep  2 19:41:56 2020
    
    		52403200 blocks of size 1024. 48121024 blocks available
    ```

- 使用 `lily` 或 `lisa` 重复以上测试（测试 `zsb` 组）