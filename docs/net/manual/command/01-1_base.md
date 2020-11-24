# 交换机基本配置命令

## 基本配置命令

### `authentication line login`

- 命令：
  + `authentication line {console | vty | web} login {local | radius | tacacs}`
  + `no authentication line {console | vty | web} login`
- 功能：
  配置 VTY（即指 Telnet 和ssh 登录方式）、Web 和 Console 方式对登录用户的验证方式和验证选择优先级；
  该命令的 no 命令恢复缺省验证方式。
- 缺省情况：缺省 Console 登陆方式为没有任何登录验证，缺省 VTY 与 Web 登录方式默认为本地验证。
- 命令模式：全局配置模式。
- 使用指南：
  + Console、VTY 与 Web 登录可以分别设置相应的登录验证方法，其验证方式可以选择 Local、RADIUS 和 TACACS 的任意组合。
  + 当采用组合验证方式时，在最前面的验证方式优先级最高，并依次递减；如果高优先级方式验证通过，则直接允许用户登陆，并忽略后面的验证方式。
  + 需要注意的是：只要有一种验证方式收到相应协议的明确回应，无论是拒绝还是接收，都不再尝试下一种验证方式（例外的是，local 验证方式失败时，必然会尝试下一种验证方式）；
  + 若未收到相应协议的明确回应，则尝试下一种验证方式。
  + 当使用 RADIUS 验证时，必须使能 AAA 功能并配置 RADIUS 服务器。
  + 当使用 TACACS 验证时，必须配置 TACACS 服务器。
  + `authentication line console login` 命令与 `login` 命令互斥。
  + `authentication line console login` 命令配置 Console 的登录验证方法，而 login 命令使能 password 命令配置的 Console 登录验证。
  + 即使配置了本地选项，如果没有配置任何本地用户，Console 方式可以直接登录交换机。
- 举例：配置 Telnet 和 ssh 登录的验证方式为 RADIUS。
  
  ```text
  Switch(config)#authentication line vty login radius
  ```

- 相关命令： 
  + `aaa enable`
  + `radius-server authentication host`
  + `tacacs-server authentication host`
  + `tacacs-server key`

### `banner`

- 命令：
  + `banner motd <LINE>`
  + `no banner motd`
- 功能：
  该命令用来配置使用 telnet 或通过 console 等方式登陆交换机认证成功时显示的欢迎信息，本命令的 no 操作设置认证成功时不显示信息。
- 参数：`<LINE>`：用户认证成功时显示的欢迎信息，长度限制为 1-100 个字符。
- 命令模式：全局配置模式。
- 缺省情况：缺省认证成功时不显示欢迎信息。
- 举例： `Switch(config)#banner motd Welcome`

### `boot img`

- 命令：
  + `boot img <img-file-url> {primary | backup}`
- 功能：配置主控卡下次启动时的第一、第二 img 文件。
- 参数：
  primary 表示配置第一启动 IMG 文件，backup 表示配置第二启动 IMG 文件，`<img-file-url> 为启动 IMG 文件全路径。
  IMG 文件全路径的格式要求如下：
  1. 文件路径由相当于根目录的设备前缀（flash:/）和文件名两部分组成。每一部分内不允许有空格存在，每两部分之间也不允许有空格存在。
  2. 文件名必须以 `.img` 为后缀。
  3. 文件全路径不能超过 128 个字符，文件名部分不能超过 80 个字符。
- 命令模式：特权用户配置模式。
- 缺省情况：出厂配置时只有第一启动 IMG 文件，即 FLASH 中的 `nos.img` 文件。第二启动 IMG 文件为空。
- 举例：
  1. 设置系统下次启动的第二启动IMG 文件为 `flash:/nos.img`。

     ```text  
     Switch#boot img flash:/nos.img backup
     ```

  2. 设置系统下次启动的第一启动 IMG 文件为 `flash:/5.4.128.0_nos.img`。

     ```text  
     Switch#boot img flash:/5.4.128.0_nos.img primary
     ```

### `boot startup-config`

- 命令：`boot startup-config {NULL | <file-url>}`
- 功能：配置主控板卡下次启动的 CFG 文件。
- 参数说明：
  NULL 关键字表示下次启动时以出厂缺省配置来启动。
  当配置下次启动的 CFG 文件为 NULL 时相当于执行 `set default` 和 `write` 两条命令。
  `<file-url>` 为下次启动的 CFG 文件全路径。CFG 文件全路径的格式要求如下：
  1. 路径由相当于根目录的设备前缀（flash:/）和文件名两部分组成，每一部分内及每两部分之间不允许有空格存在。
  2. 配置文件必须以 `.cfg` 为后缀。
  3. 文件全路径不能超过 128 个字符，文件名部分不能超过 80 个字符。
- 命令模式：特权用户配置模式。
- 缺省情况：无。
- 举例：
  1. 设置系统下次启动的CFG 文件为 `flash:/ startup.cfg`。

     ```text
     Switch# boot startup-config flash:/ startup.cfg
     ```

  1. 设置系统下次启动的CFG 文件为 `flash:/ test-trunk.cfg`。

     ```text
     Switch#boot startup-config flash:/ test-trunk.cfg
     ````

### `clock set`

