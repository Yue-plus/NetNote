# 交换机基本配置命令

## 基本配置命令

### authentication line login

- 命令：
  + `authentication line {console | vty | web} login {local | radius | tacacs}`
  + `no authentication line {console | vty | web} login`
- 功能：配置VTY（即指Telnet 和ssh 登录方式）、Web 和Console 方式对登录用户的验证方式和验证选择优先级；该命令的no 命令恢复缺省验证方式。
- 缺省情况：缺省Console 登陆方式为没有任何登录验证，缺省VTY 与Web 登录方式默认为本地验证。
- 命令模式：全局配置模式。
- 使用指南：
  Console、VTY 与Web 登录可以分别设置相应的登录验证方法，其验证方式可以选择Local、RADIUS 和TACACS 的任意组合。
  当采用组合验证方式时，在最前面的验证方式优先级最高，并依次递减；如果高优先级方式验证通过，则直接允许用户登陆，并忽略后面的验证方式。
  需要注意的是：只要有一种验证方式收到相应协议的明确回应，无论是拒绝还是接收，都不再尝试下一种验证方式（例外的是，local 验证方式失败时，必然会尝试下一种验证方式）；若未收到相应协议的明确回应，则尝试下一种验证方式。
  当使用 RADIUS 验证时，必须使能 AAA 功能并配置 RADIUS 服务器。
  当使用TACACS 验证时，必须配置TACACS 服务器。`authentication line console login` 命令与 `login` 命令互斥。
  `authentication line console login` 命令配置 Console 的登录验证方法，而 login 命令使能 password 命令配置的 Console 登录验证。
  即使配置了本地选项，如果没有配置任何本地用户，Console 方式可以直接登录交换机。
- 举例：配置Telnet 和ssh 登录的验证方式为RADIUS。
  
  ```text
  Switch(config)#authentication line vty login radius
  ```

- 相关命令： 
  aaa enable ， radius-server authentication host ， tacacs-server authentication host，tacacs-server key

### banner 

- 命令：
  + `banner motd <LINE>`
  + `no banner motd`
- 功能： 该命令用来配置使用telnet 或通过console 等方式登陆交换机认证成功时显示的欢迎信息，本命令的no 操作设置认证成功时不显示信息。
- 参数： <LINE>：用户认证成功时显示的欢迎信息，长度限制为1-100 个字符。
- 命令模式： 全局配置模式。
- 缺省情况： 缺省认证成功时不显示欢迎信息。
- 举例： `Switch(config)#banner motd Welcome`

### boot img

- 命令：
  + `boot img <img-file-url> {primary | backup}`
- 功能： 配置主控卡下次启动时的第一、第二img 文件。
- 参数： primary 表示配置第一启动IMG 文件，backup 表示配置第二启动IMG 文件，
- <img-file-url> 为启动IMG 文件全路径。IMG 文件全路径的格式要求如下：
1. 文件路径由相当于根目录的设备前缀（flash:/）和文件名两部分组成。每一部分内不允许有空格存在，每两部分之间也不允许有空格存在。
2. 文件名必须以.img 为后缀。
3. 文件全路径不能超过128 个字符，文件名部分不能超过80 个字符。
- 命令模式： 特权用户配置模式。
- 缺省情况： 出厂配置时只有第一启动IMG 文件，即FLASH 中的nos.img 文件。第二启动IMG 文件为空。
- 举例：
  1. 设置系统下次启动的第二启动IMG 文件为`flash:/nos.img。`
  ```text  
  Switch#boot img flash:/nos.img backup
  ```
  2. 设置系统下次启动的第一启动IMG 文件为`flash:/5.4.128.0_nos.img。`
  ```text  
  Switch#boot img flash:/5.4.128.0_nos.img primary
  ```

### boot startup-config

- 命令：
  + `boot startup-config {NULL | <file-url>}`
- 功能：配置主控板卡下次启动的CFG 文件。
- 参数说明：NULL 关键字表示下次启动时以出厂缺省配置来启动。
  当配置下次启动的CFG文件为NULL 时相当于执行set default 和write 两条命令。
  <file-url>为下次启动的CFG 文件全路径。CFG 文件全路径的格式要求如下：
1. 路径由相当于根目录的设备前缀（flash:/）和文件名两部分组成，每一部分内及每两部分之间不允许有空格存在。
2. 配置文件必须以.cfg 为后缀。
3. 文件全路径不能超过128 个字符，文件名部分不能超过80 个字符。
- 命令模式：特权用户配置模式。
- 缺省情况：无。
- 举例：
  1. 设置系统下次启动的CFG 文件为 `flash:/ startup.cfg。`
   ```text
   Switch# boot startup-config flash:/ startup.cfg
   ```
  1. 设置系统下次启动的CFG 文件为`flash:/ test-trunk.cfg。`
     ```text
     Switch#boot startup-config flash:/ test-trunk.cfg
     ````

### clock set

- 命令：
  + `clock set <HH:MM:SS> <YYYY.MM.DD>`
- 功能：设置系统日期和时钟。
- 参数：<HH:MM:SS>为当前时钟，HH 取值范围为0~23，MM 和SS 取值范围为0~59；
  <YYYY.MM.DD>为当前年、月和日，YYYY 取值范围为1970~2038，MM 取值范围为1~12，
  DD 取值范围为1~31。
- 命令模式：特权用户配置模式。
- 缺省情况：系统启动时缺省为2006 年1 月1 日0：0：0。
- 使用指南：交换机在断电后不能继续计时，因此在要求使用确切时间的应用环境中，必须先设定交换机当前的日期和时间。
- 举例：设置交换机当前日期为2002 年8 月1 日 23 时0 分0 秒。
 ```text
