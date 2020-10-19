# MariaDB（MySQL 数据库）

## 安装

安装 MariaDB

```sh
sudo yum install mariadb-server.x86_64 # 安装
sudo systemctl start mariadb.service # 启动
sudo systemctl enable mariadb.service # 开机自启
```

> [CentOS 软件包安装流程示例](/serve/Linux/Base/#centos-%E8%BD%AF%E4%BB%B6%E5%8C%85%E5%AE%89%E8%A3%85%E6%B5%81%E7%A8%8B%E7%A4%BA%E4%BE%8B)

## 配置

1. 安装 MariaDB 服务器，启动并启用 MariaDB，将登录的 root 密码设置为 redhat，并仅帧听在本机。

   - 进行基础设置（设置 root 密码）

     ```sh
     sudo mysql_secure_installation
     ```

     ```md
     NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
           SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!
     
     In order to log into MariaDB to secure it, we'll need the current
     password for the root user.  If you've just installed MariaDB, and
     you haven't set the root password yet, the password will be blank,
     so you should just press enter here.
     
     # 输入原密码（直接回车）
     Enter current password for root (enter for none): 
     OK, successfully used password, moving on...
     
     Setting the root password ensures that nobody can log into the MariaDB
     root user without the proper authorisation.
     
     # 是否设置 root 密码？[Yes / No]
     Set root password? [Y/n] y
     New password: 
     Re-enter new password: 
     Password updated successfully!
     Reloading privilege tables..
      ... Success!
     
     
     By default, a MariaDB installation has an anonymous user, allowing anyone
     to log into MariaDB without having to have a user account created for
     them.  This is intended only for testing, and to make the installation
     go a bit smoother.  You should remove them before moving into a
     production environment.
     
     # 移除匿名用户？[Yes / No]
     Remove anonymous users? [Y/n] y
      ... Success!
     
     Normally, root should only be allowed to connect from 'localhost'.  This
     ensures that someone cannot guess at the root password from the network.
     
     # 拒绝 root 用户远程登陆？[Yes / No]
     Disallow root login remotely? [Y/n] y
      ... Success!
     
     By default, MariaDB comes with a database named 'test' that anyone can
     access.  This is also intended only for testing, and should be removed
     before moving into a production environment.
     
     # 删除 `test` 数据库？[Yes / No]
     Remove test database and access to it? [Y/n] y
      - Dropping test database...
      ... Success!
      - Removing privileges on test database...
      ... Success!
     
     Reloading the privilege tables will ensure that all changes made so far
     will take effect immediately.
     
     # 重新加载权限表？[Yes / No]
     Reload privilege tables now? [Y/n] y
      ... Success!
     
     Cleaning up...
     
     All done!  If you've completed all of the above steps, your MariaDB
     installation should now be secure.
     
     Thanks for using MariaDB!
     ```

   - 设置服务器不侦听 TCP/IP 连接（设置仅侦听在本地）

     建议先备份一下配置文件：

     ```sh
     cd /etc/my.cnf.d/
     cp server.cnf server.cnf.bak
     ```
     
     编辑 `/etc/my.cnf.d/server.cnf` 文件，在 `[mysqld]` （第 12 行）下添加 `skip-networking=0`：
  
     > 参考 [Server System Variables - MariaDB Knowledge Base](https://mariadb.com/kb/en/server-system-variables/#skip_networking)
  
     ```diff
       1 #
       2 # These groups are read by MariaDB server.
       3 # Use it for options that only the server (but not clients) should see
       4 #
       5 # See the examples of server my.cnf files in /usr/share/mysql/
       6 #
       7 
       8 # this is read by the standalone daemon and embedded servers
       9 [server]
      10 
      11 # this is only for the mysqld standalone daemon
      12 [mysqld]
     +13 skip-networking=0
      14
      15 # this is only for embedded server
      16 [embedded]
      17 
      18 # This group is only read by MariaDB-5.5 servers.
      19 # If you use the same .cnf file for MariaDB of different versions,
      20 # use this group for options that older servers don't understand
      21 [mysqld-5.5]
      22 
      23 # These two groups are only read by MariaDB servers, not by MySQL.
      24 # If you use the same .cnf file for MySQL and MariaDB,
      25 # you can put MariaDB-only options here
      26 [mariadb]
      27 
      28 [mariadb-5.5]
      29
     ```

     重启 MariaDB 使修改的配置文件生效

     ```sh
     sudo systemctl restart mariadb.service
     ```

2. 配置MariaDB服务器，支持汉字数据处理。

   建议先备份一下配置文件：

   ```sh
   cd /etc/my.cnf.d/
   sudo cp client.cnf client.cnf.bak
   sudo cp mysql-clients.cnf mysql-clients.cnf.bak
   ```

   - 编辑 `/etc/my.cnf.d/server.cnf` 文件，在 `[mysqld]` （第 12 行）下添加：

     ```diff
       1 #
       2 # These groups are read by MariaDB server.
       3 # Use it for options that only the server (but not clients) should see
       4 #
       5 # See the examples of server my.cnf files in /usr/share/mysql/
       6 #
       7 
       8 # this is read by the standalone daemon and embedded servers
       9 [server]
      10 
      11 # this is only for the mysqld standalone daemon
      12 [mysqld]
     +13 init_connect='SET collation_connection = utf8_unicode_ci'
     +14 init_connect='SET NAMES utf8'
     +15 character-set-server=utf8
     +16 collation-server=utf8_unicode_ci
     +17 skip-character-set-client-handshake
      18 skip-networking=0
      19 
      20 # this is only for embedded server
      21 [embedded]
      22 
      23 # This group is only read by MariaDB-5.5 servers.
      24 # If you use the same .cnf file for MariaDB of different versions,
      25 # use this group for options that older servers don't understand
      26 [mysqld-5.5]
      27
      28 # These two groups are only read by MariaDB servers, not by MySQL.
      29 # If you use the same .cnf file for MySQL and MariaDB,
      30 # you can put MariaDB-only options here
      31 [mariadb]
      32
      33 [mariadb-5.5]
      34
     ```

   - 编辑 `/etc/my.cnf.d/client.cnf` 文件，在 `[client]` （第 7 行）下添加：

     ```diff
       1 #
       2 # These two groups are read by the client library
       3 # Use it for options that affect all clients, but not the server
       4 #
       5 
       6 
       7 [client]
     + 8 default-character-set=utf8
       9 
      10 # This group is not read by mysql client library,
      11 # If you use the same .cnf file for MySQL and MariaDB,
      12 # use it for MariaDB-only client options
      13 [client-mariadb]
      14 
     ```

   - 编辑 `/etc/my.cnf.d/mysql-clients.cnf` 文件，在 `[mysql]` （第 6 行）下添加：

     ```diff
       1 #
       2 # These groups are read by MariaDB command-line tools
       3 # Use it for options that affect only one utility
       4 #
       5 
       6 [mysql]
     + 7 default-character-set=utf8
       8 
       9 [mysql_upgrade]
      10 
      11 [mysqladmin]
      12 
      13 [mysqlbinlog]
      14 
      15 [mysqlcheck]
      16 
      17 [mysqldump]
      18 
      19 [mysqlimport]
      20 
      21 [mysqlshow]
      22 
      23 [mysqlslap]
      24 
     ```

   - 重启 MariaDB 使修改的配置文件生效

     ```sh
     sudo systemctl restart mariadb.service
     ```

## 使用

打开 MariaDB：

```sh
sudo mysql -u root -p
```

然后分别输入“系统管理员密码”与“MariaDB root 账号的密码（`redhat`）”：

```bash
[sudo] yueplus 的密码：
Enter password: 
```

当显示以下内容时，表示成功打开 MairaDB：

```bash
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 3
Server version: 5.5.65-MariaDB MariaDB Server

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> 
```

可以输入 `STATUS;` 查看 MariaDB 当前状态：

```text
--------------
mysql  Ver 15.1 Distrib 5.5.65-MariaDB, for Linux (x86_64) using readline 5.1

Connection id:		3
Current database:	
Current user:		root@localhost
SSL:			Not in use
Current pager:		stdout
Using outfile:		''
Using delimiter:	;
Server:			MariaDB
Server version:		5.5.65-MariaDB MariaDB Server
Protocol version:	10
Connection:		Localhost via UNIX socket
Server characterset:	utf8
Db     characterset:	utf8
Client characterset:	utf8
Conn.  characterset:	utf8
UNIX socket:		/var/lib/mysql/mysql.sock
Uptime:			20 min 16 sec

Threads: 1  Questions: 8  Slow queries: 0  Opens: 0  Flush tables: 2  Open tables: 26  Queries per second avg: 0.006
--------------
```

> 参考：
> - [MySQL 教程 - 菜鸟教程](https://www.runoob.com/mysql/mysql-tutorial.html)
> - [《MySQL 必知必会》](https://gitee.com/E-book-learning/mysql-crash-course)

### 创建库

```sql
CREATE DATABASE myclass;
```

### 创建表

```sql
USE myclass;
CREATE TABLE `mystudent`(
  `ID` INT UNSIGNED AUTO_INCREMENT,
  `Name` VARCHAR(10) NOT NULL,
  `Birthday` DATETIME,
  `Sex` CHAR(8) NULL,
  `Password` CHAR(128) NULL,
  PRIMARY KEY ( `ID` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

### 插入数据

```sql
USE `myclass`;
INSERT INTO `mystudent`
( `ID`, `Name`, `Birthday`, `Sex`, `Password` )
VALUES
( '1', '张三', '1996-7-1', '女', 'z' );
INSERT INTO `mystudent`
( `ID`, `Name`, `Birthday`, `Sex`, `Password` )
VALUES
( '2', '李四', '1997-9-1', '男', 'l' );
```

### 导入数据

在 `/tmp/` 目录下新建一个 `sql.txt` 文件，写入以下内容：

```text
3	王五	1999-7-1	女	haha
4	赵六	1999-12-10	男	hehe
```

执行 SQL 指令：

```sql
USE `myclass`;
LOAD DATA LOCAL INFILE '/tmp/sql.txt' INTO TABLE `mystudent`;
```

### 创建用户

```sql
CREATE USER 'user1'@'localhost' IDENTIFIED BY '2020Netw@rk';
```

添加权限并刷新权限表：

```sql
GRANT SELECT ON `myclass`.`mystudent` TO 'user1'@'localhost';
FLUSH PRIVILEGES;
```

### 查询数据

```sql
USE `myclass`;
SELECT * FROM `mystudent`;
```

```text
+----+--------+---------------------+------+----------+
| ID | Name   | Birthday            | Sex  | Password |
+----+--------+---------------------+------+----------+
|  1 | 张三   | 1996-07-01 00:00:00 | 女   | z        |
|  2 | 李四   | 1997-09-01 00:00:00 | 男   | l        |
|  3 | 王五   | 1999-07-01 00:00:00 | 女   | haha     |
|  4 | 赵六   | 1999-12-10 00:00:00 | 男   | hehe     |
+----+--------+---------------------+------+----------+
4 rows in set (0.00 sec)
```