- 命令：`clock set <HH:MM:SS> <YYYY.MM.DD>`
- 功能：设置系统日期和时钟。
- 参数：
  + `<HH:MM:SS>` 为当前时钟，HH 取值范围为 0~23，MM 和 SS 取值范围为0~59；
  + `<YYYY.MM.DD>` 为当前年、月和日，YYYY 取值范围为 1970~2038，MM 取值范围为1~12，DD 取值范围为1~31。
- 命令模式：特权用户配置模式。
- 缺省情况：系统启动时缺省为 2006 年1 月1 日0：0：0。
- 使用指南：交换机在断电后不能继续计时，因此在要求使用确切时间的应用环境中，必须先设定交换机当前的日期和时间。
- 举例：设置交换机当前日期为 2002 年 8 月 1 日 23 时 0 分 0 秒。

  ```text
  Switch#clock set 23:0:0 2002.8.1
  ```

- 相关命令：show clock

### `config`

- 命令：`config [terminal]`
- 功能：从特权用户配置模式进入到全局配置模式。
- 参数：`[terminal]` 表示进行终端配置。
- 命令模式：特权用户配置模式。
- 举例：
  ```text
  Switch#config
  ```

### `debug ssh-server`

- 命令：
  + `debug ssh-server`
  + `no debug ssh-server`
- 功能：
  打开 SSH 服务器的调试信息；
  本命令的 no 操作为关闭SSH 服务器的调试信息。
- 缺省情况：缺省调试开关是关闭的。
- 命令模式：特权用户配置模式。

### `disable`

- 命令：`disable`
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

### `enable`

- 命令：`enable [<1-15>]`
- 功能：用户使用 enable 命令，从普通用户配置模式进入特权用户配置模式，或者切换用户权限级别。
- 命令模式：一般用户配置模式/特权用户配置模式。
- 缺省情况：无。
- 使用指南：
  + 为了防止非特权用户的非法访问，在从普通用户配置模式进入到特权用户配置模式时，要进行用户身份验证，即需要输入特权用户口令，输入正确的口令，则进入特权用户配置模式，否则保持普通用户配置模式不变；
  + 或者，当从权限较高的级别切换至权限较低的级别时，不进行相应级别口令验证；
  + 从权限较低的级别切换至权限较高的级别时，需要验证相应级别的口令。
  + 特权用户口令的设置为全局配置模式下的命令 `enable password`。
- 举例：
  ```text
  Switch>enable
  Switch#
  ```

### `enable password`

- 命令：
  + `enable password [level <1-15>] [0 | 7] <password>`
  + `no enable password [level <1-15>]`
- 功能：修改从普通用户配置模式进入特权用户配置模式的口令。
- 参数：
  + `level <1-15>` 用于指定权限级别，默认为15 级。
  + `<password>` 为用户设置的密码，在设置密码时，若输入选项为0，则应输入明文密码，且不对输入的明文密码进行加密处理；
    若输入选项为7，则应输入明文密码加密后的密文字符串。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省的特权用户口令为空。
- 使用指南：
  配置特权用户口令，可以防止非特权用户的非法侵入，建议网络管理员在首次配置交换机时就设定特权用户口令。
  另外当管理员需要长时间离开终端屏幕时，最好执行 exit 命令退出特权用户配置模式。

### `end`

- 命令：`end`
- 功能：当前处于非一般用户配置模式或特权用户配置模式时，使用该命令可以直接退回到特权用户配置模式。
- 命令模式：一般用户配置模式和特权用户配置模式之外的其它模式。
- 举例：从 VLAN 配置模式退回到特权模式。
  ```text
  Switch(config-vlan1)#end
  Switch#
  ```

### `exec-timeout`

- 命令：
  + `exec-timeout <minutes> [<seconds>]`
  + `no exec-timeout`
- 功能：设置退出特权用户配置模式超时时间, 本命令的no 操作为恢复缺省值。
- 参数：
  + `<minute>` 为时间值，单位为分钟，取值范围为 0~35791。
  + `<seconds>` 为时间值，单位为秒，取值范围为 0~59。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省为 10 分钟。
- 使用指南：
  为确保交换机使用的安全性，防止非法用户的恶意操作，当特权用户在做完最后一项配置后，开始计时，到达设置时间值时，系统就自动退出特权用户配置模式。
  用户如果想再次进入特权用户配置模式，需要再次输入特权用户密码和口令。
  当设置超时时间为 0 时，停止超时计时器。
- 举例：

  设置交换机退出特权用户配置模式的超时时间为 6 分钟。

  ```text
  Switch(config)#exec-timeout 6
  ```

  设置交换机退出特权用户配置模式的超时时间为5 分30 秒：
  
  ```text
  Switch(config)#exec-timeout 5 30
  ```

### `exit`

- 命令：`exit`
- 功能：从当前模式退出，进入上一个模式，如在全局配置模式使用本命令退回到特权用户
- 配置模式，在特权用户配置模式使用本命令退回到一般用户配置模式等。
- 命令模式：各种配置模式。
- 举例：
  
  ```text
  Switch#exit
  Switch>
  ```

### `help`

