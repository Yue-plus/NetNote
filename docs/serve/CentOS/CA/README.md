# CA（证书颁发机构）

## 链接

- [CA证书_百度百科](https://baike.baidu.com/item/CA证书/10028741?fr=aladdin)
- [数字证书、CA、CA证书，傻傻分不清楚？这一篇看懂！ - 知乎](https://zhuanlan.zhihu.com/p/26859843)
- [CentOS 7 搭建CA认证中心实现https取证 - damowang~ - 博客园](https://www.cnblogs.com/bigdevilking/p/9434444.html)

## 安装 openssl

```bash
yum install -y openssl
```

## 使用 `/etc/pki/tls/misc/CA` 来创建 CA 认证中心

```bash {1,2}
[root@host-192-168-30-100 ~]# cd /etc/pki/tls/misc/
[root@host-192-168-30-100 misc]# ./CA -newcert
Generating a 2048 bit RSA private key
................+++
.......................................................................................+++
writing new private key to 'newkey.pem'
Enter PEM pass phrase:                                                        # 2021Netw@rk
Verifying - Enter PEM pass phrase:                                            # 2021Netw@rk
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [XX]:CN                                          # 国家/地区
State or Province Name (full name) []:GD                                      # 省/市/自治区
Locality Name (eg, city) [Default City]:GZ                                    # 城市/地点
Organization Name (eg, company) [Default Company Ltd]:xxzx                    # 组织
Organizational Unit Name (eg, section) []:DCN                                 # 组织单位
Common Name (eg, your name or your server's hostname) []:xxzx.skillschina.com # 通用名称
Email Address []:                                                             # 电子邮件
Certificate is in newcert.pem, private key is in newkey.pem
```

创建完成后将证书复制到指定位置：

```shell
cp /etc/pki/tls/misc/newcert.pem /etc/pki/CA/cacert.pem
```
