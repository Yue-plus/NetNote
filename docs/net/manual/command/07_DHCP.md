# DHCP 配置命令

## DHCP 服务器配置命令

### `bootfile`

- 命令：
  + `bootfile <filename>`
  + `no bootfile` 
- 功能：配置 DHCP 客户机启动时的导入文件名；本命令的 `no` 操作删除配置的导入文件。
- 参数：`<filename>` 为导入文件的名字，最长不超过 255 个字节。
- 命令模式：DHCP 地址池模式。
- 缺省情况：交换机缺省没有配置 DHCP 客户机启动时的导入文件名。
- 使用指南：
  为客户机指定导入文件名。一般用在无盘工作站，系统启动时需要从服务器上下载配置文件，与 `next-server` 结合使用。
- 举例：导入文件地址及文件名为 `C:\temp\nos.img`。
  ```text
  Switch(dhcp-1-config)#bootfile c:\temp\nos.img
  ```
- 相关命令：`next-server`

### `clear ip dhcp binding`

- 命令：`clear ip dhcp binding {<address> | all }`
- 功能：删除某指定的 IP 地址与其硬件地址的绑定记录或所有 IP 地址与相应的硬件地址的绑定记录。
- 参数：
  + `<address>` 为指定的有绑定记录的 IP 地址，点分十进制格式；
  + `all` 通指为有绑定记录的所有的 IP 地址。
- 命令模式：特权用户配置模式。
- 使用指南：
  通过 `show ip dhcp binding` 命令可以查看 IP 地址与相应的 DHCP 客户机硬件地址的绑定信息，当 DHCP 服务器得知某 DHCP 客户机因为特殊原因没有使用分配的 IP 地址但规定的租期未到，DHCP 服务器不会自动解除该绑定信息，此时系统管理员可以使用本命令手工删除该 IP 地址与客户机硬件地址的自动绑定；
  如果使用 `all`，将删除所有自动绑定记录，这样 DHCP 地址池中的所有地址将被重新分配。
- 举例：删除所有 IP 地址与硬件地址的绑定记录。
  ```text
  Switch#clear ip dhcp binding all
  ```
- 相关命令：`show ip dhcp binding`

### `clear ip dhcp conflict`

- 命令：`clear ip dhcp conflict {<address> | all }`
- 功能：删除在地址冲突日志中有冲突记录的地址。
- 参数：`<address>` 为某指定的有冲突记录的地址；`all` 通指为有冲突记录的所有地址。
- 命令模式：特权用户配置模式。
- 使用指南：
  通过 `show ip dhcp conflict` 命令可以查看哪些 IP 地址在使用上有冲突，使用本命令可以删除某一地址的冲突记录，如果使用 `all` 则是删除日志中所有的地址的冲突记录。
  在日志中删除冲突记录后，这些地址可被 DHCP 服务器重新使用。
- 举例：网络管理员查看冲突日志文件，发现文件中有冲突记录的 `10.1.128.160` 地址现已无人使用，将该地址的记录从地址冲突文件中删除。
  ```text
  Switch#clear ip dhcp conflict 10.1.128.160
  ```
- 相关命令：
  + `ip dhcp conflict logging`
  + `show ip dhcp conflict`

### `clear ip dhcp server statistics`

- 命令：`clear ip dhcp server statistics`
- 功能：删除 DHCP 服务器的统计记录，将 DHCP 服务器的计数器清零。
- 参数：无。
- 命令模式：特权用户配置模式。
- 使用指南：
  通过 `show ip dhcp server statistics` 命令可以查看 DHCP 服务器的计数器的统计信息，所有的统计信息都是一个累计值，使用本命令可以将计数器清零，方便统计信息的查看。
- 举例：将 DHCP 服务器的计数器清零。
  ```text
  Switch#clear ip dhcp server statistics
  ```
- 相关命令：`show ip dhcp server statistics` 

### `client-identifier`

- 命令：
  + `client-identifier <unique-identifier>`
  + `no client-identifier`
- 功能：在手工绑定地址时，指定用户的唯一标识；本命令的 no 操作为删除用户标识。
- 参数：`<unique-identifier>` 为用户的标识，格式为连字符十六进制 `(xx-xx-xx-xx-xx-xx)`。
- 命令模式：DHCP 地址池模式。
- 使用指南：
  本命令在手工绑定地址时结合命令host一起使用。
  当发出请求的客户机的标识恰好和指定的标识相吻合，DHCP 服务器就将 host 命令中定义的 IP 地址分配给客户机。
