import{_ as p,r as l,o as c,c as d,a as n,d as e,w as o,b as a,e as s}from"./app-ab31641a.js";const r={},u=s(`<h1 id="mariadb-mysql-数据库" tabindex="-1"><a class="header-anchor" href="#mariadb-mysql-数据库" aria-hidden="true">#</a> MariaDB（MySQL 数据库）</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>安装 MariaDB</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> mariadb-server.x86_64 <span class="token comment"># 安装</span>
<span class="token function">sudo</span> systemctl start mariadb.service <span class="token comment"># 启动</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> mariadb.service <span class="token comment"># 开机自启</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),a(" 配置")],-1),k=n("p",null,"安装 MariaDB 服务器，启动并启用 MariaDB，将登录的 root 密码设置为 redhat，并仅帧听在本机。",-1),m=s(`<li><p>进行基础设置（设置 root 密码）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

In order to log into MariaDB to secure it, we&#39;ll need the current
password for the root user.  If you&#39;ve just installed MariaDB, and
you haven&#39;t set the root password yet, the password will be blank,
so you should just press enter here.

<span class="token title important"><span class="token punctuation">#</span> 输入原密码（直接回车）</span>
Enter current password for root (enter for none): 
OK, successfully used password, moving on...

Setting the root password ensures that nobody can log into the MariaDB
root user without the proper authorisation.

<span class="token title important"><span class="token punctuation">#</span> 是否设置 root 密码？[Yes / No]</span>
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

<span class="token title important"><span class="token punctuation">#</span> 移除匿名用户？[Yes / No]</span>
Remove anonymous users? [Y/n] y
 ... Success!

Normally, root should only be allowed to connect from &#39;localhost&#39;.  This
ensures that someone cannot guess at the root password from the network.

<span class="token title important"><span class="token punctuation">#</span> 拒绝 root 用户远程登陆？[Yes / No]</span>
Disallow root login remotely? [Y/n] y
 ... Success!

By default, MariaDB comes with a database named &#39;test&#39; that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

<span class="token title important"><span class="token punctuation">#</span> 删除 \`test\` 数据库？[Yes / No]</span>
Remove test database and access to it? [Y/n] y
 <span class="token list punctuation">-</span> Dropping test database...
 ... Success!
 <span class="token list punctuation">-</span> Removing privileges on test database...
 ... Success!

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

<span class="token title important"><span class="token punctuation">#</span> 重新加载权限表？[Yes / No]</span>
Reload privilege tables now? [Y/n] y
 ... Success!

Cleaning up...

All done!  If you&#39;ve completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),b=s(`<p>设置服务器不侦听 TCP/IP 连接（设置仅侦听在本地）</p><p>建议先备份一下配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/my.cnf.d/
<span class="token function">cp</span> server.cnf server.cnf.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑 <code>/etc/my.cnf.d/server.cnf</code> 文件，在 <code>[mysqld]</code> （第 12 行）下添加 <code>skip-networking=0</code>：</p>`,4),h={href:"https://mariadb.com/kb/en/server-system-variables/#skip_networking",target:"_blank",rel:"noopener noreferrer"},f=s(`<div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> 1 #
</span><span class="token prefix unchanged"> </span><span class="token line"> 2 # These groups are read by MariaDB server.
</span><span class="token prefix unchanged"> </span><span class="token line"> 3 # Use it for options that only the server (but not clients) should see
</span><span class="token prefix unchanged"> </span><span class="token line"> 4 #
</span><span class="token prefix unchanged"> </span><span class="token line"> 5 # See the examples of server my.cnf files in /usr/share/mysql/
</span><span class="token prefix unchanged"> </span><span class="token line"> 6 #
</span><span class="token prefix unchanged"> </span><span class="token line"> 7 
</span><span class="token prefix unchanged"> </span><span class="token line"> 8 # this is read by the standalone daemon and embedded servers
</span><span class="token prefix unchanged"> </span><span class="token line"> 9 [server]
</span><span class="token prefix unchanged"> </span><span class="token line">10 
</span><span class="token prefix unchanged"> </span><span class="token line">11 # this is only for the mysqld standalone daemon
</span><span class="token prefix unchanged"> </span><span class="token line">12 [mysqld]
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">13 skip-networking=0
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">14
</span><span class="token prefix unchanged"> </span><span class="token line">15 # this is only for embedded server
</span><span class="token prefix unchanged"> </span><span class="token line">16 [embedded]
</span><span class="token prefix unchanged"> </span><span class="token line">17 
</span><span class="token prefix unchanged"> </span><span class="token line">18 # This group is only read by MariaDB-5.5 servers.
</span><span class="token prefix unchanged"> </span><span class="token line">19 # If you use the same .cnf file for MariaDB of different versions,
</span><span class="token prefix unchanged"> </span><span class="token line">20 # use this group for options that older servers don&#39;t understand
</span><span class="token prefix unchanged"> </span><span class="token line">21 [mysqld-5.5]
</span><span class="token prefix unchanged"> </span><span class="token line">22 
</span><span class="token prefix unchanged"> </span><span class="token line">23 # These two groups are only read by MariaDB servers, not by MySQL.
</span><span class="token prefix unchanged"> </span><span class="token line">24 # If you use the same .cnf file for MySQL and MariaDB,
</span><span class="token prefix unchanged"> </span><span class="token line">25 # you can put MariaDB-only options here
</span><span class="token prefix unchanged"> </span><span class="token line">26 [mariadb]
</span><span class="token prefix unchanged"> </span><span class="token line">27 
</span><span class="token prefix unchanged"> </span><span class="token line">28 [mariadb-5.5]
</span><span class="token prefix unchanged"> </span><span class="token line">29
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启 MariaDB 使修改的配置文件生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart mariadb.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),g=s(`<li><p>配置MariaDB服务器，支持汉字数据处理。</p><p>建议先备份一下配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/my.cnf.d/
<span class="token function">sudo</span> <span class="token function">cp</span> client.cnf client.cnf.bak
<span class="token function">sudo</span> <span class="token function">cp</span> mysql-clients.cnf mysql-clients.cnf.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>编辑 <code>/etc/my.cnf.d/server.cnf</code> 文件，在 <code>[mysqld]</code> （第 12 行）下添加：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> 1 #
</span><span class="token prefix unchanged"> </span><span class="token line"> 2 # These groups are read by MariaDB server.
</span><span class="token prefix unchanged"> </span><span class="token line"> 3 # Use it for options that only the server (but not clients) should see
</span><span class="token prefix unchanged"> </span><span class="token line"> 4 #
</span><span class="token prefix unchanged"> </span><span class="token line"> 5 # See the examples of server my.cnf files in /usr/share/mysql/
</span><span class="token prefix unchanged"> </span><span class="token line"> 6 #
</span><span class="token prefix unchanged"> </span><span class="token line"> 7 
</span><span class="token prefix unchanged"> </span><span class="token line"> 8 # this is read by the standalone daemon and embedded servers
</span><span class="token prefix unchanged"> </span><span class="token line"> 9 [server]
</span><span class="token prefix unchanged"> </span><span class="token line">10 
</span><span class="token prefix unchanged"> </span><span class="token line">11 # this is only for the mysqld standalone daemon
</span><span class="token prefix unchanged"> </span><span class="token line">12 [mysqld]
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">13 init_connect=&#39;SET collation_connection = utf8_unicode_ci&#39;
</span><span class="token prefix inserted">+</span><span class="token line">14 init_connect=&#39;SET NAMES utf8&#39;
</span><span class="token prefix inserted">+</span><span class="token line">15 character-set-server=utf8
</span><span class="token prefix inserted">+</span><span class="token line">16 collation-server=utf8_unicode_ci
</span><span class="token prefix inserted">+</span><span class="token line">17 skip-character-set-client-handshake
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">18 skip-networking=0
</span><span class="token prefix unchanged"> </span><span class="token line">19 
</span><span class="token prefix unchanged"> </span><span class="token line">20 # this is only for embedded server
</span><span class="token prefix unchanged"> </span><span class="token line">21 [embedded]
</span><span class="token prefix unchanged"> </span><span class="token line">22 
</span><span class="token prefix unchanged"> </span><span class="token line">23 # This group is only read by MariaDB-5.5 servers.
</span><span class="token prefix unchanged"> </span><span class="token line">24 # If you use the same .cnf file for MariaDB of different versions,
</span><span class="token prefix unchanged"> </span><span class="token line">25 # use this group for options that older servers don&#39;t understand
</span><span class="token prefix unchanged"> </span><span class="token line">26 [mysqld-5.5]
</span><span class="token prefix unchanged"> </span><span class="token line">27
</span><span class="token prefix unchanged"> </span><span class="token line">28 # These two groups are only read by MariaDB servers, not by MySQL.
</span><span class="token prefix unchanged"> </span><span class="token line">29 # If you use the same .cnf file for MySQL and MariaDB,
</span><span class="token prefix unchanged"> </span><span class="token line">30 # you can put MariaDB-only options here
</span><span class="token prefix unchanged"> </span><span class="token line">31 [mariadb]
</span><span class="token prefix unchanged"> </span><span class="token line">32
</span><span class="token prefix unchanged"> </span><span class="token line">33 [mariadb-5.5]
</span><span class="token prefix unchanged"> </span><span class="token line">34
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编辑 <code>/etc/my.cnf.d/client.cnf</code> 文件，在 <code>[client]</code> （第 7 行）下添加：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> 1 #
</span><span class="token prefix unchanged"> </span><span class="token line"> 2 # These two groups are read by the client library
</span><span class="token prefix unchanged"> </span><span class="token line"> 3 # Use it for options that affect all clients, but not the server
</span><span class="token prefix unchanged"> </span><span class="token line"> 4 #
</span><span class="token prefix unchanged"> </span><span class="token line"> 5 
</span><span class="token prefix unchanged"> </span><span class="token line"> 6 
</span><span class="token prefix unchanged"> </span><span class="token line"> 7 [client]
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> 8 default-character-set=utf8
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> 9 
</span><span class="token prefix unchanged"> </span><span class="token line">10 # This group is not read by mysql client library,
</span><span class="token prefix unchanged"> </span><span class="token line">11 # If you use the same .cnf file for MySQL and MariaDB,
</span><span class="token prefix unchanged"> </span><span class="token line">12 # use it for MariaDB-only client options
</span><span class="token prefix unchanged"> </span><span class="token line">13 [client-mariadb]
</span><span class="token prefix unchanged"> </span><span class="token line">14 
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编辑 <code>/etc/my.cnf.d/mysql-clients.cnf</code> 文件，在 <code>[mysql]</code> （第 6 行）下添加：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> 1 #
</span><span class="token prefix unchanged"> </span><span class="token line"> 2 # These groups are read by MariaDB command-line tools
</span><span class="token prefix unchanged"> </span><span class="token line"> 3 # Use it for options that affect only one utility
</span><span class="token prefix unchanged"> </span><span class="token line"> 4 #
</span><span class="token prefix unchanged"> </span><span class="token line"> 5 
</span><span class="token prefix unchanged"> </span><span class="token line"> 6 [mysql]
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> 7 default-character-set=utf8
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> 8 
</span><span class="token prefix unchanged"> </span><span class="token line"> 9 [mysql_upgrade]
</span><span class="token prefix unchanged"> </span><span class="token line">10 
</span><span class="token prefix unchanged"> </span><span class="token line">11 [mysqladmin]
</span><span class="token prefix unchanged"> </span><span class="token line">12 
</span><span class="token prefix unchanged"> </span><span class="token line">13 [mysqlbinlog]
</span><span class="token prefix unchanged"> </span><span class="token line">14 
</span><span class="token prefix unchanged"> </span><span class="token line">15 [mysqlcheck]
</span><span class="token prefix unchanged"> </span><span class="token line">16 
</span><span class="token prefix unchanged"> </span><span class="token line">17 [mysqldump]
</span><span class="token prefix unchanged"> </span><span class="token line">18 
</span><span class="token prefix unchanged"> </span><span class="token line">19 [mysqlimport]
</span><span class="token prefix unchanged"> </span><span class="token line">20 
</span><span class="token prefix unchanged"> </span><span class="token line">21 [mysqlshow]
</span><span class="token prefix unchanged"> </span><span class="token line">22 
</span><span class="token prefix unchanged"> </span><span class="token line">23 [mysqlslap]
</span><span class="token prefix unchanged"> </span><span class="token line">24 
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启 MariaDB 使修改的配置文件生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart mariadb.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li>`,1),y=s(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>打开 MariaDB：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后分别输入“系统管理员密码”与“MariaDB root 账号的密码（<code>redhat</code>）”：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>sudo<span class="token punctuation">]</span> yueplus 的密码：
Enter password: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当显示以下内容时，表示成功打开 MairaDB：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Welcome to the MariaDB monitor.  Commands end with <span class="token punctuation">;</span> or <span class="token punctuation">\\</span>g.
Your MariaDB connection <span class="token function">id</span> is <span class="token number">3</span>
Server version: <span class="token number">5.5</span>.65-MariaDB MariaDB Server

Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2000</span>, <span class="token number">2018</span>, Oracle, MariaDB Corporation Ab and others.