- 命令：`help`
- 功能：输出有关命令解释器帮助系统的简单描述。
- 命令模式：各种配置模式。
- 使用指南：
  交换机提供随时随地的在线帮助，help 命令则显示关于整个帮助体系的信息，包括完全帮助和部分帮助，用户可以随时随地键入 `?` 获取在线帮助。
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

### `hostname`

- 命令：
  + `hostname <hostname>`
  + `no hostname`
- 功能：设置交换机命令行界面的提示符，本命令的 no 操作为删除该设置。
- 参数：`<hostname>` 为提示符的字符串，最长不超过 64 个字符。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省提示符和交换机型号有关。
- 使用指南：通过本命令用户可以根据实际情况设置交换机命令行的提示符。
- 举例：设置提示符为 Test。
  
  ```text
  Switch(config)#hostname Test
  Test(config)#
  ```

### `ip host`

- 命令：
  + `ip host <hostname> <ip_addr>`
  + `no ip host {<hostname> | all}`
- 功能：设置主机与IP 地址映射关系；本命令的no 操作为删除该项映射关系。
- 参数：
  + `<hostname>` 为主机名称，最长不超过 64 个字符；
  + `<ip_addr>` 为主机名相应 IP 地址，点分十进制格式；
  + `all` 为所有主机地址。
- 命令模式：全局配置模式。
- 使用指南：设置一个确定的主机和 IP 地址的对应关系， 可用于如 `ping host<hostname>` 等命令中。
- 举例：设置主机名为 beijing 的主机的 IP 地址为 `200.121.1.1`。

  ```text
  Switch(config)#ip host beijing 200.121.1.1
  ```

- 相关命令：
  + `telnet`
  + `ping`
  + `traceroute`

### `ipv6 host`

- 命令：
  + `ipv6 host <hostname> <ipv6_addr>`
  + `no ipv6 host { <hostname> | all}`
- 功能：设置主机与 IPv6 地址映射关系；本命令的 no 操作为删除该项映射关系。
- 参数：
  + `<hostname>` 为主机名称，最长不超过 64 个字符；
  + `<ipv6_addr>` 为主机名相应 IPv6 地址；
  + `all` 为所有主机地址。
- 命令模式：全局配置模式。
- 使用指南：设置一个确定的主机和 IPv6 地址的对应关系，可用于如 `traceroute6 <host>` 等命令中。
- 举例：设置主机名为 beijing 的主机的 IPv6 地址为 `2001:1:2:3::1`。
  
  ```text
  Switch(config)#ipv6 host beijing 2001:1:2:3::1
  ```
- 相关命令：
  + `ping6`
  + `traceroute6`

### ip http server 

- 命令：
  + `ip http server`
  + `no ip http server`
- 功能：使能 Web 配置；本命令的 no 操作为关闭 Web 配置。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省为 web server 是开启的。
- 使用指南：
  Web 配置是给用户提供一个以 HTTP 方式配置的界面。
  Web 配置的优点是配置直观、形象，容易理解。
  本命令的作用相当于在 Setup 配置模式的主菜单中选择 `[3]`，进行Web Server 的配置。
- 举例：打开Web Server 功能，使能Web 配置。
  
  ```text
  Switch(config)#ip http server
  ```

### language3

- 命令：`language {chinese | english}`
- 功能：设置显示的帮助信息的语言类型。
- 参数：`chinese` 为中文显示；`english` 为英文显示。
- 命令模式：特权和配置模式。
- 缺省情况：系统缺省英文显示。
- 使用指南：用户可根据自己的喜好选择语言类型。系统若重启后，帮助显示信息恢复为英文显示。

### login

- 命令：
  + `login`
  + `no login`
- 功能：`login `使能密码验证，`no login` 取消`login` 的设置。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省为`no login`。
- 使用指南：该命令使 console 进入一般用户配置模式时，必须键入 `password` 命令设置的密
- 码，否则不能进入该模式，`no login` 取消该限制。
- 举例：使能密码验证：
  
  ```text
  Switch(config)#login
  ```

### password

- 命令：
  + `password [0 | 7] <password>`
  + `no password`
- 功能：设置用户在 console 上进入一般用户配置模式时的口令，该命令的 `no` 形式删除配置
- 的口令。
- 参数：`password` 为用户设置的密码，在设置密码时，若输入选项为0，
  则应输入明文密码，且不对输入的明文密码进行加密处理；若输入选项为7，则应输入明文密码加密后的密文字符串。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省该口令为空。
- 使用指南：如果配置了该口令，并且设置了login 命令后，在console 上进入一般用户配置
- 模式时，需要验证该口令，才能进入一般用户配置模式。
- 举例：
  
  ```text
  Switch(config)#password 0 test
  Switch(config)#login
  ```

### privilege

- 命令：
  + `privilege mode level <1-15> LINE`
  + `no privilege mode level <1-15> LINE`
- 功能：为选定的命令配置指定的优先级；本命令的no 操作为恢复命令的初始优先级。
- 参数：
  + `mode` 为要配置的命令的注册模式，
  + <kbd>Tab</kbd> 或者 <kbd>?</kbd> 可以显示所有注册模式 
  + `<1-15>` 为要设置的优先级，有效范围为 1-15
  + `LINE` 为要设置的命令，支持命令的缩写格式