- 举例：手工绑定时，将 IP 地址 `10.1.128.160` 与用户唯一标识为 `00-10-5a-60-af-12` 的用户绑定。
  ```text
  Switch(dhcp-1-config)#client-identifier 00-10-5a-60-af-12
  Switch(dhcp-1-config)#host 10.1.128.160 24
  ```
- 相关命令：`host`

### `debug ip dhcp client`

- 命令：
  + `debug ip dhcp client {event | packet}`
  + `no debug ip dhcp server {event | packet}`
- 功能：打开 DHCP 客户端的调试信息；本命令的 no 操作为关闭 DHCP 客户端的调试信息。
- 缺省情况：缺省调试开关是关闭的。
- 命令模式：特权用户配置模式。

### `debug ip dhcp relay`

- 命令：
  + `debug ip dhcp server packet`
  + `no debug ip dhcp server packet`
- 功能：打开 DHCP 中继的调试信息；本命令的 no 操作为关闭 DHCP 中继的调试信息。
- 缺省情况：缺省调试开关是关闭的。
- 命令模式：特权用户配置模式。

### `debug ip dhcp server`

- 命令：
  + `debug ip dhcp server { events|linkage|packets }`
  + `no debug ip dhcp server { events|linkage|packets }`
- 功能：打开 DHCP 服务器的调试信息；本命令的 no 操作为关闭 DHCP 服务器的调试信息。
- 缺省情况：缺省调试开关是关闭的。
- 命令模式：特权用户配置模式。

### `default-router`

- 命令：
  + `default-router <address1>[<address2>[…<address8>]]`
  + `no default-router`
- 功能：为 DHCP 客户机配置缺省网关；本命令的 no 操作为删除缺省网关。
- 参数：`address1…address8` 为 IP 地址，均为点分十进制格式。
- 缺省情况：系统没有给 DHCP 客户机配置缺省网关。
- 命令模式：DHCP 地址池模式。
- 使用指南：缺省网关的 IP 地址应与 DHCP 客户机的 IP 地址在一个子网网段内，交换机最多可支持 8 个网关地址，最先设置的网关地址优先级最高，因此 `address1` 优先级最高，依次 `address2`、`address3`……。
- 举例：设置 DHCP 客户机的缺省网关为 `10.1.128.2` 和 `10.1.128.100`。
  ```text
  Switch(dhcp-1-config)#default-router 10.1.128.2 10.1.128.100
  ```

### `dns-server`

- 命令：
  + `dns-server <address1>[<address2>[…<address8>]]`
  + `no dns-server`
- 功能：为 DHCP 客户机配置 DNS 服务器；本命令的 no 操作为删除 DNS 服务器。
- 参数：`address1…address8` 为 IP 地址，均为点分十进制格式。
- 缺省情况：系统没有给 DHCP 客户机配置 DNS 服务器。
- 命令模式：DHCP 地址池模式。
- 使用指南：系统最多可支持配置 8 个 DNS 服务器地址，最先设置的 DNS 服务器的地址优先级最高，因此 `address1` 优先级最高，依次 `address2`、`address3`……。
- 举例：设置 DHCP 客户机的 DNS 服务器的地址为 `10.1.128.3`。
  ```text
  Switch(dhcp-1-config)#dns-server 10.1.128.3
  ```

### `domain-name`

- 命令：
  + `domain-name <domain>`
  + `no domain-name`
- 功能：为 DHCP 客户机配置域名；本命令的 no 操作为删除域名。
- 参数：`<domain>` 为域的名称，最长不超过 255 个字符。
- 命令模式：DHCP 地址池模式。
- 缺省情况：无。
- 使用指南：为客户机指定域名。
- 举例：指定 DHCP 客户机的域名为 `digitalchina.com.cn`。
  ```text
  Switch(dhcp-1-config)#domain-name digitalchina.com.cn
  ```

### `hardware-address`

- 命令：
  + `hardware-address <hardware-address> [{Ethernet | IEEE802|<type-number>}]`
  + `no hardware-address`
- 功能：在手工分配地址时，指定用户的硬件地址；本命令的 no 操作为删除该项配置。
- 参数：`<hardware-address>` 为硬件地址，十六进值表示的数值；`Ethernet | IEEE802` 为以太网协议类型，`<type-number>` 为 RFC 定义的协议类型的数字表示，取值范围为 1~255，如参数 Ethernet 的数字表示为 1，IEEE802 的数字表示形式为 6。
- 缺省情况：缺省为协议类型为 Ethernet 协议。
- 命令模式：DHCP 地址池模式。
- 使用指南：
  本命令在手工绑定地址时结合命令host一起使用。
  当发出请求的客户机的硬件地址恰好和指定的硬件地址相吻合，DHCP 服务器就将 host 命令中定义的 IP 地址分配给客户机。
