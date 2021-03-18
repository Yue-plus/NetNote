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
  primary 表示配置第一启动 IMG 文件，backup 表示配置第二启动 IMG 文件，`<img-file-url>` 为启动 IMG 文件全路径。
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
  交换机提供随时随地的在线帮助，help 命令则显示关于整个帮助体系的信息，包括完全帮助和部分帮助，
  用户可以随时随地<kbd>?</kbd>键入获取在线帮助。
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

### `ip http server`

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

### `language3`

- 命令：`language {chinese | english}`
- 功能：设置显示的帮助信息的语言类型。
- 参数：`chinese` 为中文显示；`english` 为英文显示。
- 命令模式：特权和配置模式。
- 缺省情况：系统缺省英文显示。
- 使用指南：用户可根据自己的喜好选择语言类型。系统若重启后，帮助显示信息恢复为英文显示。

### `login`

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

### `password`

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

### `privilege`

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

### `reload`

- 命令：`reload`
- 功能：热启动交换机。
- 命令模式：特权用户配置模式。
- 使用指南：用户可以通过本命令，在不关闭电源的情况下，重新启动交换机。

### `service password-encryption`

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

### `service terminal-length`

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

### `sysContact`

- 命令：
  + `sysContact <LINE>`
  + `no sysContact`
- 功能：设置厂商联系方式，本命令的 no 操作为恢复初始配置。
- 参数：`<LINE>`为提示符的字符串，范围0-255 个字符。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省为出厂模式。
- 使用指南：通过本命令用户可以根据实际情况设置交换机厂商的联系方式。
- 举例：设置厂商联系方式为`test`。
  ```text
  Switch(config)#sysContact test
  ```

### `sysLocation`

- 命令：
  + `sysLocation <LINE>`
  + `no sysLocation`
- 功能：设置厂商地址，本命令的 no 操作为恢复初始配置。
- 参数：`<LINE>`为提示符的字符串，范围0-255 个字符。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省为出厂模式。
- 使用指南：通过本命令用户可以根据实际情况设置交换机厂商的地址。
- 举例：设置厂商地址为test。
  ```text
  Switch(config)#sysLocation test
  ```

### `set default`

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

### `setup`

- 命令：`setup`
- 功能：进入交换机的`Setup` 配置模式。
- 命令模式：特权用户配置模式。
- 使用指南：在`Setup` 配置模式下用户可进行IP 地址、Web 服务等的配置。

### `show clock`

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

### `show cpu usage`

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

### `show cpu utilization`

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

### `show memory usage `

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

### `show privilege`

- 命令：`show privilege`
- 功能：显示当前用户权限。
- 参数：无。
- 命令模式：各种配置模式。
- 举例：显示当前用户权限。
  ```text
  witch(Config)#show privilege
  urrent privilege level is 15
  ```

### `show privilege mode LINE`

- 命令：`show privilege mode LINE`
- 功能：显示指定命令的优先级。
- 参数：`mode `为要配置的命令的注册模式，<kbd>Tab</kbd>或者<kbd>？</kbd>可以显示所有注册模式 
  LINE 为要设置的命令，支持命令的缩写格式
- 命令模式：特权和配置模式
- 使用指南：LINE 必须为完整的命令格式，命令的缩写格式必须是能够解析成功的命令，对于不完整的命令、书写错误的命令、缩写不能正确解析的命令，不能显示级别。
- 举例：显示命令`privilege` 的优先级。
  ```text
  Switch(config)#show privilege exec show ip route
  The command : show ip route
  Privilege is : 15
  ```

### `show tcam usage`

  S5750E机器不支持

### `show temperature`

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

### `show tech-support`

- 命令：`show tech-support [no-more]`
- 功能：显示交换机运行的信息和各任务的状态，技术支持人员利用该命令，诊断交换机的运行是否正常。
- 参数：`no-more`: 直接全部显示交换机运行的信息和各任务的状态，不通过`more` 进行用户交互。
- 命令模式：特权和配置模式。
- 使用指南：在交换机出现运行故障时，可以利用该命令获取相关信息，诊断故障原因。
- 举例：
  ```text
  Switch#show tech-support
  ```

### `show version`

- 命令：`show version`
- 功能：显示交换机版本信息。
- 命令模式：特权和配置模式。
- 参数：无。
- 使用指南： 通过使用此命令来查看交换机的版本信息，包括硬件版本和软件版本信息。
- 举例：
  ```texe
  Switch#show version
  ```
### `username`

- 命令：
  + `username <username> [privilege <privilege>] [password [0 | 7] <password>]`
  + `no username <username>`
- 功能：在本地设置利用用户名和密码验证方式登录的用户及其优先级。
- 参数：`<username>`为用户名，取值范围不超过32 字符；`<privilege>`为该用户可执行的命令的最大等级，
  级别为1-15，缺省级别为1；`<password>`为用户密码，如果在设定密码时，输入选项为0，则应输入明文密码，
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

### `web-auth privilege <1-15>`

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

### `web language` 

- 命令：`web language {chinese | english}`
- 功能：设置 HTTP 服务器显示信息的语言类型。
- 参数：`chinese` 为中文显示；`english` 为英文显示。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省中文显示。
- 使用指南：用户可根据自己的喜好选择语言类型。

### `write`

- 命令：write
- 功能：将当前运行时配置参数保存到Flash Memory。
- 命令模式：特权用户配置模式。
- 使用指南：当完成一组配置，并且已经达到预定功能，应将当前配置保存到用户指定的配置恢复文件中，
  以便因不慎关机或断电时，系统可以自动恢复到原先保存的配置。相当于copy running-config startup-config 命令。

### `write running-config`

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

### `aaa authorization config-commands`

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
 
### `accounting command`

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

### `accounting exec`

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

### `authentication enable`

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

### `authentication ip access-class`

- 命令：
  + `authentication ip access-class {<num-std>|<name>}`
  + `no authentication ip access-class`
- 功能：为 Telnet/SSH/Web 登录方式绑定标准的 IP ACL 规则；本命令的 no 操作为取消绑定ACL。
- 参数：`<num-std>`为标准数字 ACL 的访问表标号，取值范围为<1-99>；
  `<name>`为标准命名 ACL 的访问表标名，字符串长度为1-32。
- 缺省情况：系统默认关闭 Telnet/SSH/Web 绑定 ACL 功能。
- 命令模式：全局配置模式
- 举例：绑定标号为 1 的数字标准 ACL 规则。
  ```text
  Switch(config)#authentication ip access-class 1 in
  ```

### `authentication ipv6 access-class`

- 命令：
  + `authentication ipv6 access-class {<num-std>|<name>} in`
  + `no authentication ipv6 access-class`
- 功能：为 Telnet/SSH/Web 登录方式绑定标准的 IPv6 ACL 规则；本命令的 no 操作为取消绑定ACL。
- 参数： `<num-std> `为标准数字 ACL 的访问表标号，取值范围为<500-599>；
  `<name>` 为标准命令 ACL 的访问表标名，字符串长度为1-32。
- 缺省情况：系统默认关闭 Telnet/SSH/Web 绑定 ACL 功能。
- 命令模式：全局配置模式
- 举例：绑定标号为500 的数字标准 ACL 规则。
  ```text
  Switch(config)#authentication ipv6 access-class 500 in
  ```

### `authentication line login`

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

### `authentication securityip` 

- 命令：
  + `authentication securityip <ip-addr>`
  + `no authentication securityip <ip-addr>`
- 功能：配置允许使用 Telnet 和 HTTP 方式登录交换机的安全 IP 地址；本命令的 no 操作为删除指定的安全IP  地址。
- 参数：`<ip-addr>`可以访问本交换机的安全 IP 地址，点分十进制格式。
- 缺省情况：系统缺省不配置任何安全 IP 地址。
- 命令模式：全局配置模式。
- 使用指南：没有配置安全 IP 地址前，不限制登录交换机的 IP 地址；配置安全 IP 地址后，
  只有安全 IP 地址的主机才能够登录到交换机进行配置。交换机允许配置最多32 个安全 IP地址。
- 举例：设置192.168.1.21 为安全IP 地址。
  ```text
  Switch(config)#authentication securityip 192.168.1.21
  ```

### `authentication securityipv6 `

- 命令：
  + `authentication securityipv6 <ipv6-addr>`
  + `no authentication securityipv6 <ipv6-addr>`
- 功能： 配置允许使用 Telnet 和 HTTP 方式登录交换机的用户安全 IPv6 地址；本命令的 no 操作为删除指定的安全 IPv6 地址。
- 参数：`<ipv6-addr>`可以访问本交换机的安全 IPv6 地址。
- 缺省情况： 系统缺省不配置任何安全 IPv6 地址。
- 命令模式： 全局配置模式。
- 使用指南： 没有配置安全 IPv6 地址前，不限制登录交换机的 IPv6 地址；配置安全 IPv6地址后，
  只有安全IPv6 地址的主机才能够登录到交换机进行配置。交换机允许配置最多32个安全IPv6 地址。
