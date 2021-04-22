# Power Shell

::: tip
PowerShell 是一种跨平台的任务自动化解决方案，由命令行 shell、脚本语言和配置管理框架组成。
PowerShell 在 Windows、Linux 和 macOS 上运行。

[PowerShell 文档 - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/)
:::

## 示例

### 更改本机 IP 地址

查询本机所有 IPv4 地址：

```ps1
Get-NetIPAddress -AddressFamily IPv4
```

返回结果示例：

```ps1 {2}
IPAddress         : 10.20.70.80
InterfaceIndex    : 16
InterfaceAlias    : 以太网
AddressFamily     : IPv4
Type              : Unicast
PrefixLength      : 24
PrefixOrigin      : Manual
SuffixOrigin      : Manual
AddressState      : Preferred
ValidLifetime     : Infinite ([TimeSpan]::MaxValue)
PreferredLifetime : Infinite ([TimeSpan]::MaxValue)
SkipAsSource      : False
PolicyStore       : ActiveStore
```

此处记住 `InterfaceIndex`，先使用如下命令删除对应的 IPv4 地址：

```ps1
Remove-NetIPAddress -InterfaceIndex 16 -AddressFamily IPv4
```

> 可以关闭确认提示，使用参数： `-Confirm:$false`

然后添加一个新的地址：

```ps1
New-NetIPAddress -InterfaceIndex 16 -AddressFamily IPv4 -PrefixLength 24 -IPAddress 192.168.100.66
```

将命令保存为 `.ps1` 文件，并以**管理员身份运行** 可快速切换本机 IP。

> 参考：
> - [Get-NetIPAddress (NetTCPIP) | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/nettcpip/get-netipaddress?view=windowsserver2019-ps)
> - [Remove-NetIPAddress (NetTCPIP) | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/nettcpip/remove-netipaddress?view=windowsserver2019-ps)
> - [New-NetIPAddress (NetTCPIP) | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/nettcpip/new-netipaddress?view=windowsserver2019-ps)