Type <span class="token string">&#39;help;&#39;</span> or <span class="token string">&#39;\\h&#39;</span> <span class="token keyword">for</span> help. Type <span class="token string">&#39;\\c&#39;</span> to <span class="token function">clear</span> the current input statement.

MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以输入 <code>STATUS;</code> 查看 MariaDB 当前状态：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--------------
mysql  Ver 15.1 Distrib 5.5.65-MariaDB, for Linux (x86_64) using readline 5.1

Connection id:		3
Current database:	
Current user:		root@localhost
SSL:			Not in use
Current pager:		stdout
Using outfile:		&#39;&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),x=n("p",null,"参考：",-1),w={href:"https://www.runoob.com/mysql/mysql-tutorial.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://gitee.com/E-book-learning/mysql-crash-course",target:"_blank",rel:"noopener noreferrer"},E=s('<h3 id="创建库" tabindex="-1"><a class="header-anchor" href="#创建库" aria-hidden="true">#</a> 创建库</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> myclass<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">USE</span> myclass<span class="token punctuation">;</span>\n<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>mystudent<span class="token punctuation">`</span></span><span class="token punctuation">(</span>\n  <span class="token identifier"><span class="token punctuation">`</span>ID<span class="token punctuation">`</span></span> <span class="token keyword">INT</span> <span class="token keyword">UNSIGNED</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>Name<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>Birthday<span class="token punctuation">`</span></span> <span class="token keyword">DATETIME</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>Sex<span class="token punctuation">`</span></span> <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>Password<span class="token punctuation">`</span></span> <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span> <span class="token identifier"><span class="token punctuation">`</span>ID<span class="token punctuation">`</span></span> <span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据" aria-hidden="true">#</a> 插入数据</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">USE</span> <span class="token identifier"><span class="token punctuation">`</span>myclass<span class="token punctuation">`</span></span><span class="token punctuation">;</span>\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>mystudent<span class="token punctuation">`</span></span>\n<span class="token punctuation">(</span> <span class="token identifier"><span class="token punctuation">`</span>ID<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>Name<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>Birthday<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>Sex<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>Password<span class="token punctuation">`</span></span> <span class="token punctuation">)</span>\n<span class="token keyword">VALUES</span>\n<span class="token punctuation">(</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1996-7-1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;z&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>mystudent<span class="token punctuation">`</span></span>\n<span class="token punctuation">(</span> <span class="token identifier"><span class="token punctuation">`</span>ID<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>Name<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>Birthday<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>Sex<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>Password<span class="token punctuation">`</span></span> <span class="token punctuation">)</span>\n<span class="token keyword">VALUES</span>\n<span class="token punctuation">(</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1997-9-1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;l&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入数据" tabindex="-1"><a class="header-anchor" href="#导入数据" aria-hidden="true">#</a> 导入数据</h3><p>在 <code>/tmp/</code> 目录下新建一个 <code>sql.txt</code> 文件，写入以下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3	王五	1999-7-1	女	haha\n4	赵六	1999-12-10	男	hehe\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 SQL 指令：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">USE</span> <span class="token identifier"><span class="token punctuation">`</span>myclass<span class="token punctuation">`</span></span><span class="token punctuation">;</span>\n<span class="token keyword">LOAD</span> <span class="token keyword">DATA</span> <span class="token keyword">LOCAL</span> <span class="token keyword">INFILE</span> <span class="token string">&#39;/tmp/sql.txt&#39;</span> <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>mystudent<span class="token punctuation">`</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户" aria-hidden="true">#</a> 创建用户</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;user1&#39;</span><span class="token variable">@&#39;localhost&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;2020Netw@rk&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加权限并刷新权限表：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span> <span class="token keyword">ON</span> <span class="token identifier"><span class="token punctuation">`</span>myclass<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>mystudent<span class="token punctuation">`</span></span> <span class="token keyword">TO</span> <span class="token string">&#39;user1&#39;</span><span class="token variable">@&#39;localhost&#39;</span><span class="token punctuation">;</span>\nFLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">USE</span> <span class="token identifier"><span class="token punctuation">`</span>myclass<span class="token punctuation">`</span></span><span class="token punctuation">;</span>\n<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>mystudent<span class="token punctuation">`</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+--------+---------------------+------+----------+\n| ID | Name   | Birthday            | Sex  | Password |\n+----+--------+---------------------+------+----------+\n|  1 | 张三   | 1996-07-01 00:00:00 | 女   | z        |\n|  2 | 李四   | 1997-09-01 00:00:00 | 男   | l        |\n|  3 | 王五   | 1999-07-01 00:00:00 | 女   | haha     |\n|  4 | 赵六   | 1999-12-10 00:00:00 | 男   | hehe     |\n+----+--------+---------------------+------+----------+\n4 rows in set (0.00 sec)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',18);function D(S,q){const t=l("RouterLink"),i=l("ExternalLinkIcon");return c(),d("div",null,[u,n("blockquote",null,[n("p",null,[e(t,{to:"/serve/Linux/Base/#centos-%E8%BD%AF%E4%BB%B6%E5%8C%85%E5%AE%89%E8%A3%85%E6%B5%81%E7%A8%8B%E7%A4%BA%E4%BE%8B"},{default:o(()=>[a("CentOS 软件包安装流程示例")]),_:1})])]),v,n("ol",null,[n("li",null,[k,n("ul",null,[m,n("li",null,[b,n("blockquote",null,[n("p",null,[a("参考 "),n("a",h,[a("Server System Variables - MariaDB Knowledge Base"),e(i)])])]),f])])]),g]),y,n("blockquote",null,[x,n("ul",null,[n("li",null,[n("a",w,[a("MySQL 教程 - 菜鸟教程"),e(i)])]),n("li",null,[n("a",B,[a("《MySQL 必知必会》"),e(i)])])])]),E])}const _=p(r,[["render",D],["__file","index.html.vue"]]);export{_ as default};