- 举例：手工绑定时，将 IP 地址 `10.1.128.160` 与硬件地址为 `00-00-e2-3a-26-04` 的用户绑定。
  ```text
  Switch(dhcp-1-config)#hardware-address 00-00-e2-3a-26-04
  Switch(dhcp-1-config)#host 10.1.128.160 24
  ```
- 相关命令：`host` 

### `host`

- 命令：
  + `host <address> [<mask> | <prefix-length> ]`
  + `no host`
- 功能：在手工绑定地址时，分配给指定客户机的用户的 IP 地址；本命令的 no 操作为删除 IP 地址。
- 参数：
  + `<address>` 为 IP地址，点分十进制格式；
  + `<mask>` 为掩码，点分十进制格式；
  + `<prefix-length>` 为用前缀表示法，如掩码为 `255.255.255.0` 用前缀法表示为“24”，掩码为 `255.255.255.252` 用前缀法表示为“30”。
- 命令模式：DHCP 地址池模式。
- 缺省情况：无。
- 使用指南：
  如果在配置 IP 地址时，仅配置了 IP 地址，没有配置掩码和前缀，并且在 IP 地址池中也没有任何有关掩码的信息，缺省系统会按有类地址自动分配掩码。
  本命令在手工绑定地址时结合 `hardware-address` 命令或者 `client-identifier` 命令一起使用。
  当发出请求的客户机的标识或硬件地址恰好和指定的标识或硬件地址相吻合，DHCP 服务器就将 host 命令中定义的 IP 地址分配给客户机。
- 举例：手工绑定时，将 IP 地址 `10.1.128.160` 与硬件地址为 `00-10-5a-60-af-12` 的用户绑定。
  ```text
  Switch(dhcp-1-config)#hardware-address 00-10-5a-60-af-12
  Switch(dhcp-1-config)#host 10.1.128.160 24
  ```
- 相关命令：
  + `hardware-address`
  + `client-identifier`

### 1.1.14 ip dhcp conflict logging 

命令：`ip dhcp conflict logging
     no ip dhcp conflict logging` 
- 功能：打开 DHCP 服务器检测地址冲突的日志功能；本命令的 no 操作为关闭该日志功能。
- 参数：无。
- 缺省情况：缺省情况下，记录地址冲突的日志功能是打开的。
- 命令模式：全局配置模式。
- 使用指南：当日志功能是打开的，一旦 DHCP 服务器检测到有地址冲突时，就会将该冲突
- 地址记录到日志中。对于在日志中出现的有冲突记录的地址，DHCP 服务器将不再对其进行
- 动态分配，直到把这些冲突记录删除。
- 举例：关闭 DHCP 服务器的日志功能。

  ```text
  Switch(config)#no ip dhcp conflict logging 
  ```
- 相关命令：`clear ip dhcp conflict` 

### 1.1.15 ip dhcp disable 

  S5750E交换机不支持该命令。

### 1.1.16 ip dhcp excluded-address 

- 命令：`ip dhcp excluded-address <low-address> [<high-address>] 
      no ip dhcp excluded-address <low-address> [<high-address>]` 
- 功能：排除地址池中的不用于动态分配的地址；本命令的no操作为取消该项配置。
- 参数：`<low-address>` 为起始的IP地址；`[<high-address>]`为结束的IP地址。
- 缺省情况：缺省为仅排除单个地址。
- 命令模式：全局配置模式。
- 使用指南：使用本命令可以将地址池中的一个地址或连续的几个地址排除，这些地址由系统
- 管理员留作其它用途。
- 举例：将10.1.128.1到10.1.128.10之间的地址保留，不用于动态分配。

  ```text
  Switch(config)#ip dhcp excluded-address 10.1.128.1 10.1.128.10
  ```
  
### 1.1.17 ip dhcp pool 

- 命令：`ip dhcp pool <name> 
       no ip dhcp pool <name>` 
- 功能：配置 DHCP 地址池，进入 dhcp 地址池模式；本命令的 no 操作为删除该地址池。
- 参数：`<name>` 为地址池名，最长不超过32个字符。
- 命令模式：全局配置模式。
- 使用指南：在全局模式下定义一个 DHCP 地址池，进入到 DHCP 地址池配置模式。
- 举例：定义一个地址池，取名1。

  ```text
  Switch(config)#ip dhcp pool 1 
  Switch(dhcp-1-config)# 
  ```

### 1.1.18 ip dhcp conflict ping-detection enable 