- 命令模式：全局配置模式
- 使用指南：
  + 该命令不能修改命令本身；LINE 必须为完整的命令格式，命令的缩写格式必须是能够解析成功的命令，
  + 对于不完整的命令、书写错误的命令、缩写不能正确解析的命令，配置失败；
  + 对于修改带参数的命令行，要按照命令行要求的格式填好参数，参数可以任意选择。
  + `no` 命令中的 `level` 级别可以随便设置，不对结果产生影响。
  + 使用 `no `命令时，LINE 必须是配置过的命令行，如果是带参数的命令行，参数要完全匹配。
  + （配置了`enable `命令的分级后，请再添加 `authentication line console login local` 并配置对应权限的用户名密码，以保证其可以再次进入特权模式。
  + 如果通过其他登陆方式配置完成后，console 的连接已经在一 般用户模式了请再次输入 `exit` 或 `quit`，其就能提示用户输入用户名密码重新进入特权模式。）
- 举例：修改命令`show ip route` 至5 级。
  
  ```text
  Switch(config)#privilege exec level 5 show ip route
  ```
  修改命令`peer A.B.C.D` 至6 级。

  ```text
  Switch(config)#privilege router-msdp level 6 peer 1.2.3.4
  ``

- 恢复`show ip route `的优先级至初始状态。

  ```text
  Switch(config)#no privilege exec level 5 show ip route
  ```

- 恢复`peer A.B.C.D` 的优先级至初始状态。
  
  ```text
  Switch(config)#no privilege router-msdp level 6 peer 1.2.3.4
  ```

### reload

- 命令：`reload`
- 功能：热启动交换机。
- 命令模式：特权用户配置模式。
- 使用指南：用户可以通过本命令，在不关闭电源的情况下，重新启动交换机。

### service password-encryption

- 命令：
  + `service password-encryption`
  + `no service password-encryption`
- 功能：加密系统密码，`no` 命令取消加密。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省为 `no service password-encryption`。
- 使用指南：执行该命令后，对当前配置的`password，enable password，ip ftp `命令，
  以及`username `的未加密的密码进行加密，同时，对以后配置的该命令的密码进行加密处理。
  `no service password-encryption`，则取消该功能，但已经加密后的密码仍然保持加密。
- 举例：加密系统密码：
  ```text
  Switch(config)#service password-encryption
  ```

### service terminal-length

- 命令：
  + `service terminal-length <0-512>`
  + `no service terminal-length`
- 功能：设置终端`（vty）`的每屏显示字符行数， `no` 命令取消换屏操作。
- 参数：`vty` 的每屏显示字符行数，取值范围为0-512。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省的行数为25。
- 使用指南：设置终端每屏的显示行数，设置该命令后，新连接的 `telnet,ssh` 客户端，以及 Console，其每屏显示行数为该设置。
- 举例：设置vty 线程数为20：
  ```text
  Switch(config)#service terminal-length 20
  ```

### sysContact

- 命令：
  + `sysContact <LINE>`
  + `no sysContact`
- 功能：设置厂商联系方式，本命令的 no 操作为恢复初始配置。
- 参数：<LINE>为提示符的字符串，范围0-255 个字符。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省为出厂模式。
- 使用指南：通过本命令用户可以根据实际情况设置交换机厂商的联系方式。
- 举例：设置厂商联系方式为`test`。
  ```text
  Switch(config)#sysContact test
  ```

### sysLocation

- 命令：
  + `sysLocation <LINE>`
  + `no sysLocation`
- 功能：设置厂商地址，本命令的 no 操作为恢复初始配置。
- 参数：<LINE>为提示符的字符串，范围0-255 个字符。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省为出厂模式。
- 使用指南：通过本命令用户可以根据实际情况设置交换机厂商的地址。
- 举例：设置厂商地址为test。
  ```text
  Switch(config)#sysLocation test
  ```

### set default

- 命令：`set default`
- 功能：恢复交换机的出厂设置。
- 命令模式：特权用户配置模式。
- 使用指南：恢复交换机的出厂设置，即用户对交换机做的所有配置都消失，用户重新启动交换机后，出现的提示与交换机首次上电一样。
- 注意：配置本命令后，必须执行write 命令，进行配置保留后重启交换机即可使交换机恢复到出厂设置。
- 举例：
  ```text
  Switch#set default
  Are you sure? [Y/N] = y
  Switch#write
  Switch#reload
  ```

### setup

- 命令：`setup`
- 功能：进入交换机的`Setup` 配置模式。
- 命令模式：特权用户配置模式。
- 使用指南：在`Setup` 配置模式下用户可进行IP 地址、Web 服务等的配置。

### show clock

- 命令：`show clock`
- 功能：显示系统当前的时钟。
- 命令模式：特权和配置模式。
- 使用指南：用户可以通过查看系统日期和时钟，发现如果系统时间有误，可及时调整。
- 举例：
  ```text
  Switch#show clock
  Current time is TUE AUG 22 11：00：01 2002
  ```
- 相关命令：`clock set`

### show cpu usage

- 命令：`show cpu usage [<slotno>]`
- 功能：显示 CPU 使用率。
- 命令模式：特权和配置模式。
- 使用指南：通过`show cpu usage` 命令可以查看当前 CPU 资源的使用情况。
- 参数`slotno` 只在机架式交换机上使用，用于显示指定槽位号上的板卡 CPU 使用率，不带参数时默认为本卡。
- 举例：显示本卡当前 CPU 使用率。
  ```text
  Switch#show cpu usage
  Last 5 second CPU IDLE: 87%
  Last 30 second CPU IDLE: 89%
  Last 5 minute CPU IDLE: 89%
  From running CPU IDLE: 89%
  ```

### show cpu utilization

- 命令：`show cpu utilization`
- 功能：显示当前 CPU 的使用率。
- 参数：无。
- 缺省情况：无。
- 命令模式：特权模式。
- 使用指南：该命令显示 CPU 在过去5 秒，30 秒，5 分钟的使用率。
- 举例：
- 在交换机上显示 CPU 使用率
  ```text
  Switch#show cpu utilization
  Last 5 second CPU USAGE: 9%
  Last 30 second CPU USAGE: 11%
  Last 5 minute CPU USAGE: 11%
  From running CPU USAGE: 11%
  ```

### show memory usage 

- 命令：`show memory usage [<slotno>]`
- 功能：显示内存使用率。
- 命令模式：特权和配置模式。
- 使用指南：通过`show memory usage`命令可以查看当前内存资源的使用情况。
- 参数`slotno`只在机架式交换机上使用，用于显示指定槽位号上的板卡内存使用率，不带参数时默认为本卡。
  举例：显示本卡当前内存使用率。
  ```text
  Switch#show memory usage
  The memory total 128 MB , free 58914872 bytes , usage is 56.10%
  ```

### show privilege

- 命令：`show privilege`
- 功能：显示当前用户权限。
- 参数：无。
- 命令模式：各种配置模式。
- 举例：显示当前用户权限。
  ```text
  witch(Config)#show privilege
  urrent privilege level is 15
  ```

### show privilege mode LINE

- 命令：`show privilege mode LINE`
- 功能：显示指定命令的优先级。
- 参数：`mode `为要配置的命令的注册模式，<kbd>Tab<kbd>或者<kbd>？<kbd>可以显示所有注册模式 LINE 为要设置的命令，支持命令的缩写格式
- 命令模式：特权和配置模式
- 使用指南：LINE 必须为完整的命令格式，命令的缩写格式必须是能够解析成功的命令，对于不完整的命令、书写错误的命令、缩写不能正确解析的命令，不能显示级别。
- 举例：显示命令`privilege` 的优先级。
  ```text
  Switch(config)#show privilege exec show ip route
  The command : show ip route
  Privilege is : 15
  ```

### show tcam usage

  S5750E机器不支持

### show temperature

- 命令：`show temperature`
- 功能： 显示交换机 CPU 当前温度。
- 参数： 无。
- 命令模式： 各种配置模式
- 使用指南： 该命令用于监测交换机 PU 的温度。
- 举例： 显示交换机 CPU 当前温度。
  ```text
  Switch(Config)#show temperature
  Temperature: 47.0625 ℃
  ```

### show tech-support

- 命令：`show tech-support [no-more]`
- 功能：显示交换机运行的信息和各任务的状态，技术支持人员利用该命令，诊断交换机的运行是否正常。
- 参数：`no-more`: 直接全部显示交换机运行的信息和各任务的状态，不通过`more` 进行用户交互。
- 命令模式：特权和配置模式。
- 使用指南：在交换机出现运行故障时，可以利用该命令获取相关信息，诊断故障原因。
- 举例：
  ```text
  Switch#show tech-support
  ```

### show version

- 命令：`show version`
- 功能：显示交换机版本信息。
- 命令模式：特权和配置模式。
- 参数：无。
- 使用指南： 通过使用此命令来查看交换机的版本信息，包括硬件版本和软件版本信息。
- 举例：
  ```texe
  Switch#show version
  ```
### username

- 命令：
  + `username <username> [privilege <privilege>] [password [0 | 7] <password>]`
  + `no username <username>`
- 功能：在本地设置利用用户名和密码验证方式登录的用户及其优先级。
- 参数： <username> 为用户名，取值范围不超过32 字符； <privilege> 为该用户可执行的命令的最大等级，
  级别为1-15，缺省级别为1； <password> 为用户密码，如果在设定密码时，输入选项为0，则应输入明文密码，
  且不对输入的明文密码进行加密处理；若输入选项7，则应输入明文密码加密后的密文字符串（使用 MD5 加密的32 位密码）。
- 命令模式：全局配置模式。
- 使用指南：目前系统中注册的命令有两个优先级1 和15。优先级为1 的命令注册在一般用户配置模式。
  优先级为15 的命令注册在除一般用户配置模式以外的其它模式。
  本命令最多允许配置16 个本地认证用户，密码最大长度为32。
- 注意：用户利用该命令配置完毕可登录的用户和优先级，在执行`authentication line console login local` 命令（使能 Console 登录方式的本地用户验证）以前，必须确保有一个用户的优先级为15，
  以便能够利用该用户进行登录，并进入特权模式和全局配置模式，修改系统的配置。
  当配置的本地用户没有一个权限达到15，并且 Console 登录验证方式仅仅配置了 Local 方式时，通过 Console 可以直接登录交换机而不需要验证。
  在以 HTTP 方式访问交换机时，必须使用执行命令等级为15 的用户登录交换机，优先级低于15 的用户登录必会被拒绝。
- 举例：配置一个管理员用户 `admin`，优先级为15，配置两个普通用户，优先级为1，并启用本地用户名和密码登录认证方式。
  其中只有用户`admin `可以通过`Telnet` 或 Console 登录至特权模式下，`user1`与`user2`的只能通过`Telnet` 或 Console 登录至一般用户配置模式。
  HTTP 登录方式下，只有`admin`才能登录成功，`user1` 与`user2` 的登录权限均不足。
  ```text
  Switch(config)#username admin privilege 15 password 0 admin
  Switch(config)#username user1 privilege 1 password 7
  4a7d1ed414474e4033ac29ccb8653d9b(该密码为0000 使用MD5 加密的32 位暗文密码)
  Switch(config)#username user2 password 0 user2
  Switch(config)#authentication line console login local1
  ```

### web-auth privilege <1-15>

- 命令：
  + `web-auth privilege <1-15>`
  + `no web-auth privilege`
- 功能：设置 web 登录交换机的级别。
- 参数：<1-15>：指定通过 web 登录交换机的级别，范围是1-15。
- 命令模式：全局配置模式。
- 缺省情况：缺省级别是15。
- 使用指南：设置 web 登录交换机的级别后，只有高于或等于该级别的用户才能通过 web 登录上交换机。
- 举例：设置通过 web 登录交换机的级别为10。
  ```text
  Switch(config)# web-auth privilege 10
  ```

### web language 

- 命令：`web language {chinese | english}`
- 功能：设置 HTTP 服务器显示信息的语言类型。
- 参数：`chinese` 为中文显示；`english` 为英文显示。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省中文显示。
- 使用指南：用户可根据自己的喜好选择语言类型。

### write

- 命令：write
- 功能：将当前运行时配置参数保存到Flash Memory。
- 命令模式：特权用户配置模式。
- 使用指南：当完成一组配置，并且已经达到预定功能，应将当前配置保存到用户指定的配置恢复文件中，
  以便因不慎关机或断电时，系统可以自动恢复到原先保存的配置。相当于copy running-config startup-config 命令。

### write running-config

- 命令：`write running-config [<startup-config-file-name>]`
- 功能：将交换机当前运行参数保存名称为任意名称的  .cfg  文件，保存到 Flash Memory 。
- 参数：`<startup-config-file-name>`为 cfg 文件全路径。 cfg 文件全路径的格式要求如下：
- 1. 路径由相当于根目录的设备前缀 （flash:/） 和文件名两部分组成，每一部分内及每两部分之间不允许有空格存在。
- 2. 配置文件必须以 .cfg 为后缀。
- 3. 文件全路径不能超过128 个字符，文件名部分不能超过80 个字符。
- 命令模式：特权用户配置模式。
- 使用指南：保存到 Flash Memory 的配置文件可以被选择作为启动配置文件。
- 举例：将交换机当前运行参数保存为文件名为123 的 .cfg 文件。
  ```text
  Switch#write running-config 123.cfg
  ```

## 远程管理 

### aaa authorization config-commands

- 命令：
  + `aaa authorization config-commands`
  + `no aaa authorization config-commands`
- 功能：对 VTY（即指 Telnet 和 ssh 登录方式）登录用户开启命令授权功能，相应 no 命令关
- 闭命令授权功能。只有开启了此功能并且配置了命令授权方法，执行某个命令时才会要求进
- 行授权。
- 缺省情况：缺省对 VTY 登录用户没有开启命令授权功能。
- 命令模式：全局配置模式。
- 使用指南：只有配置了该命令并配置了 VTY 登录用户的命令授权方式和授权选择优先级之后，对于 VTY 登陆用户配置相应命令级别的命令时才进行授权。
- 举例：开启VTY 命令授权功能。
  ```text
  Switch(config)# aaa authorization config-commands
  ```
 
### accounting command

- 命令：
  + `accounting line {console | vty} command <1-15> {start-stop | stop-only | none}method1 [method2…]`
  + `no accounting line {console | vty} command <1-15>`
- 功能：配置 VTY（即指 Telnet 和 ssh 登录方式）和 Console 方式命令活动记账方法列表；该命令的 no 命令恢复缺省记账方式。
- 参数：line 参数为记账线路选择，包括 console 和 vty（包括 telnet 和 ssh ）；`command <1-15>`参数表示记账命令的级别；
  `start-stop` 表示在用户登录时发送记账开始，在用户退出登录时发送记账停止，
  `stop-only` 表示仅仅在用户退出登录时发送记账停止，none 表示不发送记账开始和记账停止；
  `method `参数为记账方法列表，目前仅支持 tacacs 关键字，
  `tacacs` 表示使用TACACS+远程服务器进行记账。
- 缺省情况：缺省没有记账方式。
- 命令模式：全局配置模式。
- 使用指南：console 和vty 登录可以分别设置相应的命令活动记账方法，其记账方式目前仅
- 支持TACACS+方式。命令活动记账无论配置`start-stop `方式还是 `stop-only` 方式，都只记
- 录记账停止信息。
- 举例：配置 telnet 远程登录后命令活动记账。
  ```text
  Switch(config)#authorization line vty command 15 start-stop tacacs
  ```

### accounting exec

- 命令：
  + `accounting line {console | vty} exec {start-stop | stop-only | none} method1[method2…]`
  + `no accounting line {console | vty} exec`
- 功能：配置 VTY（即指 Telnet 和 ssh 登录方式）和 Console 方式用户登录的记账方法列表；
- 该命令的 no 命令恢复缺省记账方式。
- 参数：line 参数为记账线路选择，包括 console 和 vty（包括 telnet 和 ssh ）；
  `start-stop`表示在用户登录时发送记账开始，在用户退出登录时发送记账停止，
  `stop-only `表示仅仅在用户退出登录时发送记账停止，`none` 表示不发送记账开始和记账停止；
  `method` 参数为记账方法列表，目前仅支持 `tacacs` 关键字，`tacacs` 表示使用TACACS+远程服务器进行记账。
- 缺省情况：缺省无需记账。
- 命令模式：全局配置模式。
- 使用指南：console 和 vty 登录可以分别设置相应的登录记账方法，其记账方式目前仅支持TACACS+方式。
- 举例：配置telnet 远程登录记账。
  ```text
  Switch(config)#accounting line vty exec start-stop tacacs
  ```

### authentication enable

- 命令：
  + `authentication enable method1 [method2…]`
  + `no authentication enable`
- 功能：配置用户 enable 认证方法列表；该命令的 no 命令恢复缺省验证方式。
- 参数：`method` 参数为认证方法列表，必须为`local、tacacs` 和`radius` 关键字其中之一。
  `local` 表示使用本地数据库进行认证，`tacacs` 表示使用 TACACS+ 远程认证服务器进行认证， `radius`   表示使用 RADIUS 远程认证服务器进行认证。
- 缺省情况：缺省 enable 命令默认为本地验证。
- 命令模式：全局配置模式。
- 使用指南： enable 认证方式可以选择`local、radius、tacacs` 的任意组合。
  当采用组合验证方式时，在最前面的验证方式优先级最高，并依次递减；
  如果高优先级方式验证通过，则直接允许用户登陆，并忽略后面的验证方式。
  需要注意的是：只要有一种验证方式收到相应协议的明确回应，无论是拒绝还是接受，都不再尝试下一种验证方试
  （例外的是， local 验证方式失败时，必然会尝试下一种验证方式）；
  若未收到相应协议的明确回应，则尝试下一种验证方式。
  当使用 RADIUS 验证时，必须使能 AAA 功能并配置 RADIUS 服务器。
  当使用 TACACS 验证时，必须配置 TACACS 服务器。
- 举例：配置enable 认证方式为 tacacs 和 local 。
  ```text
  Switch(config)#authentication enable tacacs local
  ```

### authentication ip access-class

- 命令：
  + `authentication ip access-class {<num-std>|<name>}`
  + `no authentication ip access-class`
- 功能：为 Telnet/SSH/Web 登录方式绑定标准的 IP ACL 规则；本命令的 no 操作为取消绑定ACL。
- 参数： <num-std> 为标准数字 ACL 的访问表标号，取值范围为<1-99>；
  <name> 为标准命名 ACL 的访问表标名，字符串长度为1-32。
- 缺省情况：系统默认关闭 Telnet/SSH/Web 绑定 ACL 功能。
- 命令模式：全局配置模式
- 举例：绑定标号为1 的数字标准 ACL 规则。
  ```text
  Switch(config)#authentication ip access-class 1 in
  ```

### authentication ipv6 access-class

- 命令：
  + `authentication ipv6 access-class {<num-std>|<name>} in`
  + `no authentication ipv6 access-class`
- 功能：为 Telnet/SSH/Web 登录方式绑定标准的 IPv6 ACL 规则；本命令的 no 操作为取消绑定ACL。
- 参数： <num-std> 为标准数字 ACL 的访问表标号，取值范围为<500-599>；
  <name> 为标准命令 ACL 的访问表标名，字符串长度为1-32。
- 缺省情况：系统默认关闭 Telnet/SSH/Web 绑定 ACL 功能。
- 命令模式：全局配置模式
- 举例：绑定标号为500 的数字标准 ACL 规则。
  ```text
  Switch(config)#authentication ipv6 access-class 500 in
  ```

### authentication line login

- 命令：
  + `authentication line {console | vty | web} login method1 [method2…]`
  + `no authentication line {console | vty | web} login`
- 功能：配置 VTY（即指 Telnet 和 ssh 登录方式）、 Web 和 Console 方式对登录用户的认证方法列表；
  该命令的 no 命令恢复缺省认证方式。
- 参数：`line `参数为登录线路选择，包括 `console、vty（包括 telnet 和 ssh）和 web`；
  `method`参数为认证方法列表，必须为 `local、tacacs 和radius` 关键字其中之一。
  `local` 表示使用本地数据库进行认证，`tacacs` 表示使用 TACACS+ 远程认证服务器进行认证，
  `radius` 表示使用 RADIUS 远程认证服务器进行认证。
- 缺省情况：缺省 console 登陆方式无需登录验证，缺省 vty 与 web 登录方式默认为本地验证。
- 命令模式：全局配置模式。
- 使用指南： Console、VTY 与 Web 登录可以分别设置相应的登录验证方法，
  验证方式可以选择 Local、RADIUS  和 TACACS 的任意组合。
  当采用组合验证方式时，在最前面的验证方式优先级最高，并依次递减；
  如果高优先级方式验证通过，则直接允许用户登陆，并忽略后面的验证方式。
  需要注意的是：只要有一种验证方式收到相应协议的明确回应，无论是拒绝还是接收，都不再尝试下一种验证方式
  （例外的是，local 验证方式失败时，必然会尝试下一种验证方式）；
  若未收到相应协议的明确回应，则尝试下一种验证方式。
  当使用 RADIUS 验证时，必须使能 AAA 功能并配置 RADIUS 服务器。当使用 TACACS 验证时，必须配置 TACACS 服务器。
  `authentication line console login `命令与`login` 命令互斥。
  `authentication line consolelogin `命令配置`Console`的登录验证方法，
  而`login` 命令使能`password`命令配置的 Console 登录验证。
  即使配置了本地选项，如果没有配置任何本地用户， Console 方式可以直接登录交换机。
- 举例：配置通过 RADIUS 远程验证 telnet 和 ssh 登录用户。
  ```text
  Switch(config)#authentication line vty login radius
  ```
- 相关命令： `aaa enable` ，` radius-server authentication host` ， 
  `tacacs-server authentication host`，`tacacs-server key`

### authentication securityip 

- 命令：
  + `authentication securityip <ip-addr>`
  + `no authentication securityip <ip-addr>`
- 功能：配置允许使用 Telnet 和 HTTP 方式登录交换机的安全 IP 地址；本命令的 no 操作为删除指定的安全IP  地址。
- 参数：<ip-addr> 可以访问本交换机的安全 IP 地址，点分十进制格式。
- 缺省情况：系统缺省不配置任何安全 IP 地址。
- 命令模式：全局配置模式。
- 使用指南：没有配置安全 IP 地址前，不限制登录交换机的 IP 地址；配置安全 IP 地址后，
  只有安全 IP 地址的主机才能够登录到交换机进行配置。交换机允许配置最多32 个安全 IP地址。
- 举例：设置192.168.1.21 为安全IP 地址。
  ```text
  Switch(config)#authentication securityip 192.168.1.21
  ```

### authentication securityipv6 

- 命令：
  + `authentication securityipv6 <ipv6-addr>`
  + `no authentication securityipv6 <ipv6-addr>`
- 功能： 配置允许使用 Telnet 和 HTTP 方式登录交换机的用户安全 IPv6 地址；本命令的 no 操作为删除指定的安全 IPv6 地址。
- 参数： <ipv6-addr> 可以访问本交换机的安全 IPv6 地址。
- 缺省情况： 系统缺省不配置任何安全 IPv6 地址。
- 命令模式： 全局配置模式。
- 使用指南： 没有配置安全 IPv6 地址前，不限制登录交换机的 IPv6 地址；配置安全 IPv6地址后，
  只有安全IPv6 地址的主机才能够登录到交换机进行配置。交换机允许配置最多32个安全IPv6 地址。
- 举例： 设置2001:da8:123:1::1 为安全IPv6 地址。
  ```text
  Switch(config)#authentication securityipv6 2001:da8:123:1::1
  ```

### authorization

- 命令： 
  + `authorization line {console | vty | web} exec method1[method2…]  `
  + `no authorization line {console | vty | web} exec`
- 功能：配置 VTY（即指 Telnet 和 ssh 登录方式）、Web 和 Console 方式登录用户的授权方法列表；该命令的 no 命令恢复缺省授权方式。
- 参数：`line`参数为授权线路选择，包括 `console、vty（包括 telnet 和 ssh）`和 web；
  `method`参数为授权方法列表，必须为 `local、tacacs 和radius` 关键字其中之一。
  `local` 表示使用本地数据库进行授权，`tacacs 表示使用 TACACS+`远程服务器进行授权，
  `radius`表示使用 RADIUS 远程服务器进行授权。
- 缺省情况：缺省无需授权。
- 命令模式：全局配置模式。
- 使用指南： `console、vty 与 web` 登录可以分别设置相应的登录授权方法，
  其授权方式可以选择 `local、radius 和tacacs `的任意组合。
  当采用组合授权方式时，在最前面的授权方式优先级最高，并依次递减；
  如果高优先级方式授权通过，则直接允许用户登陆，并忽略后面的授权方式。
  需要注意的是：只要有一种授权方式收到相应协议的明确回应，无论是拒绝还是接收，
  都不再尝试下一种授权方式；若未收到相应协议的明确回应，则尝试下一种授权方式。
  当使用 RADIUS 授权时，必须使能 AAA 功能并配置 RADIUS 服务器。当使用 TACACS授权时，
  必须配置 TACACS 服务器。若没有配置了授权 命令`authorization`，
  本地方式授权登录的用户直接采用`username `命令配置的权限，而 `RADIUS/TACACS` 验证登录的用户只能在最小权限下工作。
- 举例：配置 telnet 远程登录的验证方式为 RADIUS 。
  ```text
  Switch(config)#authorization line vty exec radius
  ```

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