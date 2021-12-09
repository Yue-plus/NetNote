# E-Mail（电子邮件）

## 链接

- [Virtual user mail system with Postfix, Dovecot and Roundcube (简体中文) - ArchWiki](https://wiki.archlinux.org/title/Virtual_user_mail_system_with_Postfix,_Dovecot_and_Roundcube_(简体中文))

## [Postfix](./Postfix.md)

## [Dovecot](./Dovecot.md)

## 新建邮箱用户且不允许本地登入

新建不可登入用户：

```shell
useradd -s /sbin/nologin stu1
useradd -s /sbin/nologin stu2
useradd -s /sbin/nologin stu3
```

修改用户密码：

```bash {1,7,13}
[root@host-192-168-30-101 ~]# passwd stu1
Changing password for user stu1.
New password: 
BAD PASSWORD: The password is shorter than 8 characters
Retype new password: 
passwd: all authentication tokens updated successfully.
[root@host-192-168-30-101 ~]# passwd stu2
Changing password for user stu2.
New password: 
BAD PASSWORD: The password is shorter than 8 characters
Retype new password: 
passwd: all authentication tokens updated successfully.
[root@host-192-168-30-101 ~]# passwd stu3
Changing password for user stu3.
New password: 
BAD PASSWORD: The password is shorter than 8 characters
Retype new password: 
passwd: all authentication tokens updated successfully.
```