- 命令：`ip dhcp conflict ping-detection enable 
      no ip dhcp conflict ping-detection enable` 
- 功能：打开 DHCP 服务器 Ping 方式检测地址冲突的功能；本命令的 no 操作为关闭该检测功能。
- 参数：无。
- 缺省情况：缺省情况下，Ping 方式检测地址冲突的功能是关闭的。
- 命令模式：全局配置模式。
- 使用指南：打开 Ping 方式地址冲突检测功能前需打开记录地址冲突的日志功能；当关闭该
          日志功能时，Ping 方式地址冲突检测功能同时被关闭。当客户端无法接收 Ping 请求报文时
          （比如防火墙屏蔽了 Ping 请求报文），本功能根据分配 IP 对本地 ARP 进行检查：若选择的
          IP存在对应的 ARP ，则判定为地址冲突；反之，则分配该 IP 给客户端。
- 举例：打开Ping方式检测地址冲突的功能。

  ```text
  Switch(config)#ip dhcp conflict ping-detection enable
  ```
- 相关命令：`ip dhcp conflict logging, ip dhcp ping packets, ip dhcp ping timeout` 

### 1.1.19 ip dhcp ping packets 

- 命令：`ip dhcp ping packets <request-num> 
        no ip dhcp ping packets`
- 功能：设置 DHCP 服务器 Ping 方式检测地址冲突时，尝试发送 Ping 请求报文（Echo Request）
-        的最大个数，默认为2个；本命令的 no 操作为恢复默认发送 Ping 请求报文的个数。
- 参数：`<request-num>` 是Ping方式检测地址冲突时尝试发送的 Ping 请求报文个数。
- 缺省情况：缺省情况下，最多发送2个 Ping 请求报文。
- 命令模式：全局配置模式。
- 举例：设置 DHCP 服务器 Ping 方式检测地址冲突时发送 Ping 请求报文最大个数为3。

  ```text
  Switch(config)#ip dhcp ping packets 3 
  ```
- 相关命令：`ip dhcp conflict ping-detection enable, ip dhcp ping timeout` 

### 1.1.20 ip dhcp ping timeout 

- 命令：`ip dhcp ping timeout <timeout-value> 
      no ip dhcp ping timeout` 
- 功能：设置 DHCP 服务器 Ping 方式检测地址冲突时，每次发送 Ping 请求报文（Echo Request）
       后，等待回应报文（Echo Reply）的超时时长（单位为ms），默认为500ms；本命令的 no
       操作为恢复默认超时时长。
- 参数：`<timeout-value>` 是 Ping 方式检测地址冲突时每次 Ping 请求等待回应的超时时长。
- 缺省情况：缺省情况下，超时时长为500ms。
- 命令模式：全局配置模式。
- 举例：设置 DHCP 服务器 Ping 方式检测地址冲突时等待每个回应报文的超时时长为600ms。

  ```text
  Switch(config)# ip dhcp ping time out 600 
  ```
- 相关命令：`ip dhcp conflict ping-detection enable, ip dhcp ping packets` 

### 1.1.21 lease 

- 命令：`lease { [<days>] [<hours>][<minutes>] | infinite } 
        no lease` 
- 功能：配置地址池中地址的租用期限；本命令的 no 操作为恢复缺省值。
- 参数：`<days>` 为天数，取值范围为0~365；`<hours>`为小时数，取值范围为0~23；`<minutes>`
       为分数，取值范围为0~59；infinite 为永久的使用。
- 缺省情况：缺省的租期设置为1天。
- 命令模式：DHCP 地址池模式。
- 使用指南：DHCP 是动态的分配网络配置参数，并非永久分配，因此有租期的限制。租期设
          置过长，难以发挥 DHCP 灵活、动态的优势；租期设置过短，有会造成网络通信量的增加，
          加大网络开销，因此租期的设置可由网络管理员根据自身网络的特点设定。交换机缺省的租
          期设置为1天。
- 举例：DHCP 地址池1的租期设置为3天12个小时30分钟。

  ```text
  Switch(dhcp-1-config)#lease 3 12 30 
  ```
  
### 1.1.22 max-lease-time 

- 命令：`max-lease-time {[<days>] [<hours>][<minutes>] | infinite} 
      no max-lease-time` 
- 功能：配置地址池中地址的最大租用期限；本命令的no操作为恢复缺省值。
- 参数：`<days>` 为天数，取值范围为0~365；`<hours>` 为小时数，取值范围为0~23；`<minutes>`
为分数，取值范围为0~59；infinite 为永久的使用。
缺省情况：缺省的租期设置为1天。
命令模式：DHCP 地址池模式。