- 举例： 设置2001:da8:123:1::1 为安全IPv6 地址。
  ```text
  Switch(config)#authentication securityipv6 2001:da8:123:1::1
  ```

### `authorization`

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

### `authorization line vty command`

- 命令：
  + `authorization line vty command <1-15> {local | radius | tacacs} (none|)`
  + `no authorization line vty command <1-15>`
- 功能：配置 VTY（即指 Telnet 和 ssh 登录方式）登录用户的命令授权方式和授权选择优先级；
  该命令的no 命令恢复缺省授权方式。
- 缺省情况：缺省没有配置授权方式。
- 命令模式：全局配置模式。
- 使用指南：设置 VTY 登录的用户在配置命令时的授权方法，其授权方式可以选择`Local、RADIUS 和 TACACS `
  的任意组合，`none` 方法仅作为最后一种方法。当采用组合授权方式时，在最前面的授权方式优先级最高，
  并依次递减；如果高优先级方式授权通过，则配置命令成功，并忽略后面的授权方式。
  需要注意的是：只要有一种授权方式收到相应协议的明确回应，无论是拒绝还是接收，都不再尝试下一种授权方式；若未收到相应协议的明确回应，则尝试下一种授权方式。当使用 RADIUS 授权时，
  必须使能 AAA 功能并配置 RADIUS 服务器。当使用 TACACS 授权时，必须配置 TACACS 服务器。
   `none` 方法为逃生功能只能作为最后一种授权方法，该方法直接返回授权通过，配置命令成功。
- 举例：配置 telnet 远程登录用户的1 级命令授权方式为 TACACS。
  ```text
  Switch(config)#authorization line vty command 1 tacacs
  ```

### `clear line vty <0-31>`

- 命令：`clear line vty <0-31>`
- 功能：删除指定线路上登陆的用户，强制 telnet 或 ssh 登陆的用户下线。
- 命令模式：特权模式。
- 使用指南：当输信该命令后，需要对该命令进行确认判断，`Confirm[Y/N]:`，当输入<kbd>Y</kbd>或<kbd>y</kbd>时，执行删除操作；输入<kbd>？</kbd>，不执行删除操作，只打印提示信息;输入其它任何字符均不执行删除操作。

### `crypto key clear rsa`

- 命令：`crypto key clear rsa`
- 功能：清除 ssh 加密密钥。
- 命令模式： 特权模式

### `terminal length `

- 命令：
  + `terminal length <0-512>`
  + `terminal no length`
- 功能：设置当前终端每屏显示字符的行数, no 命令取消换屏操作，一次显示所有内容。
- 参数：每屏显示字符的行数，取值范围为 0-512 (0 为不停顿，一次显示所有字符)。
- 命令模式：特权用户配置模式。
- 缺省情况：系统缺省的行数为 25。
- 使用指南：设置当前的 console 或者 telnet，ssh 客户端每屏的显示行数，当显示信息超过
- 一屏时，会出现 —More— 提示，按任意键则显示下一屏信息，默认设置是 25 行。
- 举例：设置每次显示字符的行数为 20：
  ```text
  Switch#terminal length 20
  ```

### `terminal monitor`

- 命令：
  + `terminal monitor`
  + `terminal no monitor`
- 功能：复制调试信息到当前显示终端，no 命令恢复缺省值。
- 命令模式：特权用户配置模式。
- 使用指南：控制当前的调试信息是否显示在该终端，如果在 telnet 或者是 ssh 客户端设置该命令，
  则 debug 信息将会送到该客户端，默认为调试信息显示在console。
- 举例：
  ```text
  Switch#terminal monitor
  ```

### `telnet`

- 命令：`telnet [vrf <vrf-name>] {<ip-addr> | <ipv6-addr> | host <hostname>} [<port>]`
- 功能：以 Telnet 方式登录到 IP 地址为`<ip-addr>`的远程主机。
- 参数：`<vrf-name>`为指定的 VRF 名称；`<ip-addr>`为远端主机的 IP 地址，点分十进制格式；
- `<ipv6-addr>`为远端主机的 IPv6 地址；`<hostname>`是为远端主机的主机名，最长不超过 64 个字符；
  `<port>`为端口号，取值范围 0~65535。
- 命令模式：特权用户配置模式。
- 使用指南：本命令是交换机作为 Telnet 客户端时使用的，用户通过本命令登录远程主机进行配置。
  当交换机作为 Telnet 客户端时，只能与一个远程主机建立 TCP 连接，如果想与另一个远程主机建立连接，
  则必须先断开与上一个远程主机的 TCP 连接。断开与远程主机的连接可以使用快捷键<kbd>CTRL+ \ </kbd>。
  当 telnet 主机名时，应预先配置主机名与 IP/IPv6 地址的映射关系，命令可参考`ip host` 和`ipv6 host`。
  如果同一个主机名对应一个 IPv4 且对应一个 IPv6 地址，则telnet 该主机名时优先使用该主机名对应的IPv6 地址。
- 举例：交换机 Telnet 到IP 地址为 20.1.1.1 的远程路由器 router。
  ```text
  Switch#telnet 20.1.1.1 23
  Connecting Host 20.1.1.1 Port 23...
  Service port is 23
  Connected to 20.1.1.1
  login:123
  password:***
  router>
  ```

### `telnet-server enable`

- 命令：
  + `telnet-server enable`
  + `no telnet-server enable`
- 功能：打开交换机的 Telnet 服务器功能；本命令的 no 操作为关闭交换机的 Telnet 服务器功能。
- 缺省情况：系统缺省打开 Telnet 服务器功能。
- 命令模式：全局配置模式。
- 使用指南：该命令只能在 Console 下使用，管理员使用本命令允许或拒绝 Telnet 客户端登录到交换机。
- 举例：关闭交换机的 Telnet 服务器功能。
  ```text
  Switch(config)#no telnet-server enable
  ```

### `telnet-server max-connection`

- 命令：`telnet-server max-connection {<max-connection-number>|default}`
- 功能：配置交换机 Telnet 服务器支持的最大连接数。
- 参数：`<max-connection-number>` 为 Telnet 服务器支持的最大连接数，
  范围为 5-16。default 选项恢复本命令的缺省配置。
- 缺省情况：系统设置的缺省最大连接数为 5。
- 命令模式：全局配置模式。
- 使用指南：无。
- 举例：设置 Telnet 服务器支持的最大连接数为 10。
  ```text
  Switch(config)#telnet-server max-connection 10
  ```

### `ssh-server authentication-retries`

- 命令：
  + `ssh-server authentication-retries <authentication-retries>`
  + `no ssh-server authentication-retries`
- 功能：设置 SSH 客户端的验证重试次数；本命令的 no 操作为恢复缺省的重试次数。
- 参数：`<authentication-retries>`为验证重试次数，范围为 1-10 次。
- 缺省情况：系统设置的 SSH 验证重试次数为 3 次。
- 命令模式：全局配置模式。
- 使用指南：无。
- 举例：设置 SSH 客户端的验证重试次数为 5 次。
  ```text
  Switch(config)#ssh-server authentication-retries 5
  ```

### `ssh-server enable`

- 命令：
  + `ssh-server enable`
  + `no ssh-server enable`
- 功能：打开交换机的 SSH 服务器功能；本命令的 no 操作为关闭交换机的 SSH 服务器功能。
- 缺省情况：系统缺省关闭 SSH 服务器功能。
- 命令模式：全局配置模式。
- 使用指南：如果需要 SSH 客户端登录到该交换机，需要交换机配置 SSH 用户，
  且打开 SSH 服务，然后 SSH 客户端才能正确登录 SSH 服务器，对交换机进行配置管理。
- 举例：打开交换机的 SSH 服务器功能。
  ```text
  Switch(config)#ssh-server enable
  ```

### `ssh-server host-key create rsa`

- 命令：`ssh-server host-key create rsa [modulus <modulus>]`
- 功能：为 SSH 服务器创建新的 RSA 主机密钥。
- 参数：`modulus`为计算主机密钥所使用的模，范围为 768-2048，缺省为 1024。
- 缺省情况：系统缺省使用`ssh-server`服务第一次启动时自动生成的密钥。
- 命令模式：全局配置模式。
- 使用指南：使用该命令可以创建新的主机密钥，然后 SSH 客户端登录该服务时，使用新生成的密钥进行主机认证。
  在生成新的密钥，并用`write`命令配置保留后，系统以后都使用该密钥进行主机认证。
  由于密钥计算需要较长时间，而且有个别客户端软件不兼容利用模 2048 计算出来的密钥，
  所以从安全效率和兼容性上考虑，建议采用缺省的模 1024 生成主机密钥。
- 举例：生成新的主机密钥。
  ```text
  Switch(config)#ssh-server host-key create rsa
  ```

### `ssh-server max-connection`