Switch#clock set 23:0:0 2002.8.1
 ```

- 相关命令：show clock

### config

- 命令：
  + `config [terminal]`
- 功能：从特权用户配置模式进入到全局配置模式。
- 参数：[terminal]表示进行终端配置。
- 命令模式：特权用户配置模式。
- 举例：
```text
Switch#config
```

### debug ssh-server

- 命令：
  + `debug ssh-server`
  + `no debug ssh-server`
- 功能：打开SSH 服务器的调试信息；本命令的no 操作为关闭SSH 服务器的调试信息。
- 缺省情况：缺省调试开关是关闭的。
- 命令模式：特权用户配置模式。

### disable

- 命令：
  + `disable`
- 功能：关闭特权模式。
- 参数：无。
- 缺省情况：无。
- 命令模式：特权用户配置模式。
- 使用指南：
- 举例：
```text
Switch#disable
Switch>
```

### enable

- 命令：
  + `enable [<1-15>]`
- 功能：用户使用enable 命令，从普通用户配置模式进入特权用户配置模式，或者切换用户
- 权限级别。
- 命令模式：一般用户配置模式/特权用户配置模式。
- 缺省情况：无。
- 使用指南：为了防止非特权用户的非法访问，在从普通用户配置模式进入到特权用户配置模
  式时，要进行用户身份验证，即需要输入特权用户口令，输入正确的口令，则进入特权用户
  配置模式，否则保持普通用户配置模式不变；或者，当从权限较高的级别切换至权限较低的
  级别时，不进行相应级别口令验证；从权限较低的级别切换至权限较高的级别时，需要验证
  相应级别的口令。特权用户口令的设置为全局配置模式下的命令enable password。
- 举例：
```text
Switch>enable
Switch#
```

### enable password

- 命令：
  + `enable password [level <1-15>] [0 | 7] <password>`
  + `no enable password [level <1-15>]`
- 功能：修改从普通用户配置模式进入特权用户配置模式的口令。
- 参数：level <1-15>用于指定权限级别，默认为15 级。<password>为用户设置的密码，
  在设置密码时，若输入选项为0，则应输入明文密码，且不对输入的明文密码进行加密处理；
  若输入选项为7，则应输入明文密码加密后的密文字符串。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省的特权用户口令为空。
- 使用指南：配置特权用户口令，可以防止非特权用户的非法侵入，建议网络管理员在首次配
  置交换机时就设定特权用户口令。另外当管理员需要长时间离开终端屏幕时，最好执行exit
  命令退出特权用户配置模式。

### end

- 命令：
  + `end`
- 功能：当前处于非一般用户配置模式或特权用户配置模式时，使用该命令可以直接退回到特
- 权用户配置模式。
- 命令模式：一般用户配置模式和特权用户配置模式之外的其它模式。
- 举例：从VLAN 配置模式退回到特权模式。
```text
Switch(config-vlan1)#end
Switch#
```

### exec-timeout

- 命令：
  + `exec-timeout <minutes> [<seconds>]`
  + `no exec-timeout`
- 功能：设置退出特权用户配置模式超时时间, 本命令的no 操作为恢复缺省值。
- 参数：<minute>为时间值，单位为分钟，取值范围为0~35791。<seconds>为时间值，单位为秒，取值范围为0~59。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省为10 分钟。
- 使用指南：为确保交换机使用的安全性，防止非法用户的恶意操作，当特权用户在做完最后
  一项配置后，开始计时，到达设置时间值时，系统就自动退出特权用户配置模式。用户如果
  想再次进入特权用户配置模式，需要再次输入特权用户密码和口令。当设置超时时间为0
  时，停止超时计时器。
- 举例：设置交换机退出特权用户配置模式的超时时间为6 分钟。
```text
Switch(config)#exec-timeout 6
```
设置交换机退出特权用户配置模式的超时时间为5 分30 秒：
```text
Switch(config)#exec-timeout 5 30
```

### exit

- 命令：
  + `exit`
- 功能：从当前模式退出，进入上一个模式，如在全局配置模式使用本命令退回到特权用户
- 配置模式，在特权用户配置模式使用本命令退回到一般用户配置模式等。
- 命令模式：各种配置模式。
举例：
```text
Switch#exit
Switch>
```

### help

- 命令：
  + `help`
- 功能：输出有关命令解释器帮助系统的简单描述。
- 命令模式：各种配置模式。
- 使用指南：交换机提供随时随地的在线帮助，help 命令则显示关于整个帮助体系的信息，
  包括完全帮助和部分帮助，用户可以随时随地键入’?’获取在线帮助。
- 举例：
```text 
switch(config)#help
CLI provides advanced help feature. When you need help,
anytime at the command line please press '?'.
If nothing matches, the help list will be empty and you must backup
until entering a '?' shows the available options.
Two styles of help are provided:
1. Full help is available when you are ready to enter a
command argument (e.g. 'show ?') and describes each possible
argument.
2. Partial help is provided when an abbreviated argument is entered
and you want to know what arguments match the input
(e.g. 'show ve?'.)
```

### hostname

- 命令：
  + `hostname <hostname>`
  + `no hostname`
- 功能：设置交换机命令行界面的提示符，本命令的no 操作为删除该设置。
- 参数：<hostname>为提示符的字符串，最长不超过64 个字符。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省提示符和交换机型号有关。
- 使用指南：通过本命令用户可以根据实际情况设置交换机命令行的提示符。
- 举例：设置提示符为Test。
```text
Switch(config)#hostname Test
Test(config)#
```

### ip host

- 命令：
  + `ip host <hostname> <ip_addr>`
  + `no ip host {<hostname> | all}`
- 功能：设置主机与IP 地址映射关系；本命令的no 操作为删除该项映射关系。
- 参数：<hostname>为主机名称，最长不超过64 个字符；<ip_addr>为主机名相应IP 地址，点分十进制格式；all 为所有主机地址。
- 命令模式：全局配置模式。
- 使用指南： 设置一个确定的主机和 IP 地址的对应关系， 可用于如 “ping host<hostname>” 等命令中。
- 举例：设置主机名为 beijing 的主机的 IP 地址为 200.121.1.1。
```text
Switch(config)#ip host beijing 200.121.1.1
```
- 相关命令：telnet、ping、traceroute

### ipv6 host

- 命令：
  + `ipv6 host <hostname> <ipv6_addr>`
  + `no ipv6 host { <hostname> | all}`
- 功能： 设置主机与IPv6 地址映射关系；本命令的no 操作为删除该项映射关系。
- 参数： <hostname> 为主机名称，最长不超过64 个字符； <ipv6_addr> 为主机名相应IPv6 地址； all 为所有主机地址。
- 命令模式： 全局配置模式。
- 使用指南： 设置一个确定的主机和IPv6 地址的对应关系，可用于如 `traceroute6 <host>`等命令中。
- 举例： 设置主机名为beijing 的主机的IPv6 地址为2001:1:2:3::1。
```text
Switch(config)#ipv6 host beijing 2001:1:2:3::1
```
- 相关命令： ping6、traceroute6

### ip http server 
### language
### login
### password
### privilege
### reload
### service password-encryption
### service terminal-length
### sysContact
### sysLocation
### set default
### setup
### show clock
### show cpu usage
### show cpu utilization
### show memory usage 
### show privilege
### show privilege mode LINE
### show tcam usage
### show temperature
### show tech-support
### show version
### username
### web-auth privilege <1-15>
### web language 
### write
### write running-config

## 远程管理 

### aaa authorization config-commands
### accounting command
### accounting exec
### authentication enable
### authentication ip access-class
### authentication ipv6 access-class
### authentication line login
### authentication securityip 
### authentication securityipv6 
### authorization
### authorization line vty command
### clear line vty <0-31>
### terminal length 
### terminal monitor
### telnet
### telnet-server enable
### telnet-server max-connection
### ssh-server authentication-retries
### ssh-server enable
### ssh-server host-key create rsa
### ssh-server max-connection
### ssh-server timeout
### show crypto key
### show ssh-server
### show telnet login
### show users 
### who
### force sync software-version (enable|disable)

## 配置交换机的 IP 地址 

### interface vlan
### interface ethernet 0
### ip address
### ipv6 address
### ip bootp-client enable
### ip dhcp-client enable

## SNMP 命令 

### debug snmp mib 
### debug snmp kernel
### rmon enable
### show private-mib oid
### show snmp
### show snmp engineid 
### show snmp group
### show snmp mib
### show snmp status
### show snmp user
### show snmp view
### snmp-server community
### snmp-server enable
### snmp-server enable traps
### snmp-server engineid
### snmp-server group
### snmp-server host
### snmp-server securityip 
### snmp-server trap-source
### snmp-server user
### snmp-server view
### switchport updown notification enable

## 交换机升级命令 

### copy（FTP）
### copy（TFTP）
### ftp-dir
### ftp-server enable
### ftp-server timeout
### ip ftp
### show ftp
### show tftp
### tftp-server enable
### tftp-server retransmission-number
### tftp-server transmission-timeout

## Boot配置命令

### baudrate
### boot img
### boot startup-config
### clearconfig
### copy
### delete
### dir
### help
### load
### nobootpassword
### ping
### reboot
### saveconfig 
### setbootpassword 
### setconfig
### show
### showconfig
### write
### xmodem