- 使用指南：该配置命令使用于带有 option51 选项的 DHCP 请求报文场景中，如果用户请求
          地址租期的时间超过配置的最大租用期限，则 DHCP 服务器分配该地址的租期为配置最大
          租期时间，如果用户请求地址的租期时间小于配置的最大租期时间，则 DHCP 服务器分配
          该地址的租期为用户请求报文携带的请求租用期限。最大租用期限的设置可由网络管理员根
          据自身网络的特点进行设定。交换机缺省的最大租用期限设置为1天。
- 举例：DHCP地址池1的最大租期设置为3天12个小时30分钟。

  ```text
  Switch(dhcp-1-config)#max-lease-time 3 12 30
  ```

### 1.1.23 netbios-name-server 

- 命令：`netbios-name-server <address1>[<address2>[…<address8>]] 
        no netbios-name-server`
- 功能：配置 Wins 服务器的地址；本命令的 no 操作为删除 Wins 服务器。
- 参数：address1…address8 为IP地址，均为点分十进制格式。
- 缺省情况：系统缺省没有配置 Wins 服务器。
- 命令模式：DHCP 地址池模式。
- 使用指南：为客户机指定 Wins 服务器，最多可设置8个 Wins 服务器，最先设置的 Wins 服
          务器的地址优先级最高，因此 address1 优先级最高，依次address2、address3……。
- 举例：配置地址池1的Wins服务器的地址为192.168.1.1。

  ```text
  Switch(dhcp-1-config)#netbios-name-server 192.168.1.1
  ```

### 1.1.24 netbios-node-type 

- 命令：`netbios-node-type {b-node|h-node|m-node|p-node|<type-number>} 
        no netbios-node-type` 
- 功能：配置 DHCP 客户机的节点类型；本命令的 no 操作为取消该项配置。
- 参数：b-node 为广播型；h-node 为先点对点后广播的混合型；m-node 为先广播后点对点的
- 混合型；p-node 为点对点型；`<type-number>` 为节点类型的十六进值表示法，取值范围为
  0~255。
- 缺省情况：没有为客户机指定节点类型。
- 命令模式：DHCP 地址池模式。
- 使用指南：如果要为客户机指定节点类型，建议把客户机的节点类型配置为先点对点后广播
          的混合型节点类型。
- 举例：地址池1的客户机的节点类型为广播型。

  ```text
  Switch(dhcp-1-config)#netbios-node-type b-node
  ```

### 1.1.25 network-address 

- 命令：`network-address <network-number> [<mask> | <prefix-length>] 
        no network-address` 
- 功能：配置地址池可分配的地址范围；本命令的 no 操作为取消该项配置。
- 参数：`<network-number>` 为网络号码；`<mask>` 为掩码，点分十进制格式；`<prefix-length>`
       为用前缀表示法，如掩码为255.255.255.0用前缀法表示为“24”，掩码为255.255.255.252
       用前缀法表示为“30”。注意：在使用 DHCP-SERVER 的时候，配置地址掩码的时候，应该
       使地址池中掩码长于或等于交换机上对应网段的三层接口 IP 地址的掩码，DHCP 地址池配
       置时无法配置掩码为31位和32位的地址池。
- 缺省情况：如果不带掩码，缺省掩码为按照有类地址自动分配。
- 命令模式：DHCP 地址池模式。
- 使用指南：DHCP 服务器用于动态分配IP地址时使用本命令配置可分配的IP地址范围，一
          个地址池只能对应一个网段。本命令与手工绑定地址的命令即 hardware-address 命令、host
          命令互斥。
- 举例：地址池1的可分配的地址为10.1.128.0/24。

  ```text
  Switch(dhcp-1-config)#network-address 10.1.128.0 24
  ```
相关命令：`ip dhcp excluded-address` 

1.1.26 next-server 

命令：`next-server <address1>[<address2>[…<address8>]
      no next-server` 
功能：配置客户机导入文件存放的服务器地址；本命令的 no 操作为取消该项配置。
参数：address1…address8 为IP地址，均为点分十进制格式。
命令模式：DHCP 地址池模式。
缺省情况：无。
使用指南：为客户机指定导入文件存放的服务器地址。一般用在无盘工作站，系统启动时需
要从服务器上下载配置文件，和 bootfile 结合使用。
举例：文件存放的服务器地址为10.1.128.4。

  ```text
  Switch(dhcp-config)#next-server 10.1.128.4 
  ```
相关命令：`bootfile` 

### 1.1.27 option 

- 命令：`option <code> {ascii <string> | hex <hex> | ipaddress <ipaddress>} 
      no option <code>` 