- 命令：`ssh-server max-connection {<max-connection-number>|default}`
- 功能：配置交换机 SSH 服务器支持的最大连接数。
- 参数：`<max-connection-number>`为 SSH 服务器支持的最大连接数，范围为 5-16。
  `default`选项恢复本命令的缺省配置。
- 缺省情况：系统设置的缺省最大连接数为 5。
- 命令模式：全局配置模式。
- 举例：设置 SSH 服务器支持的最大连接数为 10。
  ```text 
  Switch(config)#ssh-server max-connection 10
  ```

### `ssh-server timeout`

- 命令：
  + `ssh-server timeout <timeout>`
  + `no ssh-server timeout`
- 功能：设置 SSH 客户端的验证超时时间；本命令的 no 操作为恢复缺省的超时时间。
- 参数：`<timeout>`为超时时间，范围为 10-600 秒。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省设置 SSH 客户端验证超时时间为 180 秒。
- 使用指南：本命令设置 SSH 客户端验证超时时间，系统缺省的超时时间为 180 秒。
- 举例：设置 SSH 客户端验证超时时间为 240 秒。
  ```text
  Switch(config)#ssh-server timeout 240
  ```
 
### `show crypto key`

- 命令：`show crypto key`
- 功能：显示 ssh 加密密钥。
- 命令模式：特权模式

### `show ssh-server`

- 命令：`show ssh-server`
- 功能：显示 SSH 服务器的状态是打开还是关闭，以及已经登录的 SSH 用户信息。
- 命令模式：特权和配置模式。
- 举例：
  ```text
  Switch#show ssh-server
  ssh server is enabled
  ssh-server timeout 180s
  ssh-server authentication-retries 3
  ssh-server max-connection number 6
  ssh-server login user number 2
  ```

### `show telnet login`

- 命令：`show telnet login`
- 功能：显示当前与交换机建立起 Telnet 连接的 Telnet 客户端的信息。
- 命令模式：特权和配置模式。
- 使用指南：本命令用以查看当前登录到系统的远程用户的信息。
- 举例：
  ```text
  Switch#show telnet login
  Authenticate login by local.
  Login user:
  aa
  ```

### `show users `

- 命令：`show users`
- 功能：显示通过 telnet 和 ssh 登陆的用户信息，包括线路号，登陆的用户名及用户的 IP 。
- 命令模式：特权模式。
- 使用指南：当输入该命令时，显示通过 telnet 和 ssh 登陆的用户信息，
  包括线路号、登陆的用户名及用户的IP。因为目前交换机最多支持 16 个 telnet 和 16 个 ssh 用户同时上线，
  所以将 vty 0-15 给 telnet 使用，16-31 供 ssh 使用;
- 举例：
  ```text
  Switch#show users
  Line      User    Location
  vty 16    a       192.168.1.1
  vty 0     admin   192.168.1.2
  vty 17    mab     192.168.1.13
  vty 1     test    192.168.1.40
  ```

### `who`

- 命令：`who`
- 功能：显示当前 vty 登录用户。
- 参数：无。
- 命令模式：各种配置模式
- 举例：显示当前 vty 登录用户。
  ```text
  Switch#who
  Telnet user a login from 192.168.1.20

### `force sync software-version (enable|disable)`

- 命令：`sync software-version (enable|disable)`
- 功能：强制将主控软件板本从`active master `备份`standby master`。
- 命令模式：特权用户配置模式。
- 使用指南：该命令 enable 之后， write 保存，重启之后将首先检查 AM 和 SM 版本号，
如果不一致则进行版本同步（堆叠模式下，重启后生效）

## 配置交换机的 IP 地址 

### `interface vlan`

- 命令：
  + `interface vlan <vlan-id>`
  + `no interface vlan <vlan-id>`
- 功能：进入 VLAN 接口配置模式；本命令的 no 操作为删除已存在的 VLAN 接口。
- 参数：`<vlan-id>`是已建立的 VLAN 的 VLAN ID，取值范围：1~4094。
- 命令模式：全局配置模式。
- 使用指南：要配置一个 VLAN 接口前，应确认此 VLAN 存在。使用命令`exit`可以从 VLAN
- 接口配置模式退回到全局配置模式。
- 举例：进入 VLAN 1 接口配置模式。
  ```text
  Switch(config)#interface vlan 1
  Switch(Config-if-Vlan1)#
  ```

### `interface ethernet 0`

 S5750E机器不支持

### `ip address`

- 命令：
  + `ip address <ip-address> <mask> [secondary]`
  + `no ip address [<ip-address> <mask>] [secondary]`
- 功能：设置交换机的指定 VLAN 接口的 IP 地址及掩码；本命令的 no 操作为删除该 IP 地址配置。
- 参数：`<ip-address>`为 IP 地址，点分十进制格式；`<mask>`为子网掩码，点分十进制格式；
  [secondary]为表示配置的 IP 地址为从 IP 地址。
- 缺省情况：出厂时交换机无 IP 地址。
- 命令模式： VLAN 接口配置模式。
- 使用指南：用户若要为交换机配置 IP 地址，必须首先创建一个 VLAN 接口。
- 举例：设置 VLAN1 接口的 IP 地址为10.1.128.1/24。
  ```text
  Switch(config)#interface vlan 1
  Switch(Config-if-Vlan1)#ip address 10.1.128.1 255.255.255.0
  Switch(Config-if-Vlan1)#exit
  Switch(config)#
  ```
- 相关命令：`ip bootp-client enable`、`ip dhcp-client enable`

### `ipv6 address`

- 命令：
  + `ipv6 address <ipv6address | prefix-length> [eui-64]`
  + `no ipv6 address <ipv6address | prefix-length> [eui-64]`
- 功能： 为接口配置可聚合全球单播地址、本地站点地址、本地链路地址。
- 参数：`<ipv6 address>` 参数为 IPv6 地址的前缀，`<prefix-length>`参数为 IPv6 地址的前缀长度，
  前缀长度为 3-128 之间， eui-64 表明根据接口的 eui64 接口标识符自动生成 IPv6 地址。
- 命令模式： 接口配置模式。
- 缺省情况： 无。
- 使用指南： IPv6 地址前缀不能是多播地址，及其它有特定用途的 IPv6 地址，
  不同的 vlan 三层接口不能配置相同的地址前缀。对于全球单播地址，前缀必须在 2001:: 至 3fff:: 范围之内，
  前缀长度必须大于或等于 3 。对于本地站点地址和本地链路地址，前缀长度必须大于或等于 10 。
- 举例： 在 Vlan1 三层接口上配置一个 IPv6 地址：前缀为 2001:3f:ed8::99 ，前缀长度为64。
  ```text
  Switch(Config-if-Vlan1)#ipv6 address 2001:3f:ed8::99/64
  ```

### `ip bootp-client enable`

- 命令：
  + `ip bootp-client enable`
  + `no ip bootp-client enable`
- 功能：使能交换机为 BootP Client ，通过 BootP 协商方式获取 IP 地址及网关地址；
  本命令的 no 操作为关闭 BootP Client 功能，并且释放以 BootP 方式获取的地址和网关地址。
- 缺省情况：缺省关闭 BootP Client 功能。
- 命令模式：VLAN 接口配置模式。
- 使用指南：通过 BootP 方式获取 IP 地址和手工配置、DHCP 方式获取 IP 地址是互斥的，
  不允许同时打开两种获取 IP 地址的方式。注意：要获得 IP 地址，网络上需要有 DHCP Server ，或者 BootP Server 。
- 举例：通过 BootP 方式获取 IP 地址。
  ```text
  Switch(config)#interface vlan 1
  Switch(Config-if-Vlan1)#ip bootp-client enable
  Switch (Config-if-Vlan1)#exit
  Switch (config)#
  ```
- 相关命令：`ip address`、`ip dhcp-client enable`

### `ip dhcp-client enable`

- 命令：
  + `ip dhcp-client enable`
  + `no ip dhcp-client enable`
- 功能：使能交换机为 DHCP Client，通过 DHCP 协商方式获取 IP 地址及网关地址；
  本命令的 no 操作为关闭 DHCP Client 功能，并且释放以 DHCP 方式获取的地址和网关地址。
  注意：要获得 IP 地址，网络上需要有 DHCP Server。
- 缺省情况：缺省关闭 DHCP Client 功能。
- 命令模式：VLAN 接口配置模式。
- 使用指南：通过 DHCP 方式获取 IP 地址和手工配置、 BootP 方式获取 IP 地址是互斥的，
- 不允许同时打开两种获取 IP 地址的方式。
- 举例：通过 DHCP 方式获取 IP 地址。
  ```text
  Switch(config)#interface vlan 1
  Switch(Config-if-Vlan1)#ip dhcp-client enable
  Switch(Config-if-Vlan1)#exit
  Switch(config)#
  ```

## SNMP 命令 

### `debug snmp mib`

- 命令：
  + `debug snmp mib`
  + `no debug snmp mib`
- 功能：打开 SNMP mib 的调试开关；本命令的 no 操作为关闭该调试开关。
- 命令模式：特权用户配置模式。
- 使用指南： 当用户在使用 SNMP 时遇到问题，可以打开 SNMP 的调试开关，查找问题的原因。
- 举例：
  ```text
  Switch#debug snmp mib
  ```

### `debug snmp kernel`

- 命令：
  + `debug snmp kernel`
  + `no debug snmp kernel`
- 功能：打开 SNMP kernel 的调试开关；本命令的 no 操作为关闭该调试开关。
- 命令模式：特权用户配置模式。
- 使用指南：当用户在使用 SNMP 时遇到问题，可以打开 SNMP 的调试开关，查找问题的原因。
- 举例：
  ```text
  Switch#debug snmp kernel
  ```

### `rmon enable`

- 命令：
  + `rmon enable`
  + `no rmon enable`
- 功能：打开 RMON ；本命令的 no 操作为关闭 RMON 。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省开启 RMON 。
- 举例：
- 启动 RMON 。
  ```text
  Switch(config)#rmon enable
  ```
- 关闭 RMON 。
  ```text
  Switch(config)#no rmon enable
  ```

### ``show private-mib oid`

- 命令：`show private-mib oid`
- 功能：显示设备私有`Mib`的起始`oid`。
- 命令模式：特权和配置模式。
- 使用指南：通过`show private-mib oid`命令可以查看到私有`mib`的起始`oid`。
- 举例：显示私有`Mib`的起始`oid`。
  ```text
  Switch# show private-mib oid
  Private MIB OID:1.3.6.1.4.1.6339
  ```

### `show snmp`

- 命令：`show snmp`
- 功能：显示 SNMP 各种计数器信息。
- 命令模式：特权和配置模式。
- 举例：
  ```text
  Switch#show snmp
      0 SNMP packets input
      0 Bad SNMP version errors
      0 Unknown community name
      0 Illegal operation for community name supplied
      0 Encoding errors
      0 Number of requested variables
      0 Number of altered variables
      0 Get-request PDUs
      0 Get-next PDUs
      0 Set-request PDUs
  0 SNMP packets output
      0 Too big errors (Max packet size 1500)
      0 No such name errors
      0 Bad values errors
      0 General errors
      0 Get-response PDUs
      0 SNMP trap PDUs
      
| 显示内容  | 解释|
|:-:|:-:|
|snmp packets input|输入的snmp 报文的总数|
|bad snmp version errors|版本信息错误的报文数目|
|unknown community name|团体名错误的报文数目|
|illegal operation for community namesupplied|团体名对应的权限错误的报文数目|
|encoding errors|编码错误的snmp 报文数目|
|Number of requested variables|nms 请求的变量的数目|
|number of altered variables|nms 设置的变量的数目|
|get-request PDUs|收到的get 请求的报文数目|
|get-next PDUs|收到的getnext 请求的报文数目|
|set-request PDUs|收到的set 请求的报文数目|
|snmp packets output| 输出的snmp 报文的总数|
|too big errors too_big| 错误的snmp 报文数目|
|maximum packet size snmp| 报文的最大长度|
|No such name errors| 对不存在的MIB 对象进行请求的报文的数目|
|bad values errors bad_values |错误的snmp 报文的数目|
|general errors general_errors |错误的snmp 报文的数目|
|response PDUs |发送的响应报文的数目|
|trap PDUs |发送的trap 报文的数目|

### `show snmp engineid` 

- 命令：`show snmp engineid`
- 功能：显示引擎号的命令。
- 命令模式：特权和配置模式。
- 举例：
  ```text
  Switch#show snmp engineid
  SNMP engineID:3138633303f1276c     Engine Boots is:1
  ```
| 显示内容  | 解释|
|-----|----|
|SNMP engineID |引擎号|
|Engine Boots |引擎启动次数|

### `show snmp group`

- 命令：`show snmp group`
- 功能：显示组信息的命令。
- 命令模式：特权和配置模式。
- 举例：
  ```text
  Switch#show snmp group
  Group Name:initial    Security Level:noAuthnoPriv
  Read View:one
  Write View:<no writeview specified>
  Notify View:one
  ```

| 显示内容  | 解释|
|---|---|
|Group Name |组名|
|Security level |安全级别|
|Read View |读视图名|
|Write View |写视图名|
|Notify View| 通告视图名|
|`<no writeview specified>` |用户没有指定适用的视图名|

### `show snmp mib`

- 命令：`show snmp mib`
- 功能：显示本机支持的所有 MIB 。
- 命令模式：特权和配置模式。

### `show snmp status`

- 命令：`show snmp status`
- 功能：显示 SNMP 配置信息。
- 命令模式：特权和配置模式。
- 举例：
  ```text
  Switch#show snmp status
  Trap enable
  RMON enable
  Community Information:
  V1/V2c Trap Host Information:
  V3 Trap Host Information:
  Security IP Information:
  ```
| 显示内容  | 解释|
|---|---|
|Community string |团体字符串|
|Community access| 团体字符串的读写方式|
|Trap-rec-address |接收 Trap 的 IP 地址|
|Trap enable |是否允许发送 trap 消息|
|SecurityIP |允许访问 Agent 的管理站 IP 地址|

### `show snmp user`

- 命令：`show snmp user`
- 功能：显示用户信息的命令。
- 命令模式：特权和配置模式。
- 举例：
  ```text
  Switch#show snmp user
  User name: initialsha
  ngine ID: 1234567890
  Auth Protocol:MD5   Priv Protocol:DES-CBC
  Row status:active
  ```
| 显示内容  | 解释|
|---|---|
|User name| 用户名|
|Engine ID| 引擎号|
|Priv Protocol| 使用的加密算法|
|Auth Protocol| 使用的鉴别算法|
|Row status| 用户状态|

### `show snmp view`

- 命令：`show snmp view`
- 功能：显示视图信息的命令。
- 命令模式：特权和配置模式。
- 举例：
  ```text
  Switch#show snmp view
  View Name:readview    1.  -Included   active
      1.3.   - Excluded  active
  ```
| 显示内容  | 解释|
|---|---|
|View Name |视图名|
|1.和1.3.| OID 号|
|Included| 视图包含以此 OID 为根的子树|
|Excluded| 视图不包含以此 OID 为根的子树|
|active| 状态|

### `snmp-server community`

- 命令： 
  + `snmp-server community {ro | rw} {0 | 7} <string> [access{<num-std>|<name>}] [ipv6-access {<ipv6-num-std>|<ipv6-name>}] [read<read-view-name>] [write <write-view-name>]`
  + `no snmp-server community <string> [access {<num-std>|<name>}][ipv6-access {<ipv6-num-std>|<ipv6-name>}]`
- 功能：设置交换机的团体字符串；本命令 no 操作为删除配置的团体字符串。
- 参数：`<string>`为设置的团体字符串，如果密钥选项为 0，则后续指定明文团体字符串，
  如果选项为 7，则后续指定为明文团体字符串加密后的密文字符串；
  `ro | rw `为指定对MIB 库的访问方式， ro 只读方式还是 rw 读写方式；
  `<num-std>`为 IP 标准数字 ACL 的访问表标号，取值范围为 <1-99> ；
  `<name>`为 IP 标准命名 ACL 的访问表标名，字符串长度为 1-32；
  `<ipv6-num-std>`为 IPv6 标准数字 ACL 的访问表标号，取值范围为 <500-599> ；
  `<name>`为 IPv6 标准命名 ACL 的访问表标名，字符串长度为 1-32 ；
  `<read-view-name>`为读访问控制的视图名，字符串长度为 1-32 ；
  `<write-view-name>`为写访问控制的视图名，字符串长度为 1-32 。
- 命令模式：全局配置模式。
- 使用指南：交换机支持最多 4 个团体字符串。可以通过将团体名绑定到特定的读视图或者
- 写视图，来实现对特定团体视图的访问控制。
- 举例：
  添加读写权限的团体字符串`private`。
  ```text
  Switch(config)#snmp-server community rw 0 private
  ```
  添加只读权限的团体字符串`public`。
  ```text
  Switch(config)#snmp-server community ro 0 public
  ```
  修改原读写权限的团体字符串`private`为只读权限。
  ```text
  Switch(config)# snmp-server community ro 0 private
  ```
  删除团体字符串`private`。
  ```text
  Switch(config)#no snmp-server community 0 private
  ```
  将只读权限团体字符串`public `绑定到读视图`pviewr`
  ```text
  Switch(config)#snmp-server community ro 0 public read pviewr
  ```
  将读写权限团体字符串`private` 绑定到读视图`pviewr` 和写视图`pvieww`
  ```text
  Switch(config)#snmp-server community rw 0 private read pviewr write pvieww
  ```

### `snmp-server enable`

- 命令：
  + `snmp-server enable`
  + `no snmp-server enable`
- 功能：打开交换机作为 SNMP 代理服务器功能；本命令的 no 操作为关闭 SNMP 代理服务器功能。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省关闭 SNMP 代理服务器功能。
- 使用指南：交换机若要通过网管软件进行配置管理，必须首先使用本命令打开交换机的 SNMP 代理服务器功能。
- 举例：打开交换机的 SNMP 代理服务器功能。
  ```text
  Switch(config)#snmp-server enable
  ```

### `snmp-server enable traps`

- 命令：
  + `snmp-server enable traps`
  + `no snmp-server enable traps`
- 功能：设置允许设备发送 Trap 消息；本命令的 no 操作为禁止发送 Trap 消息。
- 命令模式：全局配置模式。
- 缺省情况：系统缺省禁止发送 trap 消息。
- 使用指南：当设备允许发送 Trap 消息时，如果设备的端口发生 down/up 或者系统发生down/up 等现象时，设备都会向接收 Trap 消息的管理站发送 Trap 消息。
- 举例：
  允许发送 trap 消息
  ```text
  Switch(config)#snmp-server enable traps
  ```
  禁止发送 trap 消息
  ```text
  Switch(config)#no snmp-server enable traps
  ```

### `snmp-server engineid`

- 命令：
  + `snmp-server engineid <engine-string>`
  + `no snmp-server engineid`
- 功能：配置引擎号；本命令的 no 操作为恢复默认引擎号。
- 命令模式：全局配置模式。
- 参数：`<engine-string>`为引擎号，为1-32 位十六进制字符
- 缺省情况：缺省值为企业号+本机 MAC 地址。
- 使用指南：
- 举例：配置当前引擎号为 A66688999F
  ```text
  Switch(config)#snmp-server engineid A66688999F
  ```
  恢复默认引擎号
  ```text
  Switch(config)#no snmp-server engineid
  ```

### `snmp-server group`

- 命令：
  + `snmp-server group <group-string> {NoauthNopriv | AuthNopriv | AuthPriv}[[read <read-string>] [write <write-string>] [notify <notify-string>]] [access{<num-std>|<name>}] [ipv6-access {<ipv6-num-std>|<ipv6-name>}]`
  + `no snmp-server group <group-string> {NoauthNopriv | AuthNopriv |AuthPriv} [access {<num-std>|<name>}] [ipv6-access{<ipv6-num-std>|<ipv6-name>}]`
- 功能：该命令用来配置一个新的组；本命令的 no 操作为删除这个组。
- 命令模式：全局配置模式。
- 参数：`<group-string >`组名，为1-32 个字符；
  `NoauthNopriv` 采用不鉴别不加密的安全级别；
  `AuthNopriv `采用鉴别不加密的安全级别；
  `AuthPriv` 采用鉴别且加密的安全级别；
  `read-string` 可用于读的视图名，为1-32 个字符；
  `write-string` 可用于写的视图名，为1-32 个字符；
  `notify-string `可用于通告 （trap） 的视图名，为1-32 个字符；
  `<num-std>`为 IP 标准数字 ACL 的访问表标号，取值范围为<1-99>；
  `<name>`为IP 标准命名 ACL 的访问表标名，字符串长度为1-32；
  `<ipv6-num-std>`为 IPv6 标准数字 ACL 的访问表标号，取值范围为<500-599>；
  `<name>`为 IPv6 标准命名 ACL 的访问表标名，字符串长度为1-32。
- 使用指南：系统含一个默认视图为`v1defaultviewname`，建议采用这个视图作为通告的视图名。如果读或写视图为空，则禁止相应操作。
- 举例：
  创建一个组`CompanyGroup`，安全级别为鉴别且加密，用于读的视图名为`readview`,禁止写操作
  ```text
  Switch (config)#snmp-server group CompanyGroup AuthPriv read readview
  ```
  删除组
  ```text
  Switch (config)#no snmp-server group CompanyGroup AuthPriv
  ```

### `snmp-server host`

- 命令：
  + `snmp-server host {<host-ipv4-address> | <host-ipv6-address>} {v1 | v2c | {v3{NoauthNopriv | AuthNopriv | AuthPriv}}} <user-string>`
  + `no snmp-server host {<host-ipv4-address> | <host-ipv6-address>} {v1 | v2c | {v3 {NoauthNopriv | AuthNopriv | AuthPriv}}} <user-string>`
- 功能：对 v1/v2c 版本来说，设置接收 SNMP 的 Trap 消息的网络管理站的 IPv4 或 IPv6 地址及 Trap 团体字符串，对 v3 版本来说，设置接收 SNMP 的 Trap 消息的网络管理站的 IPv4 或 IPv6 地址及 Trap 用户名和安全级别；本命令的 no 操作为取消这个网络管理站的 IPv4 或 IPv6 地址。
- 命令模式：全局配置模式。
- 参数：`<host-ipv4-addr>`为接收 Trap 消息的 NMS 管理站 IP 地址；
  `<host-ipv6-addr>`为接收 Trap 消息的 NMS 管理站 IPv6 地址；
  `v1 | v2c | v3`发送 trap 使用的版本号；
  `NoauthNopriv | AuthNopriv | AuthPriv`发送 `v3 trap`使用的安全级别，不鉴别不加密|鉴别不加密|鉴别且加密；
  `<user-string>v1/v2c`时为发送 Trap 消息时使用的 community 字符串， v3 时为用户名。
- 使用指南：本命令设置发送 Trap 的团体字符串是 RMON 事件组团体字符串的缺省值。
  如果 RMON 事件组没有设置团体字符串，则发送 RMON 的 Trap 时使用本命令设置的团体字符串；
  如果 RMON 事件组设置团体字符串，则发送 RMON 的 trap 时按照 RMON 设置的团体字符串发送。
  本命令允许同时设置接收Trap 消息的 SNMP 网管工作站的 IPv4 或 IPv6地址，
  但配置版本号为 v1 和 v2c 的 IPv4 和 IPv6 地址总共不可以超过 8 个。
- 举例：
  设置一个接受 Trap 的 IP 地址。
  ```text
  Switch(config)#snmp-server host 1.1.1.5 v1 usertrap
  ```
  删除一个接受 Trap 的 IPv6 地址。
  ```text
  Switch(config)#no snmp-server host 2001::1 v1 usertrap
  ```

### `snmp-server securityip` 

- 命令：
  + `snmp-server securityip {<ipv4-address> | <ipv6-address>}`
  + `no snmp-server securityip {<ipv4-address> | <ipv6-address>}`
- 功能： 设置允许访问本交换机的 NMS 管理站的安全 IPv4 或 IPv6 地址；本命令的 no 操作为删除配置的安全 IPv4 或 IPv6 地址。
- 命令模式： 全局配置模式。
- 参数: `<ipv4-address>`为 NMS 的安全 IPv4 地址，点分十进制格式。
  `<ipv6-address>` 为 NMS 的安全 IPv6 地址，冒号分十六进制格式。
- 使用指南： 只有 NMS 管理站的 IPv4 或 IPv6 地址与本命令设置的安全 IPv4 或 IPv6 地址相一致，它发出的 SNMP 包才会被交换机处理，该命令只适用于 SNMP v1 和 SNMP v2c 。允许同时设置交换机的 NMS 管理站的安全 IPv4 或 IPv6 地址，但二者总共不能超过 20 个。
- 举例：
  设置 NMS 管理站的安全 IP 地址
  ```text
  Switch(config)#snmp-server securityip 1.1.1.5
  ```
  删除安全 IPv6 地址
  ```text
  Switch(config)#no snmp-server securityip 2001::1
  ```


### `snmp-server securityip`

- 命令：`snmp-server securityip {enable | disable}`
- 功能：打开/关闭 NMS 管理站的安全 IP 地址检查功能。
- 命令模式：全局配置模式。
- 缺省情况：打开安全 IP 地址检查功能。
- 举例：
  关闭安全 IP 地址检查功能
  ```text
  Switch(config)#snmp-server securityip disable
  ```

### `snmp-server trap-source`

- 命令：
  + `snmp-server trap-source {<ipv4-address> | <ipv6-address>}`
  + `no snmp-server trap-source {<ipv4-address> | <ipv6-address>}`
- 功能：设置本交换机发送 trap 时所使用源 IPv4 或 IPv6 地址；本命令的 no 操作为删除配置的发送 trap 使用的源 IPv4 或 IPv6 地址。
- 参数: `<ipv4-address>`为本交换机发送 trap 时所使用的 IPv4 地址，点分十进制格式。
  `<ipv6-address>`为本交换机发送 trap 时所使用的 IPv6 地址，冒号分十六进制格式。
- 命令模式：全局配置模式。
- 使用指南：默认没有本配置，根据实际 trap 报文发送的接口地址选择源地址，当配置时则采用配置的源地址作为 trap 报文的源地址。
- 举例：
  设置交换机发送trap报文所使用的 IP 地址
  ```text
  Switch(config)#snmp-server trap-source 1.1.1.5
  ```
  删除配置的发送 ipv6 trap 报文的源地址
  ```text
  Switch(config)#no snmp-server trap-source 2001::1
  ```

### `snmp-server user`

- 命令：
  + `snmp-server user <use-string> <group-string> [{authPriv | authNoPriv} auth{md5 | sha} <word>] [access {<num-std>|<name>}] [ipv6-access{<ipv6-num-std>|<ipv6-name>}]`
  + `no snmp-server user <user-string> [access {<num-std>|<name>}][ipv6-access - {<ipv6-num-std>|<ipv6-name>}]`
- 功能：为一个 SNMP 的组添加一个新用户；本命令的 no 操作为删除这个用户。
- 命令模式：全局配置模式。
- 参数：`<user-string>`为用户名称，1-32 个字符；
  `<group-string>`为用户所属的组名，1-32 个字符；
  `authPriv`对报文使用 DES 进行加密；
  `authNoPriv` 不对报文使用 DES 进行加密；
  `auth` 对报文进行鉴别；
  `md5` 使用 HMAC MD5 算法鉴别；
  `sha` 使用 HMAC SHA 算法鉴别；
  `<word>`，用户密码 长度8-32 个字符；
  `<num-std>`为 IP 标准数字 ACL 的访问表标号，取值范围为<1-99>；
  `<name>`为 IP 标准命名 ACL 的访问表标名，字符串长度为1-32；
  `<ipv6-num-std>`为 IPv6 标准数字 CL 的访问表标号，取值范围为<500-599>；
  `<name`>为 IPv6 标准命名 ACL 的访问表标名，字符串长度为1-32。
- 使用指南：如果不选择是否加密鉴别，默认为不加密不鉴别。如果选择进行加密，则必须选择进行鉴别。删除一个用户时，如果输入正确的用户名和错误的组名，同样可以删除用户。
- 举例：
  为组 UserGroup 加入一个用户 tester，安全级别为需要加密、使用 HMAC md5 鉴别，密 hellohello
  ```text
  Switch(config)#snmp-server user tester UserGroup authPriv auth md5 hellohello
  ```
  删除一个用户
  ```text
  Switch(config)#no snmp-server user tester
  ```

### `snmp-server view`

- 命令：
  + `snmp-server view <view-string> <oid-string> {include | exclude}`
  + `no snmp-server view <view-string> [ <oid-string> ]`
- 功能：该命令用来创建或者更新视图的信息；本命令的no 形式用来删除视图信息。
- 命令模式：全局配置模式。
- 参数：`<view-string>` 视图名，为1-32 个字符；
  `<oid-string> OID `号或者对应的节点名，为1-255 个字符；
  `include | exclude `包含/不包含此 OID 。
- 使用指南：该命令不仅支持以变量 OID 的字符串作为参数输入，同时还支持以节点名作为参数输入。
- 举例：
  创建一个视图名为 readview ，包含 iso 节点，但不包含 iso.3 节点
  ```text
  Switch (config)#snmp-server view readview iso include
  Switch (config)#snmp-server view readview iso.3 exclude
  ```
  删除视图
  ```text
  Switch (config)#no snmp-server view readview
  ```

### `switchport updown notification enable`

- 命令：`[no] switchport updown notification enable`
- 功能：开启或者关闭端口 UP/DOWN 事件发送 trap 信息的功能。
- 缺省情况：默认是对端口 IP/DOWN 事件发送 trap 信息。
- 命令模式：端口配置模式。
- 使用指南：该命令可以灵活的控制端口发生 UP/DOWN 事件时是否发送 trap 信息。缺省状态下，
  全局使能 snmp trap 之后，默认是对全部端口的 UP/DOWN 事件都发 trap 。
- 举例：关闭 1/0/1 端口 UP/DOWN 事件发送 trap 信息的功能。
  ```text
  Switch(config)#in e 1/0/1
  Switch(config-if-ethernet1/0/1)#no switchport updown notification enable
  Switch(config-if-ethernet1/0/1)#show running-config current-mode !
  Interface Ethernet1/0/1
  no switchport updown notification enable
  ```

## 交换机升级命令 

### `copy（FTP）`

- 命令：`copy <source-url> <destination-url> [ascii | binary]`
- 功能：FTP 客户机上下载文件。
- 参数：`<source-url>`为被拷贝的源文件或目录的位置；
  `<destination-url>`为文件或目录所要拷贝到的目的地址；
  `<source-url>`和`<destination-url>`的具体形式是随着文件或目录位置的不同而变化的。
  `ascii`表示文件传输使用ASCII 标准；binary 表示文件传输使用二进制标准（ 缺省传输方式）。
- 当 URL 是 FTP 地址时的格式为：
  `ftp://<username>:<password>@{<ipaddress>|<ipv6address>|<hostname> }/<filename>`，
  其中`<username>`为 FTP 用户名，`<password>`为 FTP 用户口令，
  `<ipaddress>|<ipv6address>`为FTP 服务器/客户机的 IPv4 或者 IPv6 地址，
  `<hostname>`是与 IPv6 地址映射的主机名，不支持与 IPv4 地址映射的主机名进行文件的下载和上传，
  `<filename>`为 FTP 上下载文件名。
  filename 的特殊关键字：