- 功能：配置 option 所指定代码的网络参数的值；本命令的 no 操作为取消对该 option 的配置。
- 参数：`<code>` 为网络参数的代码值；`<string>` 为 ASC Ⅱ型字符串，最长不超过255个字符；
       `<hex>` 为十六进值表示的数值，最长不超过510，且长度必须为偶数；`<ipaddress>` 为IP地址，
       点分十进制格式，最长可以设置63个IP地址。
- 命令模式：DHCP 地址池模式。
- 缺省情况：无。
- 使用指南：系统不仅提供多项在网络配置中常用的命令，还提供了配置网络参数的通用命令，
          满足用户的多方面的配置需求。Option 的代码定义在 RFC2132 中有详细介绍。
- 举例：配置 WWW 服务器的地址为10.1.128.240。

  ```text
  Switch(dhcp-1-config)#option 72 ip 10.1.128.240
  ```

### 1.1.28 service dhcp 

- 命令：`service dhcp 
     no service dhcp` 
- 功能：启动 DHCP 服务器功能；本命令的 no 操作为关闭 DHCP 服务。
- 参数：无。
- 缺省情况：DHCP 服务缺省是关闭的。
- 命令模式：全局配置模式。
- 使用指南：DHCP 服务包括 DHCP 服务器功能和DHCP中继的功能。当打开 DHCP 服务时，
          DHCP 服务器功能和 DHCP 中继功能都被打开。只有打开 DHCP 服务器功能，交换机才能
          给 DHCP 客户机分配IP地址及开启 DHCP 的 RELAY 功能。
- 举例：打开DHCP服务器。

  ```text
  Switch(config)#service dhcp 
  ```

### 1.1.29 show ip dhcp binding 

- 命令：`show ip dhcp binding [ [<ip-addr>] [type {all | manual | dynamic}] [count]` 
- 功能：显示IP地址与MAC地址的绑定情况。
- 参数：`<ip-addr>` 为某指定的IP地址，点分十进制格式；all 表示所有的绑定类型（手工绑定
       与动态分配）；manual 表示手工绑定类型；dynamic 表示动态分配类型；count 表示显示 DHCP
       地址绑定表项数量信息。
- 命令模式：特权和配置模式。
- 举例:

  ```text
  Switch#sh ip dhcp binding 
  IP address           Hardware address         Lease expiration       Type 
  10.1.1.233            00-00-E2-3A-26-04                 Infinite             Manual 
  10.1.1.254            00-00-E2-3A-5C-D3                    60              Automatic 
  
  |     显示信息     |                解释                |
  | :--------------: | :--------------------------------: |
  |    IP address    |     分配给DHCP客户机的IP地址；     |
  | Hardware address |       DHCP客户机的硬件地址；       |
  | Lease expiration | DHCP客户机拥有该IP地址的有效时间； |
  |       Type       |  类型，指手工绑定还是动态分配的。  |
  ```

### 1.1.30 show ip dhcp conflict 

- 命令：`show ip dhcp conflict` 
- 功能：显示有冲突记录的地址的日志信息。
- 命令模式：特权和配置模式。
- 举例：

  ```text
  Switch#sh ip dhcp conflict 
  IP Address     Detection method    Detection Time 
  10.1.1.1           Ping           FRI JAN 02 00:07:01 2002
  |     显示信息     |        解释        |
  | :--------------: | :----------------: |
  |    IP Address    |  有冲突的IP地址。  |
  | Detection method | 检测到冲突的方式。 |
  |  Detection Time  | 检测到冲突的时间。 |
  ```

### 1.1.31 show ip dhcp relay information option 

- 命令：`show ip dhcp relay information option` 
- 功能：显示 DHCP 中继 option 82 选项相关配置信息。
- 命令模式：特权和配置模式。
- 举例:

  ```text
  Switch#show ip dhcp relay information option 
  ip dhcp server relay information option(i.e. option 82) is enabled 
  ip dhcp relay information option(i.e. option 82) is enabled 
  ```

### 1.1.32 show ip dhcp server statistics 