| 关键字  | 源地址或目的地址|
|-----|----|
|running-config   | 运行配置文件|
|startup-config   | 在使用 copy running-config startup-config 命令时，代表下次启动的配置文件。|
|nos.img          | 系统文件|
|boot.rom         |系统启动文件|
|stacking/nos.img |作为目的地址在堆叠模式下对 Slave 进行系统文件升级|
|stacking/nos.rom |作为目的地址在堆叠下对 Slave 进行系统启动文件升级|
- 命令模式： 特权用户配置模式。
- 使用指南： 本命令支持命令行提示， 即如果用户可以输入如下形式的命令`copy <filename> ftp://`或者`copy ftp:// <filename>`后直接回车，系统会出现如下的提示：
  ```text
  ftp server ip/ipv6 address [x.x.x.x]/[x:x::x:x] >
  ftp username>
  ftp password>
  ftp filename>
  ```
- 要求输入 FTP 服务器的地址、用户名、密码及文件名。
- 举例：
- （1）储存 FLASH 内的映像到 FTP 服务器10.1.1.1，FTP 服务器的登录用户名为 Switch，密码为 superuser ：
  ```text
  Switch#copy nos.img ftp://Switch:superuser@10.1.1.1/nos.img

- （2）从FTP 服务器 10.1.1.1 上得到系统文件 nos.img ，用户名为 Switch ，密码      superuser：
  ```text
  Switch#copy ftp://Switch:superuser@10.1.1.1/nos.img nos.img
  ```
- （3）储存 FLASH 内的映像到 FTP 服务器 2004:1:2:3::6
  ```text
  Switch#copy nos.img ftp://username:password@2004:1:2:3::6/ nos.img
  ```
- （4）从 FTP 服务器 2004:1:2:3::6 上得到系统文件 nos.img ：
  ```text
  Switch#copy ftp:// username:password@2004:1:2:3::6/nos.img nos.img
  ```
- （5）保存运行配置文件：
  ```text
  Switch#copy running-config startup-config
  ```
- 相关命令：`write`

### `copy（TFTP）`
`
- 命令：`copy <source-url> <destination-url> [ascii | binary]`
- 功能：TFTP 客户机上下载文件。
- 参数：`<source-url>`为被拷贝的源文件或目录的位置；
  `<destination-url>`为文件或目录所要拷贝到的目的地址；
  `<source-url>`和`<destination-url>`的具体形式是随着文件或目录位置的不同而变化的。
  `ascii`表示文件传输使用 ASCII 标准；
  `binary` 表示文件传输使用二进制标准（ 缺省传输方式）。
  当 URL 是 TFTP 地址时的格式为：
  `tftp://{<ipaddress>|<ipv6address>|<hostname> }/<filename>` ， 
  其中`<ipaddress>|<ipv6address`>为 TFTP 服务器/客户机的 IPv4 或者 IPv6 地址,`<hostname>`为与 IPv6 地址映射的主机名，不支持与 IPv4 地址映射的主机名进行文件的下载和上传，`<filename>`为 TFTP 上下载文件名。
  `filename` 的特殊关键字：
| 关键字  | 源地址或目的地址|
|-----|----|
|running-config| 运行配置文件|
|startup-config |在使用 copy running-config startup-config 命令时，代表下次启动的配置文件。|
|nos.img |系统文件|
|boot.rom| 系统启动文件|
- 命令模式：特权用户配置模式。
- 使用指南： 本命令支持命令行提示，即如果用户可以输入如下形式的命令 `copy<filename>  - tftp://` 或者` copy tftp:// <filename> `后直接回车，系统会出现如下的提示：
  tftp server ip/ipv6 address[x.x.x.x]/[x:x::x:x]>
  tftp filename>
  要求输入 TFTP 服务器的地址和文件名。
- 举例：
  （1）储存 FLASH 内的系统映像文件到 TFTP 服务器10.1.1.1
  ```text
  Switch#copy nos.img tftp://10.1.1.1/nos.img
  ```
  （2）从 TFTP 服务器 10.1.1.1 上得到系统映像文件 nos.img ：
  ```text
  Switch#copy tftp://10.1.1.1/nos.img nos.img
  ```
  （3）储存 FLASH 内的映像到 TFTP 服务器 2004:1:2:3::6
  ```text
  Switch#copy nos.img tftp:// 2004:1:2:3::6/ nos.img
  ```
  （4）从 TFTP 服务器 2004:1:2:3::6 上得到系统文件 nos.img ：
  ```text
  Switch#copy tftp:// 2004:1:2:3::6/nos.img nos.img
  ```
  （5）保存运行配置文件：
  ```text
  Switch#copy running-config startup-config
  ```
  相关命令：`write`