- 命令：`show ip dhcp server statistics` 
- 功能：显示DHCP服务器的对各种DHCP数据包的统计信息。
- 命令模式：特权和配置模式。
- 举例：

  ```text
  Switch#show ip dhcp server statistics 
  Address pools       3
  Database agents     0
  Automatic bindings   2
  Manual bindings       0
  Conflict bindings      0
  Expiried bindings       0
  Malformed message      0
  
  Message         Recieved
  BOOTREQUEST       3814
  DHCPDISCOVER      1899 
  DHCPREQUEST        6 
  DHCPDECLINE        0 
  DHCPRELEASE        1 
  DHCPINFORM         1
  
  Message           Send
  BOOTREPLY         1911 
  DHCPOFFER          6 
  DHCPACK            6 
  DHCPNAK            0 
  DHCPRELAY         1907 
  DHCPFORWARD        0
  
  Switch#
  | 显示信息           | 解释                      |
  | ------------------ | ------------------------- |
  | Address pools      | 配置的DHCP地址池个数；    |
  | Database agents    | 代理数据库的个数；        |
  | Automatic bindings | 自动分配地址的个数；      |
  | Manual bindings    | 手工绑定地址的个数；      |
  | Conflict bindings  | 有地址冲突的个数；        |
  | Expiried bindings  | 绑定超期的个数；          |
  | Malformed message  | 错误信息的个数；          |
  | Message Recieved   | 接收DHCP数据包的统计      |
  | BOOTREQUEST        | 接收的数据包总数；        |
  | DHCPDISCOVER       | 其中DHCPDISCOVER包个数；  |
  | DHCPREQUEST        | 其中DHCPREQUEST包个数；   |
  | DHCPDECLINE        | 其中DHCPDECLINE包个数；   |
  | DHCPRELEASE        | 其中DHCPRELEASE包个数；   |
  | DHCPINFORM         | 其中DHCPINFORM包个数；    |
  | Message Send       | 发送DHCP数据包的统计      |
  | BOOTREPLY          | 发送的数据包的总数；      |
  | DHCPOFFER          | 其中DHCPOFFER包的个数；   |
  | DHCPACK            | 其中DHCPACK包的个数；     |
  | DHCPNAK            | 其中DHCPNAK包的个数；     |
  | DHCPRELAY          | 其中DHCPRELAY包的个数；   |
  | DHCPFORWARD        | 其中DHCPFORWARD包的个数。 |
  ```
  
## 1.2 DHCP中继配置命令

### 1.2.1 ip dhcp broadcast suppress

- 命令：`ip dhcp broadcast suppress no ip dhcp broadcast suppress`
- 功能：开启 DHCP 广播报文抑制功能；no 命令为关闭 DHCP 广播报文抑制功能。
- 参数：无。
- 缺省情况：默认不启动 DHCP 广播报文抑制功能。
- 命令模式：全局配置模式
- 使用指南：抑制 DHCP 广播报文的转发，以及 DHCP 广播报文丢弃和复制至CPU。
- 举例： 在交换机上开启 DHCP 广播报文抑制功能。

  ```text
  Switch(config)#ip dhcp broadcast suppress
  ```
  
### 1.2.2 `ip dhcp relay share-vlan <vlanid> sub-vlan <vlanlist>`

- 命令：`ip dhcp relay share-vlan <vlanid> sub-vlan <vlanlist> no ip dhcp relay share-vlan`
- 功能：指定一个 share-vlan 的 sub-vlan；本命令的 no 操作为取消 share-vlan 的 sub-vlan。
- 参数：`<vlanid>` 为 share-vlan 的 vlan 号， `<vlanlist>` 为 sub-vlan 的列表。
- 缺省情况：无。 
- 命令模式：全局配置模式。
- 使用指南：share-vlan 可以有许多的 sub-vlan，但一个 sub-vlan 只能对应一个 share-vlan。
         当DHCP Relay 二层设备收到 DHCP Request 时，首先判断收到的包中 vlan 是否有三层接口，如果有
         就用此三层接口进行 DHCP Relay。如果收到包中的 vlan 没有三层接口，但此 vlan 是某个 share-vlan
         的 sub-vlan，则用 share-vlan 的三层接口进行 DHCP Relay。
         
### 1.2.3 ip forward-protocol udp bootps

- 命令：`ip forward-protocol udp bootps no ip forward-protocol udp bootps`
- 功能：配置 DHCP 中继转发指定端口的 UDP 广播报文；本命令的 no 操作为取消该项服务。
- 参数：bootps 标识转发UDP端口为67 DHCP 广播报文。
- 缺省情况：DHCP 中继缺省不转发 DHCP 广播报文。
- 命令模式：全局配置模式。
- 使用指南：该命令的转发目的地址在随后的 ip helper-address 命令里设定。
- 举例：转发 DHCP 包，且目的服务器地址为 192.168.1.5。

  ```text
  Switch(config)#ip forward-protocol udp bootps 
  Switch(config)# interface vlan 1
  Switch(Config-if-Vlan1)#ip helper-address 192.168.1.5
  ```
  
### 1.2.4 ip helper-address