### `ftp-dir`

- 命令：`ftp-dir <ftp-server-url>`
- 功能：查看 FTP 服务器上的文件列表。
- 参数：`<ftp-server-url>` 格式为：`ftp://<username>:<password>@{<ipv4address>|<ipv6address>} `， 其中`<username>` 为 FTP 用户名，`<password>`为 FTP 用户口令，`{<ipv4address>|<ipv6address>}`为  FTP 服务器 IPv4 或者 IPv6 地址。
- 命令模式：特权用户配置模式。
- 举例：查看地址为 10.1.1.1 的 FT P服务器的文件列表，用户名和口令分别为 Switch、
superuser。
  ```text
  Switch#ftp-dir ftp:// Switch:superuser@10.1.1.1
  ``` 

### `ftp-server enable`

- 命令：
  + `ftp-server enable`
  + `no ftp-server enabl`e`
- 功能：启动 FTP Server；本命令的 no 操作为关闭 FTP Server 服务，禁止 FTP 用户登录。
  缺省情况：缺省不启动 FTP Server 。
- 命令模式：全局配置模式。
- 使用指南：当启动 FTP 服务器功能后，交换机仍保留 FTP 客户机的功能。系统缺省情况下
- 不启动 FTP Server 。
- 举例：打开 FTP Server 服务。
  ```text
  Switch#config
  Switch(config)# ftp-server enable
  ```
- 相关命令：`ip ftp`

### `ftp-server timeout`

- 命令：`ftp-server timeout <seconds>`
- 功能：设置数据连接空闲时限。
- 参数：`<seconds>`为 FTP 连接空闲时限，单位秒，取值范围为 5~3600。
- 缺省情况：系统缺省空闲时限为 600 秒。
- 命令模式：全局配置模式。
- 使用指南：当 FTP 数据连接空闲实现超过此值时，切断 FTP 控制连接。
- 举例：修改空闲时限为 100 秒。
  ```text
  Switch#config
  Switch(config)#ftp-server timeout 100
  ```

### `ip ftp`

- 命令：
  + `ip ftp username <username> password [0 | 7] <password>`
  + `no ip ftp username <username>`
- 功能：配置 FTP 登录用户名和登陆口令；本命令的 no 操作为删除配置的用户名，同时也删除密- 码。
- 参数：`<username>`为 FTP 连接的用户名，取值范围不超过 32 字符；`<password>`为 FTP连接时使用的密码，在设置密码时，若输入选项为0，则应输入明文密码，且不对输入的明文密码进行加密处理；若输入选项为7，则应输入明文密码加密后的密文字符串。
- 缺省情况：系统缺省为匿名 FTP 连接。
- 命令模式：全局配置模式。
- 举例：配置用户名为 Switch，密码为 superuser。
  ```text
  Switch#
  Switch#config
  Switch(config)#ip ftp username Switch password 0 superuser
  Switch(config)#
  ```

### `show ftp`
  
- 命令：`show ftp`
- 功能：显示 FTP 服务器参数的设置情况。
- 命令模式：特权和配置模式。
- 缺省情况：缺省不显示。
- 举例：
  ```text
  Switch#show ftp
  Timeout :600
  ```
|显示信息|描述|
|--|---|
|Timeout| 超时时间|

### `show tftp`

- 命令：`show tftp`
- 功能：显示 TFTP 服务器参数的设置情况。
- 缺省情况：缺省不显示。
- 命令模式：特权和配置模式。
- 举例：
  ```text
  Switch#show tftp
  timeout :60
  Retry Times :10
  ```
  |显示信息|描述|
  |--|---|
  |Timeout| 超时时间|
  |Retry Times |重传次数|

### `tftp-server enable`

- 命令：
  + `tftp-server enable`
  + `no tftp-server enable`
- 功能：启动 TFTP Server；本命令的 no 操作为关闭 TFTP Server 服务，禁止  TFTP 用户登录。
- 缺省情况：缺省不启动 TFTP Server 。
- 命令模式：全局配置模式。
- 使用指南：当启动 TFTP 服务器功能后，交换机仍保留 TFTP 客户机的功能。系统缺省情况下不启动 TFTP Server 。
- 举例：打开 TFTP Server 服务。
  ```text
  Switch#config
  Switch(config)#tftp-server enable
  ```
  相关命令：`tftp-server timeout`


### `tftp-server retransmission-number`

- 命令：`tftp-server retransmission-number <number>`
- 功能：设置 tftp 服务器重新传输数据的次数。
- 参数：`<number>`为重传次数，取值范围为1~20。
- 缺省情况：系统缺省重传 5 次。
- 命令模式：全局配置模式。
- 举例：修改重传次数为 10 次。
  ```text
  Switch#config
  Switch(config)#tftp-server retransmission-number 10
  ```

### `tftp-server transmission-timeout`

- 命令：`tftp-server transmission-timeout <seconds>`
- 功能：设置 tftp 服务器传输超时时间。
- 参数：`<seconds>`为超时时间，取值范围为5~3600s。
- 缺省情况：系统缺省超时时间为 600s 。
- 命令模式：全局配置模式。
- 举例：修改超时时间为 60s 。
  ```text
  Switch#config
  Switch(config)#tftp-server transmission-timeout 60
  ```

## Boot配置命令

### `baudrate`

- 命令：`baudrate <value>`
- 功能：配置交换机的传输波特率。
- 参数： `<value>` 为要设置的传输波特率。目前交换机支持的波特率为 9600,14400,19200,38400,57600,115200。
- 缺省情况：缺省情况下波特率默认为 115200
- 命令模式： boot 配置模式。
- 使用指南：该命令是为 xmodem 模式传输文件时设置合适的波特率。注意，交换机和 PC 机上的串口软件的波特率需要保持一致。
- 举例：配置交换机在 xmodem 模式下传输文件的传输波特率为 115200 。
  ```text
  [Boot]: baudrate 115200
  ```

### `boot img`

- 命令：`boot img<img-file-url> {primary | backup}`
- 功能：设置交换机下次启动的 IMG 文件。
- 参数： primary 表示配置第一启动IMG 文件， backup 表示配置第二启动 IMG 文件，
  `<img-file-url >`为启动 IMG 文件路径。
- 命令模式： boot 配置模式。
- 缺省情况：缺省情况下只有第一启动 IMG 文件名，即 FLASH 中的 nos.img 文件，第二启动IMG 文件为空。
- 使用指南：通过该命令可以配置系统下次启动时的第一启动 img 文件和第二启动 img 文
  件，如果第一启动 img 文件启动失败则系统会自动启动第二启动 img 文件。 IMG 文件全
  路径的格式要求如下：
  1.文件路径由相当于根目录的设备前缀 （flash:/） 和文件名两部分组成。每一部分内不允许有空格存在，每两部分之间也不允许有空格存在。
  2.文件名必须以 .img 为后缀。
  1. 文件全路径不能超过128 个字符，文件名部分不能超过 80 个字符。
- 举例：设置当前交换机下次启动的第一启动 IMG 文件为 flash:/nos.img 。
  ```text
  [Boot]: boot img flash:/nos.img primary
  ```

### `boot startup-config`

- 命令：`boot startup-config <file-url>`
- 功能：设置交换机下次启动的 CFG 文件
- 参数：`<file-url >`为下次启动的 CFG 文件路径。
- 命令模式： boot 配置模式。
- 缺省情况： 出厂配置时默认 CFG 文件为 null，即空配置。
- 使用指南：通过该命令可以配置系统下次启动时的配置文件，配置文件名都必须带后缀 .cfg。
  CFG 文件全路径的格式要求如下：
  1. 路径由相当于根目录的设备前缀（flash:/）和文件名两部分组成，每一部分内及每两部分之间不允许有空格存在。
  2. 配置文件必须以 .cfg 为后缀。
  3. 文件全路径不能超过128 个字符，文件名部分不能超过80 个字符。
- 举例：设置交换机下次启动的 CFG 文件为 flash:/ startup.cfg。
  ```text
  [Boot]: boot startup-config flash:/ startup-config
  ```

### `clearconfig`

- 命令：`clearconfig`
- 功能：将 bootrom 的配置参数恢复成默认。
- 参数：无。
- 缺省情况：无。
- 命令模式： boot 配置模式。
- 使用指南：直接输入 clearconfig 命令，可以设置用户配置为默认配置。
- 举例:将 bootrom 的配置参数恢复成默认。
  [Boot]: clearconfig
  Network interface configure OK.
  Boot config set Ok.

### `copy`

- 命令：`copy <srcFileName> <desFileName>`
- 功能：复制flash 中的文件。
- 参数：`<srcFileName>`为源文件路径，可以是相对路径，也可以是绝对路径；
`<desFileName>`为目的文件路径，必须是绝对路径；目标文件后缀名必须和源文件后缀名相同。
- 缺省情况：无。
- 命令模式： boot 配置模式。
- 使用指南：该命令可以用来备份原有的 img 或者 cfg 文件。
- 举例：备份 IMG 文件。
  ```text
  [Boot]: copy nos.img flash:/backup.img
  或者
  [Boot]: copy flash:/nos.img flash:/backup.img
  ```

### `delete`

- 命令：`delete <filename>`
- 功能：删除 Flash 中的文件。
- 参数：`<filename>`为 falsh 中的文件路径，可以是相对路径，也可以是绝对路径。
- 命令模式： boot 配置模式。
- 缺省情况：无。
- 使用指南：输入`delete + filename`命令，可以删除 Flash 文件系统中的文件。删除
`mantest.img` 时，必须加入/e 选项。
- 举例：删除 flash 中的 nos.img 文件。
  ```text
  [Boot]: delete nos.img
  或者
  [Boot]: delete flash：/nos.img
  ```

### `dir`

- 命令：`dir`
- 功能：显示当前交换机中存在的文件列表及其属性。
- 参数：无。
- 命令模式：boot 配置模式。
- 缺省情况：无。
- 使用指南：直接输入 dir 命令，可将当前交换机中的文件名及文件大小。注意 rom 文件不显示。
- 举例说明：查看当前交换机中存在的文件列表及其属性。
  ```text
  [[Boot]: dir
  1461094   nos.img.ecc
  91393     mantest.img.ecc
  41559526  nos.img
  2599038   mantest.img
  1547      startup.cfg
  5 file(s), 0 dir(s)
  Total size:64483328 bytes , used size:45851648 bytes, free size:18631680 bytes
  ```

### `help`

- 命令：
  + `h`
  + `help`
- 功能：显示当前 bootRom 支持的命令及其功能解释。
- 参数：无。
- 缺省情况：无。
- 命令模式：boot 配置模式。
- 使用指南：查看常用命令的解释。
- 举例：打印出常用命令的解释。
  ```text
  [Boot]: help
  baudrate          - set the baudrate
  boot              - select the active bootimg image file or startup-config file
  clearconfig       - set default bootrom configurations
  copy <src> <dst>  - copy a file
  delete <filename> - delete a file
  dir               - display the contents of the current directory
  h                 - print help list
  help              - print help list
  load <filename>   - load system image(binary format)
  nobootpassword    - no bootpassword for setup
  ping <x.x.x.x>    - ping test
  reboot            - reboot system
  saveconfig        - save bootrom configurations
  setbootpassword   - set boot password
  setconfig         - set bootrom configurations
  show              - show machine info
  showconfig        - show bootrom configurations
  write <filename>  - write file to flash; file gotten by 'load'
  xmodem            - load file by xmodem
  ```

### `load`

命令：`load<filename>`
功能：通过tftp 方式加载文件。
参数：`<filename>` 为需要加载的文件名称。
缺省情况：无。
命令模式：boot 配置模式。
使用指南：输入load + filename 命令，可通过TFTP 加载文件。
举例：加载boot.rom 文件。
`[Boot]:load boot.rom`

### `nobootpassword`

- 命令：`nobootpassword`
- 功能：清除进入 boot 的密码。
- 参数：无。
- 缺省情况：无。
- 命令模式： boot 配置模式。
- 使用指南：通过该命令可以清除进入 boot 的密码。
- 举例：清除进入 boot 的密码。
  ```text
  [Boot]: nobootpassword
  clear password ok
  ```

### `ping`

- 命令：`ping <x.x.x.x>`
- 功能：检验网络连接是否成功。
- 参数：`<x.x.x.x>`为需要 ping 的ip 地址，一般为 pc 的 ip 地址。
- 缺省情况：无
- 命令模式： boot 配置模式
- 使用指南：检验网络连接是否成功，类似 PC 中的 ping 命令，只是没有可选参数，并且只
- 能从交换机往外 ping PC。
- 举例：检查到 192.168.0.1 的网络连接是否通。
  ```text
  [Boot]:ping 192.168.0.1
  ```

### `reboot`

- 命令：`reboot`
- 功能：重启交换机。
- 参数：无。
- 缺省情况：无。
- 命令模式： boot 配置模式。
- 使用指南：直接输入 reboot 命令，可以热启交换机。
- 举例：重启交换机。
  ```text
  [Boot]:reboot
  ```

### `saveconfig `

- 命令：`saveconfig`
- 功能：保存 bootrom 的配置参数。
- 参数：无.
- 缺省情况：无.
- 命令模式：boot 配置模式。
- 使用指南：直接输入 saveconfig 命令，可以保存用户配置。
- 举例：保存 bootrom 的配置参数.
  ```text
  [Boot]: saveconfig
  change boot params is OK
  ```

### `setbootpassword `

- 命令：`setbootpassword`
- 功能：设置进入 boot 的密码。
- 参数：无。
- 缺省情况：缺省情况下进入 boot 没有密码。
- 命令模式： boot 配置模式。
- 使用指南：设置进入 boot 的密码，密码的长度不能小于 3，不能大于 32 。
- 举例：设置进入 boot 的密码。
  ```text
  [Boot]: setbootpassword
  Password:******
  Confirm Password:******
  Password has been set successfully!
  ```

### `setconfig`

- 命令：`setconfig`
- 功能：设置 bootrom 的配置参数。
- 参数：无。
- 缺省情况：缺省情况下 Host IP 为 10.1.1.1，Server IP 为 10.1.1.2 。
- 命令模式：boot 配置模式。
- 使用指南：直接输入 setconfig 命令，可以设置用户配置。目前能设置Host IP 和Server IP
- 两个参数，只支持 TFTP 协议。
- 举例：设置bootrom 的配置参数。
  ```text
  [Boot]: setconfig
  Host IP Address: [10.1.1.1] 192.168.1.1
  Server IP Address: [10.1.1.2] 192.168.1.2
  ```

### `show`

- 命令：`show [board|config|boot-files|partition]`
- 功能：显示相应交换机的信息。
- 参数： board 为交换机相应参数信息，比如 type、mac、sn 值。config 为当前 bootrom 的
- 配置参数。 boot-files 为当前交换机的启动 img 及 cfg 配置文件， partition 为交换机 flash
- 分区的情况。
- 缺省情况：无。
- 命令模式：boot 配置模式。
  使用指南：show board 可以显示交换机相应参数信息，比如type、mac、sn 值。
  Show config 显示 bootrom 的配置参数。show boot-files 为显示交换机的启动 img 及 cfg 配置文件，show partition 为显示交换机flash 分区的情况。
- 举例：查看交换机的启动 img 。
  ```text
  [Boot]: show boot-files
  The primary img file : flash:/1.img
  The backup img file : flash:/nos.img
  The startup-config file: NULL
  ```

### `show config`

- 命令：`showconfig`
- 功能：显示 bootrom 的配置参数。该命令效果同show confnig。
- 参数：无。
- 缺省情况：无。
- 命令模式：boot 配置模式。
- 使用指南：直接输入 show config 命令，可以显示用户配置。
- 举例：显示 bootrom 的配置参数。
  ```text
  [Boot]: showconfig
  Host IP Address: 192.168.1.1
  Server IP Address: 192.168.1.2
  ```

### `write`

- 命令：`write <filename>`
- 功能：将刚通过 load 下载的文件写入存储器（如 FLASH ）中。
- 参数：`<filename`>为写入存储器中的文件名称。
- 命令模式： boot 配置模式。
- 使用指南：输入 write + filename 命令，可将文件写入 Bootrom 或 Flash 中。
- 举例：将 load 的 boot 文件写入 flash 中，命名为 boot.rom 文件。
  ```text
  [Boot]:write boot.rom
  ```

### `xmodem`

- 命令：`xmodem`
- 功能： 在 boot 下通过 xmodem 协议进行文件传输。
- 参数： 无。
- 命令模式：  boot 配置模式。
- 使用指南：为了使传输速率提高，建议设置比较高的波特率（ baudrate 命令）。该命令执行后交换机进入xmodem 接受状态，此时需要在 PC 机通过支持 xmodem 的软件进行 xmodem
- 传输。
- 举例： 使交换机进入 xmodem 模式。
  ```text
  [Boot]: xmodem
  ## Ready for binary (xmodem) download to 0x04400000 at 9600 bps...
  ```