- 命令：`ip helper-address <ipaddress> no ip helper-address <ipaddress>` 
- 功能：指定 DHCP 中继转发 UDP 报文的目标地址；本命令的 no 操作为取消该项设置。
- 参数：`<ipaddress>` 为 DHCP 中继转发 UDP 报文的目标 IP 地址。
- 缺省情况：无。
- 命令模式：接口配置模式。
- 使用指南：DHCP 中继转发的服务器地址是与转发 UDP 的端口相对应的，即 DHCP 中继只转发相应 UDP 协
          议的报文给相应的服务器，并不是把所有 UDP 报文转发给所有的服务器。当使用 ip forward-protocol 
          udp `<port>` 命令后，再配置本命令时，本命令所配置的转发地址接收到的是端口号为` <port> `的 UDP 报文。

### 1.2.5 show ip forward-protocol

- 命令：`show ip forward-protocol`
- 功能：显示已配置的支持广播报文转发的协议端口号，主要指 DHCP 报文转发的端口号。
- 命令模式：特权和配置模式。
- 举例： 

  ```text
  Switch#show ip forward-protocol Forward protocol(UDP port): 67(active)
  ```
  
### 1.2.6 show ip helper-address

- 命令：`show ip helper-address`
- 功能：显示可转发广播报文的协议端口号、支持转发功能的接口以及转发的目的IP的配置关系
- 命令模式：特权和配置模式。
- 举例：

  ```text
  Switch#show ip helper-address 
  Forward protocol       Interface       Forward server 
  67(active)               Vlan1           192.168.1.1
  ``` 
  
# 第2章 DHCPv6配置命令

### 2.1 clear ipv6 dhcp binding

- 命令：`clear ipv6 dhcp binding [<ipv6-address>] [pd <ipv6-prefix|prefix-length>]` 
- 功能：删除某指定 DHCPv6 分配地址或前缀的绑定记录或所有 IPv6 地址和前缀的绑定记录。
- 参数：`<ipv6-address>` 为指定的有绑定记录的IPv6地址；`<ipv6-prefix|prefix-length>` 为指定的有绑定记录的 IPv6 前缀；没有指定参数时认为清除所有 IPv6 地址和前缀的绑定记录。
- 命令模式：特权用户配置模式。
- 使用指南：通过 show ipv6 dhcp binding 命令可以查看 IPv6 地址和前缀与相应的 DHCPv6 绑定信息，当 DHCPv6 服务器得知某 DHCPv6 客户机因为特殊原因没有使用分配的 IPv6 地址或前缀但规定的租期未到，DHCPv6 服务器不会自动解除该绑定信息，此时系统管理员可以使用本命令手工删除该 IP 地址或前缀与客户机硬件地址的自动绑定；如果没有任何参数，本命令将删除所有自动绑定记录，这样 HCPv6 地址池中的所有地址和前缀将被重新分配。
- 举例：删除所有 IPv6 地址和前缀的绑定记录。

  ```text
  Switch#clear ipv6 dhcp binding
  ```
 
- 相关命令：`show ipv6 dhcp binding`

### 2.2 clear ipv6 dhcp conflict

- 命令：`clear ipv6 dhcp conflict [<address>]`
- 功能：删除在地址冲突日志中有冲突记录的地址
- 参数：`<address>` 为某指定的有冲突记录的地址；不指定地址则清除所有冲突记录。
- 命令模式：特权用户配置模式。
- 使用指南：通过 show ipv6 dhcp conflict 命令可以查看哪些IP地址在使用上有冲突，使用本命令可以删除某一地址的冲突记录，如果不指定具体地址则是删除日志中所有地址的冲突记录。在日志中删除冲突记录后，这些地址可被 DHCPv6 服务器重新使用。
- 举例：网络管理员查看冲突日志，发现有冲突记录的2001::1地址现已无人使用，将该地址的记录从地址冲突文件中删除。

  ```text
  Switch#clear ipv6 dhcp conflict 2001::1
  ```
  
### 2.3 clear ipv6 dhcp statistics

- 命令：`clear ipv6 dhcp statistics` 
- 功能：删除 DHCPv6 报文统计记录，将 DHCPv6 报文统计计数器清零。
- 参数：无。
- 命令模式：特权用户配置模式。
- 使用指南：通过 show ipv6 dhcp statistics 命令可以查看 DHCPv6 报文计数器的统计信息，所有的统计信息都是一个累计值，使用本命令可以将计数器清零，方便调试查看。
- 举例：将 DHCPv6 报文计数器清零。

  ```text
  Switch#clear ipv6 dhcp statistics 
  ```
- 相关命令：show ipv6 dhcp statistics


