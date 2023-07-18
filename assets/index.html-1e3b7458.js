import{_ as c,r as l,o as d,c as o,a as n,b as s,d as a,f as t,w as p,e as i}from"./app-ab31641a.js";const v="/assets/image-20200829152047933-cac443be.png",u="/assets/image-20200831151237356-026a1271.png",m="/assets/image-20200831151510910-aa8b183e.png",b="/assets/image-20200905151633382-74baf9d2.png",k="/assets/image-20200905151712408-e3dd5ef8.png",h="/assets/image-20200905151751996-2ef4c40b.png",g="/assets/image-20200905151824378-3b832e56.png",A="/assets/image-20200905151839976-62505f2c.png",f="/assets/image-20200827201728771-acd5ee02.png",_="/assets/01-9b0821f5.png",x="/assets/02-259d24c9.jpg",y="/assets/03-82136066.png",E="/assets/04-9f6dce9d.png",S="/assets/05-4f4cfe56.png",P="/assets/06-6b3b0cff.png",M={},C=n("h1",{id:"centos-基础",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#centos-基础","aria-hidden":"true"},"#"),s(" CentOS 基础")],-1),w=n("p",null,"本章教程使用 CentOS 6.5/7 系统。",-1),B=n("p",null,"相关链接：",-1),L={href:"https://www.centos.org/download/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.runoob.com/linux/linux-tutorial.html",target:"_blank",rel:"noopener noreferrer"},N={href:"http://linux.vbird.org/",target:"_blank",rel:"noopener noreferrer"},T={href:"http://linux.vbird.org/linux_basic/0320bash.php",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.w3cschool.cn/linuxprobe/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.runoob.com/linux/linux-vim.html",target:"_blank",rel:"noopener noreferrer"},q=i(`<h2 id="挂载软件源镜像" tabindex="-1"><a class="header-anchor" href="#挂载软件源镜像" aria-hidden="true">#</a> 挂载软件源镜像</h2><p>创建挂载目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /mnt/iso
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>挂载 ISO 镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mount</span> <span class="token parameter variable">-t</span> iso9660 <span class="token parameter variable">-o</span> loop /opt/CentOS-7-x86_64-Everything-1503-01.iso /mnt/iso
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置软件源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/yum.repos.d
<span class="token function">mv</span> CentOS-Base.repo CentOS-Base.repo.bak
<span class="token function">vi</span> CentOS-Media.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑 <code>CentOS-Media.repo</code> 文件：</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"># CentOS-Media.repo
</span><span class="token prefix unchanged"> </span><span class="token line">#
</span><span class="token prefix unchanged"> </span><span class="token line"># This repo is used to mount the default locations for a CDROM / DVD on
</span><span class="token prefix unchanged"> </span><span class="token line">#  CentOS-6.  You can use this repo and yum to install items directly off the
</span><span class="token prefix unchanged"> </span><span class="token line">#  DVD ISO that we release.
</span><span class="token prefix unchanged"> </span><span class="token line">#
</span><span class="token prefix unchanged"> </span><span class="token line"># To use this repo, put in your DVD and use it with the other repos too:
</span><span class="token prefix unchanged"> </span><span class="token line">#  yum --enablerepo=c6-media [command]
</span><span class="token prefix unchanged"> </span><span class="token line">#
</span><span class="token prefix unchanged"> </span><span class="token line"># or for ONLY the media repo, do this:
</span><span class="token prefix unchanged"> </span><span class="token line">#
</span><span class="token prefix unchanged"> </span><span class="token line">#  yum --disablerepo=\\* --enablerepo=c6-media [command]
</span><span class="token prefix unchanged"> </span><span class="token line">
</span><span class="token prefix unchanged"> </span><span class="token line">[c6-media]
</span><span class="token prefix unchanged"> </span><span class="token line">name=CentOS-$releasever - Media
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">baseurl=file:///mnt/iso/
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">baseurl=file:///media/CentOS/
</span><span class="token prefix deleted">-</span><span class="token line">        file:///media/cdrom/
</span><span class="token prefix deleted">-</span><span class="token line">        file:///media/cdrecorder/
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">gpgcheck=0
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">gpgcheck=1
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">enabled=1
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">enabled=0
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新软件源：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="selinux" tabindex="-1"><a class="header-anchor" href="#selinux" aria-hidden="true">#</a> SELinux</h2><p>CentOS 中 SELinux 默认开启，可以使用以下指令查看状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@host-10-20-70-107 ~<span class="token punctuation">]</span><span class="token comment"># sestatus -v</span>
SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   enforcing
Mode from config file:          enforcing
Policy MLS status:              enabled
Policy deny_unknown status:     allowed
Max kernel policy version:      <span class="token number">28</span>

Process contexts:
Current context:                unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
Init context:                   system_u:system_r:init_t:s0
/usr/sbin/sshd                  system_u:system_r:sshd_t:s0-s0:c0.c1023

File contexts:
Controlling terminal:           unconfined_u:object_r:user_devpts_t:s0
/etc/passwd                     system_u:object_r:passwd_file_t:s0
/etc/shadow                     system_u:object_r:shadow_t:s0
/bin/bash                       system_u:object_r:shell_exec_t:s0
/bin/login                      system_u:object_r:login_exec_t:s0
/bin/sh                         system_u:object_r:bin_t:s0 -<span class="token operator">&gt;</span> system_u:object_r:shell_exec_t:s0
/sbin/agetty                    system_u:object_r:getty_exec_t:s0
/sbin/init                      system_u:object_r:bin_t:s0 -<span class="token operator">&gt;</span> system_u:object_r:init_exec_t:s0
/usr/sbin/sshd                  system_u:object_r:sshd_exec_t:s0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置时区" tabindex="-1"><a class="header-anchor" href="#设置时区" aria-hidden="true">#</a> 设置时区</h2><p>CentOS 可以使用 <code>timedatectl</code> 指令设置时区。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@host-10-20-70-107 ~<span class="token punctuation">]</span><span class="token comment"># timedatectl -h</span>
timedatectl <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">..</span>.<span class="token punctuation">]</span> COMMAND <span class="token punctuation">..</span>.

查询或更改系统时间和日期设置。

  <span class="token parameter variable">-h</span> <span class="token parameter variable">--help</span>                显示当前帮助信息
     <span class="token parameter variable">--version</span>             显示软件包版本
     --no-pager            不要将输出通过管道传给寻呼机
     --no-ask-password     不提示输入密码
  <span class="token parameter variable">-H</span> <span class="token parameter variable">--host</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST    在远程主机上操作
  <span class="token parameter variable">-M</span> <span class="token parameter variable">--machine</span><span class="token operator">=</span>CONTAINER   在本地容器上操作
     --adjust-system-clock 更改本地 RTC 模式时调整系统时钟

Commands:
  status                   显示当前时间设置
  set-time TIME            设置系统时间
  set-timezone ZONE        设置系统时区
  list-timezones           显示已知时区
  set-local-rtc BOOL       控制 RTC 是否在当地时间
  set-ntp BOOL             控制是否启用 NTP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p>将时区设置为亚洲上海：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>timedatectl set-timezone Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="所有时区" tabindex="-1"><a class="header-anchor" href="#所有时区" aria-hidden="true">#</a> 所有时区</h3><details class="custom-container details"><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Africa/Abidjan
Africa/Accra
Africa/Addis_Ababa
Africa/Algiers
Africa/Asmara
Africa/Bamako
Africa/Bangui
Africa/Banjul
Africa/Bissau
Africa/Blantyre
Africa/Brazzaville
Africa/Bujumbura
Africa/Cairo
Africa/Casablanca
Africa/Ceuta
Africa/Conakry
Africa/Dakar
Africa/Dar_es_Salaam
Africa/Djibouti
Africa/Douala
Africa/El_Aaiun
Africa/Freetown
Africa/Gaborone
Africa/Harare
Africa/Johannesburg
Africa/Juba
Africa/Kampala
Africa/Khartoum
Africa/Kigali
Africa/Kinshasa
Africa/Lagos
Africa/Libreville
Africa/Lome
Africa/Luanda
Africa/Lubumbashi
Africa/Lusaka
Africa/Malabo
Africa/Maputo
Africa/Maseru
Africa/Mbabane
Africa/Mogadishu
Africa/Monrovia
Africa/Nairobi
Africa/Ndjamena
Africa/Niamey
Africa/Nouakchott
Africa/Ouagadougou
Africa/Porto-Novo
Africa/Sao_Tome
Africa/Tripoli
Africa/Tunis
Africa/Windhoek
America/Adak
America/Anchorage
America/Anguilla
America/Antigua
America/Araguaina
America/Argentina/Buenos_Aires
America/Argentina/Catamarca
America/Argentina/Cordoba
America/Argentina/Jujuy
America/Argentina/La_Rioja
America/Argentina/Mendoza
America/Argentina/Rio_Gallegos
America/Argentina/Salta
America/Argentina/San_Juan
America/Argentina/San_Luis
America/Argentina/Tucuman
America/Argentina/Ushuaia
America/Aruba
America/Asuncion
America/Atikokan
America/Bahia
America/Bahia_Banderas
America/Barbados
America/Belem
America/Belize
America/Blanc-Sablon
America/Boa_Vista
America/Bogota
America/Boise
America/Cambridge_Bay
America/Campo_Grande
America/Cancun
America/Caracas
America/Cayenne
America/Cayman
America/Chicago
America/Chihuahua
America/Costa_Rica
America/Creston
America/Cuiaba
America/Curacao
America/Danmarkshavn
America/Dawson
America/Dawson_Creek
America/Denver
America/Detroit
America/Dominica
America/Edmonton
America/Eirunepe
America/El_Salvador
America/Fort_Nelson
America/Fortaleza
America/Glace_Bay
America/Godthab
America/Goose_Bay
America/Grand_Turk
America/Grenada
America/Guadeloupe
America/Guatemala
America/Guayaquil
America/Guyana
America/Halifax
America/Havana
America/Hermosillo
America/Indiana/Indianapolis
America/Indiana/Knox
America/Indiana/Marengo
America/Indiana/Petersburg
America/Indiana/Tell_City
America/Indiana/Vevay
America/Indiana/Vincennes
America/Indiana/Winamac
America/Inuvik
America/Iqaluit
America/Jamaica
America/Juneau
America/Kentucky/Louisville
America/Kentucky/Monticello
America/Kralendijk
America/La_Paz
America/Lima
America/Los_Angeles
America/Lower_Princes
America/Maceio
America/Managua
America/Manaus
America/Marigot
America/Martinique
America/Matamoros
America/Mazatlan
America/Menominee
America/Merida
America/Metlakatla
America/Mexico_City
America/Miquelon
America/Moncton
America/Monterrey
America/Montevideo
America/Montserrat
America/Nassau
America/New_York
America/Nipigon
America/Nome
America/Noronha
America/North_Dakota/Beulah
America/North_Dakota/Center
America/North_Dakota/New_Salem
America/Ojinaga
America/Panama
America/Pangnirtung
America/Paramaribo
America/Phoenix
America/Port-au-Prince
America/Port_of_Spain
America/Porto_Velho
America/Puerto_Rico
America/Punta_Arenas
America/Rainy_River
America/Rankin_Inlet
America/Recife
America/Regina
America/Resolute
America/Rio_Branco
America/Santarem
America/Santiago
America/Santo_Domingo
America/Sao_Paulo
America/Scoresbysund
America/Sitka
America/St_Barthelemy
America/St_Johns
America/St_Kitts
America/St_Lucia
America/St_Thomas
America/St_Vincent
America/Swift_Current
America/Tegucigalpa
America/Thule
America/Thunder_Bay
America/Tijuana
America/Toronto
America/Tortola
America/Vancouver
America/Whitehorse
America/Winnipeg
America/Yakutat
America/Yellowknife
Antarctica/Casey
Antarctica/Davis
Antarctica/DumontDUrville
Antarctica/Macquarie
Antarctica/Mawson
Antarctica/McMurdo
Antarctica/Palmer
Antarctica/Rothera
Antarctica/Syowa
Antarctica/Troll
Antarctica/Vostok
Arctic/Longyearbyen
Asia/Aden
Asia/Almaty
Asia/Amman
Asia/Anadyr
Asia/Aqtau
Asia/Aqtobe
Asia/Ashgabat
Asia/Atyrau
Asia/Baghdad
Asia/Bahrain
Asia/Baku
Asia/Bangkok
Asia/Barnaul
Asia/Beirut
Asia/Bishkek
Asia/Brunei
Asia/Chita
Asia/Choibalsan
Asia/Colombo
Asia/Damascus
Asia/Dhaka
Asia/Dili
Asia/Dubai
Asia/Dushanbe
Asia/Famagusta
Asia/Gaza
Asia/Hebron
Asia/Ho_Chi_Minh
Asia/Hong_Kong
Asia/Hovd
Asia/Irkutsk
Asia/Jakarta
Asia/Jayapura
Asia/Jerusalem
Asia/Kabul
Asia/Kamchatka
Asia/Karachi
Asia/Kathmandu
Asia/Khandyga
Asia/Kolkata
Asia/Krasnoyarsk
Asia/Kuala_Lumpur
Asia/Kuching
Asia/Kuwait
Asia/Macau
Asia/Magadan
Asia/Makassar
Asia/Manila
Asia/Muscat
Asia/Nicosia
Asia/Novokuznetsk
Asia/Novosibirsk
Asia/Omsk
Asia/Oral
Asia/Phnom_Penh
Asia/Pontianak
Asia/Pyongyang
Asia/Qatar
Asia/Qyzylorda
Asia/Riyadh
Asia/Sakhalin
Asia/Samarkand
Asia/Seoul
Asia/Shanghai
Asia/Singapore
Asia/Srednekolymsk
Asia/Taipei
Asia/Tashkent
Asia/Tbilisi
Asia/Tehran
Asia/Thimphu
Asia/Tokyo
Asia/Tomsk
Asia/Ulaanbaatar
Asia/Urumqi
Asia/Ust-Nera
Asia/Vientiane
Asia/Vladivostok
Asia/Yakutsk
Asia/Yangon
Asia/Yekaterinburg
Asia/Yerevan
Atlantic/Azores
Atlantic/Bermuda
Atlantic/Canary
Atlantic/Cape_Verde
Atlantic/Faroe
Atlantic/Madeira
Atlantic/Reykjavik
Atlantic/South_Georgia
Atlantic/St_Helena
Atlantic/Stanley
Australia/Adelaide
Australia/Brisbane
Australia/Broken_Hill
Australia/Currie
Australia/Darwin
Australia/Eucla
Australia/Hobart
Australia/Lindeman
Australia/Lord_Howe
Australia/Melbourne
Australia/Perth
Australia/Sydney
Europe/Amsterdam
Europe/Andorra
Europe/Astrakhan
Europe/Athens
Europe/Belgrade
Europe/Berlin
Europe/Bratislava
Europe/Brussels
Europe/Bucharest
Europe/Budapest
Europe/Busingen
Europe/Chisinau
Europe/Copenhagen
Europe/Dublin
Europe/Gibraltar
Europe/Guernsey
Europe/Helsinki
Europe/Isle_of_Man
Europe/Istanbul
Europe/Jersey
Europe/Kaliningrad
Europe/Kiev
Europe/Kirov
Europe/Lisbon
Europe/Ljubljana
Europe/London
Europe/Luxembourg
Europe/Madrid
Europe/Malta
Europe/Mariehamn
Europe/Minsk
Europe/Monaco
Europe/Moscow
Europe/Oslo
Europe/Paris
Europe/Podgorica
Europe/Prague
Europe/Riga
Europe/Rome
Europe/Samara
Europe/San_Marino
Europe/Sarajevo
Europe/Saratov
Europe/Simferopol
Europe/Skopje
Europe/Sofia
Europe/Stockholm
Europe/Tallinn
Europe/Tirane
Europe/Ulyanovsk
Europe/Uzhgorod
Europe/Vaduz
Europe/Vatican
Europe/Vienna
Europe/Vilnius
Europe/Volgograd
Europe/Warsaw
Europe/Zagreb
Europe/Zaporozhye
Europe/Zurich
Indian/Antananarivo
Indian/Chagos
Indian/Christmas
Indian/Cocos
Indian/Comoro
Indian/Kerguelen
Indian/Mahe
Indian/Maldives
Indian/Mauritius
Indian/Mayotte
Indian/Reunion
Pacific/Apia
Pacific/Auckland
Pacific/Bougainville
Pacific/Chatham
Pacific/Chuuk
Pacific/Easter
Pacific/Efate
Pacific/Enderbury
Pacific/Fakaofo
Pacific/Fiji
Pacific/Funafuti
Pacific/Galapagos
Pacific/Gambier
Pacific/Guadalcanal
Pacific/Guam
Pacific/Honolulu
Pacific/Kiritimati
Pacific/Kosrae
Pacific/Kwajalein
Pacific/Majuro
Pacific/Marquesas
Pacific/Midway
Pacific/Nauru
Pacific/Niue
Pacific/Norfolk
Pacific/Noumea
Pacific/Pago_Pago
Pacific/Palau
Pacific/Pitcairn
Pacific/Pohnpei
Pacific/Port_Moresby
Pacific/Rarotonga
Pacific/Saipan
Pacific/Tahiti
Pacific/Tarawa
Pacific/Tongatapu
Pacific/Wake
Pacific/Wallis
UTC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,22),j=i('<h2 id="联网" tabindex="-1"><a class="header-anchor" href="#联网" aria-hidden="true">#</a> 联网</h2><p>点击右上角电源键处打开网络连接：</p><p><img src="'+v+'" alt="image-20200829152047933"></p><h2 id="手动配置-ip-地址" tabindex="-1"><a class="header-anchor" href="#手动配置-ip-地址" aria-hidden="true">#</a> 手动配置 IP 地址</h2><p><img src="'+u+'" alt="image-20200831151237356"></p><p><img src="'+m+'" alt="image-20200831151510910"></p><h2 id="添加中文输入法" tabindex="-1"><a class="header-anchor" href="#添加中文输入法" aria-hidden="true">#</a> 添加中文输入法</h2><p><img src="'+b+'" alt="image-20200905151633382"></p><p><img src="'+k+'" alt="image-20200905151712408"></p><p><img src="'+h+'" alt="image-20200905151751996"></p><p><img src="'+g+'" alt="image-20200905151824378"></p><p><img src="'+A+`" alt="image-20200905151839976"></p><h2 id="centos-软件包安装流程示例" tabindex="-1"><a class="header-anchor" href="#centos-软件包安装流程示例" aria-hidden="true">#</a> CentOS 软件包安装流程示例</h2><p>输入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum update <span class="token comment"># 更新软件源</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> httpd <span class="token comment"># 安装 Apache</span>
<span class="token punctuation">[</span>sudo<span class="token punctuation">]</span> yueplus 的密码： <span class="token comment"># 输入管理员密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>sudo</code> - 以管理员身份运行（可以使用 <code>su root</code> 切换到 root 用户，就不用一直输 <code>sudo</code> 了）；</p></blockquote><p>输出：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>已加载插件：fastestmirror, langpacks
Loading mirror speeds from cached hostfile
 * base: mirrors.aliyun.com
 * extras: ftp.sjtu.edu.cn
 * updates: ftp.sjtu.edu.cn
正在解决依赖关系
--<span class="token operator">&gt;</span> 正在检查事务
---<span class="token operator">&gt;</span> 软件包 httpd.x86_64.0.2.4.6-93.el7.centos 将被 安装
--<span class="token operator">&gt;</span> 正在处理依赖关系 httpd-tools <span class="token operator">=</span> <span class="token number">2.4</span>.6-93.el7.centos，它被软件包 httpd-2.4.6-93.el7.centos.x86_64 需要
--<span class="token operator">&gt;</span> 正在处理依赖关系 /etc/mime.types，它被软件包 httpd-2.4.6-93.el7.centos.x86_64 需要
--<span class="token operator">&gt;</span> 正在处理依赖关系 libaprutil-1.so.0<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span>，它被软件包 httpd-2.4.6-93.el7.centos.x86_64 需要
--<span class="token operator">&gt;</span> 正在处理依赖关系 libapr-1.so.0<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span>，它被软件包 httpd-2.4.6-93.el7.centos.x86_64 需要
--<span class="token operator">&gt;</span> 正在检查事务
---<span class="token operator">&gt;</span> 软件包 apr.x86_64.0.1.4.8-5.el7 将被 安装
---<span class="token operator">&gt;</span> 软件包 apr-util.x86_64.0.1.5.2-6.el7 将被 安装
---<span class="token operator">&gt;</span> 软件包 httpd-tools.x86_64.0.2.4.6-93.el7.centos 将被 安装
---<span class="token operator">&gt;</span> 软件包 mailcap.noarch.0.2.1.41-2.el7 将被 安装
--<span class="token operator">&gt;</span> 解决依赖关系完成

依赖关系解决

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
 Package                                             架构                                           版本                                                        源                                            大小
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
正在安装:
 httpd                                               x86_64                                         <span class="token number">2.4</span>.6-93.el7.centos                                         base                                         <span class="token number">2.7</span> M
为依赖而安装:
 apr                                                 x86_64                                         <span class="token number">1.4</span>.8-5.el7                                                 base                                         <span class="token number">103</span> k
 apr-util                                            x86_64                                         <span class="token number">1.5</span>.2-6.el7                                                 base                                          <span class="token number">92</span> k
 httpd-tools                                         x86_64                                         <span class="token number">2.4</span>.6-93.el7.centos                                         base                                          <span class="token number">92</span> k
 mailcap                                             noarch                                         <span class="token number">2.1</span>.41-2.el7                                                base                                          <span class="token number">31</span> k

事务概要
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
安装  <span class="token number">1</span> 软件包 <span class="token punctuation">(</span>+4 依赖软件包<span class="token punctuation">)</span>

总下载量：3.0 M
安装大小：10 M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Is this ok <span class="token punctuation">[</span>y/d/N<span class="token punctuation">]</span>: Y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li>Y - Yes 下载并安装</li><li>D - Dowonload 仅下载</li><li>N - No 不做任何事</li></ul></blockquote><p>输出：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Downloading packages:
<span class="token punctuation">(</span><span class="token number">1</span>/5<span class="token punctuation">)</span>: apr-1.4.8-5.el7.x86_64.rpm                                                                                                                                                           <span class="token operator">|</span> <span class="token number">103</span> kB  00:00:00     
<span class="token punctuation">(</span><span class="token number">2</span>/5<span class="token punctuation">)</span>: apr-util-1.5.2-6.el7.x86_64.rpm                                                                                                                                                      <span class="token operator">|</span>  <span class="token number">92</span> kB  00:00:00     
<span class="token punctuation">(</span><span class="token number">3</span>/5<span class="token punctuation">)</span>: mailcap-2.1.41-2.el7.noarch.rpm                                                                                                                                                      <span class="token operator">|</span>  <span class="token number">31</span> kB  00:00:00     
<span class="token punctuation">(</span><span class="token number">4</span>/5<span class="token punctuation">)</span>: httpd-tools-2.4.6-93.el7.centos.x86_64.rpm                                                                                                                                           <span class="token operator">|</span>  <span class="token number">92</span> kB  00:00:00     
<span class="token punctuation">(</span><span class="token number">5</span>/5<span class="token punctuation">)</span>: httpd-2.4.6-93.el7.centos.x86_64.rpm                                                                                                                                                 <span class="token operator">|</span> <span class="token number">2.7</span> MB  00:00:02     
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
总计                                                                                                                                                                               <span class="token number">1.3</span> MB/s <span class="token operator">|</span> <span class="token number">3.0</span> MB  00:00:02     
Running transaction check
Running transaction <span class="token builtin class-name">test</span>
Transaction <span class="token builtin class-name">test</span> succeeded
Running transaction
  正在安装    <span class="token builtin class-name">:</span> apr-1.4.8-5.el7.x86_64                                                                                                                                                                         <span class="token number">1</span>/5 
  正在安装    <span class="token builtin class-name">:</span> apr-util-1.5.2-6.el7.x86_64                                                                                                                                                                    <span class="token number">2</span>/5 
  正在安装    <span class="token builtin class-name">:</span> httpd-tools-2.4.6-93.el7.centos.x86_64                                                                                                                                                         <span class="token number">3</span>/5 
  正在安装    <span class="token builtin class-name">:</span> mailcap-2.1.41-2.el7.noarch                                                                                                                                                                    <span class="token number">4</span>/5 
  正在安装    <span class="token builtin class-name">:</span> httpd-2.4.6-93.el7.centos.x86_64                                                                                                                                                               <span class="token number">5</span>/5 
  验证中      <span class="token builtin class-name">:</span> apr-1.4.8-5.el7.x86_64                                                                                                                                                                         <span class="token number">1</span>/5 
  验证中      <span class="token builtin class-name">:</span> httpd-tools-2.4.6-93.el7.centos.x86_64                                                                                                                                                         <span class="token number">2</span>/5 
  验证中      <span class="token builtin class-name">:</span> mailcap-2.1.41-2.el7.noarch                                                                                                                                                                    <span class="token number">3</span>/5 
  验证中      <span class="token builtin class-name">:</span> httpd-2.4.6-93.el7.centos.x86_64                                                                                                                                                               <span class="token number">4</span>/5 
  验证中      <span class="token builtin class-name">:</span> apr-util-1.5.2-6.el7.x86_64                                                                                                                                                                    <span class="token number">5</span>/5 

已安装:
  httpd.x86_64 <span class="token number">0</span>:2.4.6-93.el7.centos                                                                                                                                                                               

作为依赖被安装:
  apr.x86_64 <span class="token number">0</span>:1.4.8-5.el7                      apr-util.x86_64 <span class="token number">0</span>:1.5.2-6.el7                      httpd-tools.x86_64 <span class="token number">0</span>:2.4.6-93.el7.centos                      mailcap.noarch <span class="token number">0</span>:2.1.41-2.el7                     

完毕！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="systemctl-命令" tabindex="-1"><a class="header-anchor" href="#systemctl-命令" aria-hidden="true">#</a> <code>systemctl</code> 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 立即启动一个服务</span>
$ <span class="token function">sudo</span> systemctl start apache.service

<span class="token comment"># 立即停止一个服务</span>
$ <span class="token function">sudo</span> systemctl stop apache.service

<span class="token comment"># 重启一个服务</span>
$ <span class="token function">sudo</span> systemctl restart apache.service

<span class="token comment"># 杀死一个服务的所有子进程</span>
$ <span class="token function">sudo</span> systemctl <span class="token function">kill</span> apache.service

<span class="token comment"># 重新加载一个服务的配置文件</span>
$ <span class="token function">sudo</span> systemctl reload apache.service

<span class="token comment"># 重载所有修改过的配置文件</span>
$ <span class="token function">sudo</span> systemctl daemon-reload

<span class="token comment"># 显示某个 Unit 的所有底层参数</span>
$ systemctl show httpd.service

<span class="token comment"># 显示某个 Unit 的指定属性的值</span>
$ systemctl show <span class="token parameter variable">-p</span> CPUShares httpd.service

<span class="token comment"># 设置某个 Unit 的指定属性</span>
$ <span class="token function">sudo</span> systemctl set-property httpd.service <span class="token assign-left variable">CPUShares</span><span class="token operator">=</span><span class="token number">500</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),R={href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html",target:"_blank",rel:"noopener noreferrer"},V=i('<h2 id="解决-selinux-报警" tabindex="-1"><a class="header-anchor" href="#解决-selinux-报警" aria-hidden="true">#</a> 解决 SELinux 报警</h2><p><img src="'+f+`" alt="SELinux 报警"></p><ul><li><p>直接关闭 SELinux：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>setenforce <span class="token number">0</span> <span class="token comment"># 关闭 SELinux（立即生效，重启失效）；0-关；1-开</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 <code>/etc/selinux/config</code> 文件的第7行：<code>SELINUX=enforcing</code> 修改成：<code>SELINUX=disabled</code>（重启生效，重启有效）</p></li><li><p>添加正确的文件类型</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>semanage fcontext <span class="token parameter variable">-a</span> <span class="token parameter variable">-t</span> httpd_sys_content_t <span class="token string">&#39;/skillschina/market/index.html&#39;</span>
restorecon <span class="token parameter variable">-v</span> <span class="token string">&#39;/skillschina/market/index.html&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,3),K={href:"http://linux.vbird.org/linux_basic/0440processcontrol.php#selinux",target:"_blank",rel:"noopener noreferrer"},G=i(`<h2 id="smbclient-命令详解" tabindex="-1"><a class="header-anchor" href="#smbclient-命令详解" aria-hidden="true">#</a> <code>smbclient</code> 命令详解</h2><p>语法：<code>smbclient [网络资源][密码][-EhLN][-B&lt;IP地址&gt;][-d&lt;排错层级&gt;][-i&lt;范围&gt;][-I&lt;IP地址&gt;][-l&lt;记录文件&gt;][-M&lt;NetBIOS名称&gt;][-n&lt;NetBIOS名称&gt;][-O&lt;连接槽选项&gt;][-p&lt;TCP连接端口&gt;][-R&lt;名称解析顺序&gt;][-s&lt;目录&gt;][-t&lt;服务器字码&gt;][-T&lt;tar选项&gt;][-U&lt;用户名称&gt;][-W&lt;工作群组&gt;]</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[网络资源] [网络资源]的格式为//服务器名称/资源分享名称。
[密码] 输入存取网络资源所需的密码。
-B&lt;IP地址&gt; 传送广播数据包时所用的IP地址。
-d&lt;排错层级&gt; 指定记录文件所记载事件的详细程度。
-E 将信息送到标准错误输出设备。
-h 显示帮助。
-i&lt;范围&gt; 设置NetBIOS名称范围。
-I&lt;IP地址&gt; 指定服务器的IP地址。
-l&lt;记录文件&gt; 指定记录文件的名称。
-L 显示服务器端所分享出来的所有资源。
-M&lt;NetBIOS名称&gt; 可利用WinPopup协议，将信息送给选项中所指定的主机。
-n&lt;NetBIOS名称&gt; 指定用户端所要使用的NetBIOS名称。
-N 不用询问密码。
-O&lt;连接槽选项&gt; 设置用户端TCP连接槽的选项。
-p&lt;TCP连接端口&gt; 指定服务器端TCP连接端口编号。
-R&lt;名称解析顺序&gt; 设置NetBIOS名称解析的顺序。
-s&lt;目录&gt; 指定smb.conf所在的目录。
-t&lt;服务器字码&gt; 设置用何种字符码来解析服务器端的文件名称。
-T&lt;tar选项&gt; 备份服务器端分享的全部文件，并打包成tar格式的文件。
-U&lt;用户名称&gt; 指定用户名称。
-W&lt;工作群组&gt; 指定工作群组名称。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计划任务" tabindex="-1"><a class="header-anchor" href="#计划任务" aria-hidden="true">#</a> 计划任务</h2><h3 id="使用-at-设置定时任务" tabindex="-1"><a class="header-anchor" href="#使用-at-设置定时任务" aria-hidden="true">#</a> 使用 <code>at</code> 设置定时任务</h3>`,5),z={href:"http://linux.vbird.org/linux_basic/0430cron.php#atjob",target:"_blank",rel:"noopener noreferrer"},Y=i(`<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> atd      <span class="token comment"># 安装 at</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> atd <span class="token comment"># 设置开机启动</span>
<span class="token function">sudo</span> systemctl start atd  <span class="token comment"># 立即启动</span>
<span class="token function">sudo</span> systemctl status atd <span class="token comment"># 查看状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="manpages" tabindex="-1"><a class="header-anchor" href="#manpages" aria-hidden="true">#</a> manpages</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>AT(1)                      Linux Programmer&#39;s Manual                     AT(1)

NAME
       at, batch, atq, atrm - 排队、检查或删除以后要执行的作业。

总览
       at  [-V]  [-q  队列]  [-f 文件] [-mldbv] 时间 at -c 作业 [作业...]  atq
       [-V] [-q 队列] [-v]
       atrm [-V] 作业 [作业...]
       batch [-V] [-q 队列] [-f 文件] [-mv] [时间]
描述
       at 和 batch  从标准输入或一个指定的文件读取命令，这些命令在以后某个时间
       用 /bin/sh 执行。

       at      在指定的时间执行命令。

       atq     列出用户的等待执行的作业；在用户是超级用户的情况下，列出所有人
               的作业。

       atrm    删除作业。

       batch   在系统负载水平允许的时候执行命令；换句话说，当平均负   载降到低
               于0.8，或降到了在  atrun 文件中指定的期望值时运行。 译注：atrun
               文件参见 atd 手册页。

       At 允许相当复杂的时间指定，它扩展了 POSIX.2 标准。它接受 HH:MM 的时间式
       样，用来指定在一天的某个时间运行一个作业。  (如果时间已经过了则假定为第
       二天。)你可以指定  midnight  (午夜)、  noon  (中午)  或   teatime   (下
       午4点)，你可以用  AM  或 PM 后缀指定一天的上午或下午。你可以给出 month-
       name day 加上可选 的年份的式样用来指定运行 at  的日期，或者给出  MMDDYY
       、 MM/DD/YY 或 DD.MM.YY 式样用来指定运行 at 的日期。日期的指定 必须跟在
       时间指定的后面。你也可以给出象 now + 计数 时间单位 的式样，这里的时间单
       位可以是  minutes  、 hours 、 days 或 weeks， 你可以给时间加一个 today
       后缀来指定 at 今天运行作业，可以 给时间加一个 tomorrow 后缀来指定 at 明
       天运行作业。

       例如，要在三天以后的下午 4 点运行一个作业，at 时间参数可以 指定为 4pm +
       3 days。 要在7月31日上午10:00运行一个作业， at 时间参数可以指定为  10am
       Jul   31，   要在明天上午1点运行一个  作业，at  时间参数可以指定为  1am
       tomorrow。

       时间指定的精确的定义可以在 /usr/share/doc/at/timespec 找到。

       对于 at 和 batch 两者，从标准输入或以 -f 选项指定的文件中  读取命令并执
       行之。工作路径、环境变量(除了 TERM、 DISPLAY 和 _)、 umask 从所期望的时
       间起保持不变。从一个从执行 su(1) 命令得到的 shell  中调用的  at   -  或
       batch  - 命令将保持当前的 userid。 用户的命令的标准错误输出和标准输出将
       用邮件发给用户。发送邮件  使用命令  /usr/sbin/sendmail。   从一个从执行
       su(1)命令得到的  shell 中执行了 at ，登录 shell 的所有者将接到邮件。 译
       注：userid 是用户标识的意思。umask 是与每个进程相关联的文件  方式创建屏
       蔽字。

       超级用户可以在任何情况下使用这些命令。对于其他用户，使用  at 的权限由文
       件 /etc/at.allow 和 /etc/at.deny 确定。

       如果文件 /etc/at.allow 存在，在其中提及的用户名被允许使用 at 命令。

       如果 /etc/at.allow 不存在，而 /etc/at.deny 存在，所有在 /etc/at.deny 中
       未提及的用户被允许使用 at 命令。

       如果两者均不存在，只用超级用户可以使用 at 命令。

       一个空的 /etc/at.deny 意味着所有用户均被允许使用这些命令， 这是缺省的配
       置。
选项
       -V      在标准错误上输出版本号。

       -q queue
               使用指定的队列。一个队列用一个字母标定，有效的的队列标定的 范围
               是从a到z和从A到Z。at  的缺省队列是 a,batch 的缺省队列是 b。队列
               的字母顺序越高，则队列运行时越谦让(运行级别越低)。   指定的队列
               &quot;=&quot; 保留给当前运行的作业所在的队列。

       如果一个作业被提交到一个以大写字母标定的队列，则与提交到  batch  同样对
       待。如果给 atq 指定一个队列，则只显示在此指定 队列中的作业。

       -m      当作业完成时即使没有输出也给用户发邮件。

       -f file 从文件而不是标准输入中读取作业信息。

       -l      是 atq 的别名。

       -d      是 atrm 的别名。

       -v      对于 atq， 显示完整的在队列中未被删除的作业，对于其他  命令，显
               示作业将要执行的时间。

       显示的时间的格式类似于&quot;1997-02-20  14:50&quot;，但如果设置了 POSIXLY_CORRECT
       环境变量之后，格式类似于&quot;Thu Feb 20 14:50:00 1996&quot;。

       -c      连接命令行中列出的作业并输出到标准输出。

相关文件
       /var/spool/at
       /var/spool/at/spool
       /proc/loadavg
       /var/run/utmp
       /etc/at.allow
       /etc/at.deny

参见
       cron(1), nice(1), sh(1), umask(2), atd(8)

缺陷
       在 Linux 下正确的批处理操作依赖于挂装在/proc 上的一个 proc-  类型的目录
       的存在。

       如果文件  /var/run/utmp 不可获得或已经损坏，或者在 at 所期 待的时间用户
       没有登录，向在环境变量 LOGNAME 中找到的 userid 发送邮件。如果 LOGNAME未
       定义或是空的，假定为当前的userid。

       当前实现的  at 和 batch 在用户竞争资源的时候是不适合的。 如果你的站点是
       这种情况，你可以考虑其他的批处理系统， 例如 nqs。

著作者
       AT 大部分是由Thomas Koenig写的。ig25@rz.uni-karlsruhe.de.

[中文版维护人]
       mhss &lt;jijingzhisheng@up369.com&gt;
       主要参照了：  Linux实用大全  /  陈向阳，方汉  编著.  -北京：   科学出版
       社，1998.8

[中文版最新更新]
       2000/10/27

《中国linux论坛man手册页翻译计划》:
       http://cmpp.linuxforum.net

跋
       本页面中文版由中文 man 手册页计划提供。
       中文 man 手册页计划：https://github.com/man-pages-zh/manpages-zh

local                              Nov 1996                              AT(1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例-两分钟后向全体已登入用户发送消息" tabindex="-1"><a class="header-anchor" href="#示例-两分钟后向全体已登入用户发送消息" aria-hidden="true">#</a> 示例：两分钟后向全体已登入用户发送消息</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>at now + 2minutes
wall hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><kbd>Ctrl</kbd> + <kbd>D</kbd> 完成输入。</p><h4 id="示例-20-分钟后重启系统" tabindex="-1"><a class="header-anchor" href="#示例-20-分钟后重启系统" aria-hidden="true">#</a> 示例：20 分钟后重启系统</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>at now + 20minutes
<span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><kbd>Ctrl</kbd> + <kbd>D</kbd> 完成输入。</p><h3 id="使用-crontab-计划任务" tabindex="-1"><a class="header-anchor" href="#使用-crontab-计划任务" aria-hidden="true">#</a> 使用 <code>crontab</code> 计划任务</h3><p>使用 <code>crontab -e</code> 指令编辑计划任务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ubuntu@VM-12-14-ubuntu:~$ <span class="token function">crontab</span> <span class="token parameter variable">-e</span>
no <span class="token function">crontab</span> <span class="token keyword">for</span> ubuntu - using an empty one

Select an editor.  To change later, run <span class="token string">&#39;select-editor&#39;</span><span class="token builtin class-name">.</span>
<span class="token number">1</span>. /bin/nano        <span class="token operator">&lt;</span>---- easiest
<span class="token number">2</span>. /usr/bin/vim.basic
<span class="token number">3</span>. /usr/bin/vim.tiny
<span class="token number">4</span>. /bin/ed

Choose <span class="token number">1</span>-4 <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: <span class="token number">2</span>
No modification made
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># crontab [-u username] [-l|-e|-r]</span>
選項與參數：
<span class="token parameter variable">-u</span>  ：只有 root 才能進行這個任務，亦即幫其他使用者建立/移除 <span class="token function">crontab</span> 工作排程；
<span class="token parameter variable">-e</span>  ：編輯 <span class="token function">crontab</span> 的工作內容
<span class="token parameter variable">-l</span>  ：查閱 <span class="token function">crontab</span> 的工作內容
<span class="token parameter variable">-r</span>  ：移除所有的 <span class="token function">crontab</span> 的工作內容，若僅要移除一項，請用 <span class="token parameter variable">-e</span> 去編輯。

範例一：用 dmtsai 的身份在每天的 <span class="token number">12</span>:00 發信給自己
<span class="token punctuation">[</span>dmtsai@study ~<span class="token punctuation">]</span>$ <span class="token function">crontab</span> <span class="token parameter variable">-e</span>
<span class="token comment"># 此時會進入 vi 的編輯畫面讓您編輯工作！注意到，每項工作都是一行。</span>
<span class="token number">0</span>   <span class="token number">12</span>  *  *  * mail <span class="token parameter variable">-s</span> <span class="token string">&quot;at 12:00&quot;</span> dmtsai <span class="token operator">&lt;</span> /home/dmtsai/.bashrc
<span class="token comment">#分 時  日 月 週 |&lt;==============指令串========================&gt;|</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),H={href:"http://linux.vbird.org/linux_basic/0430cron.php#etc_crontab",target:"_blank",rel:"noopener noreferrer"},U=i(`<h4 id="示例-每天每小时的-30-分-将-home-目录实施压缩打包" tabindex="-1"><a class="header-anchor" href="#示例-每天每小时的-30-分-将-home-目录实施压缩打包" aria-hidden="true">#</a> 示例，每天每小时的 30 分，将 <code>/home</code> 目录实施压缩打包</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">30</span> * * * * <span class="token function">tar</span> <span class="token parameter variable">-cvf</span> /home.tar.xz /home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),J={href:"https://www.runoob.com/linux/linux-comm-tar.html",target:"_blank",rel:"noopener noreferrer"},W=n("h2",{id:"linux-安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux-安装","aria-hidden":"true"},"#"),s(" Linux 安装")],-1),$={href:"https://www.centos.org/download/",target:"_blank",rel:"noopener noreferrer"},F=n("blockquote",null,[n("p",null,[s("培训室内网共享文件夹："),n("code",null,"\\\\WS22\\Yue_plus 的共享\\LinuxOS")])],-1),Z=n("p",null,"可前往bilbil网站观看第三章",-1),X=n("iframe",{src:"//player.bilibili.com/player.html?aid=99111795&bvid=BV187411y7hF&cid=169181090&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",style:{width:"100%",height:"380px"}}," ",-1),Q=i('<h2 id="vmware-虚拟机以及镜像安装" tabindex="-1"><a class="header-anchor" href="#vmware-虚拟机以及镜像安装" aria-hidden="true">#</a> VMware 虚拟机以及镜像安装</h2><p>1.新建一个虚拟机</p><p><img src="'+_+'" alt="image-20200829152047933"></p><p>2.选择典型点击下一步</p><p><img src="'+x+'" alt="image-20200829152047933"></p><p>3.选择自己要安装的镜像，选择完毕直接点击下一步</p><p><img src="'+y+'" alt="image-20200829152047933"></p><p>4.此步骤是没有镜像的操作。建议使用镜像安装，有镜像可省略此步骤然后点击下一步</p><p><img src="'+E+'" alt="image-20200829152047933"></p><p>5.虚拟机命名以及选择他所需要储存的的位置，设置完后点击下一步</p><p><img src="'+S+'" alt="image-20200829152047933"></p><p>6.指定磁盘容量的大小，可默认，也可以自己设置</p><p><img src="'+P+'" alt="image-20200829152047933"></p><p>7.做完以上步骤之后，就可以开始安装虚拟机了，点击完成开始安装</p>',14);function nn(sn,an){const e=l("ExternalLinkIcon"),r=l("RouterLink");return d(),o("div",null,[C,w,B,n("ul",null,[n("li",null,[n("a",L,[s("CentOS 官网"),a(e)])]),n("li",null,[n("a",I,[s("Linux 教程 | 菜鸟教程"),a(e)])]),n("li",null,[n("a",N,[s("鳥哥的 Linux 私房菜"),a(e)]),n("ul",null,[n("li",null,[s("至少看看到 "),n("a",T,[s("第十章、認識與學習BASH"),a(e)])])])]),n("li",null,[n("a",O,[s("Linux 就该这么学_w3cschool"),a(e)])]),n("li",null,[n("a",D,[s("vi/vim 文本编辑器"),a(e)])])]),q,t(`
## 常用指令

### cd

\`\`\`bash
cd <目标目录>
\`\`\`

目标目录可以是 绝对路径 或 相对路径 

### mv

\`\`\`bash
mv <原始目录> <目标目录>
\`\`\`
`),j,n("blockquote",null,[n("p",null,[n("a",R,[s("Systemd 入门教程：命令篇"),a(e)])])]),V,n("blockquote",null,[n("p",null,[n("a",K,[s("鸟哥的 Linux 私房菜 - 16.5 SELinux 初探"),a(e)])])]),G,n("blockquote",null,[n("p",null,[s("参考 "),n("a",z,[s("鳥哥的 Linux 私房菜 -- 第十五章、例行性工作排程(crontab)"),a(e)])])]),Y,n("blockquote",null,[n("p",null,[s("参考 "),n("a",H,[s("鳥哥的 Linux 私房菜 -- 第十五章、例行性工作排程(crontab)"),a(e)])])]),U,n("blockquote",null,[n("p",null,[n("a",J,[s("Linux tar 命令 | 菜鸟教程"),a(e)])])]),W,n("ol",null,[n("li",null,[s("参考 "),a(r,{to:"/serve/VM/VMware/#%E5%AE%89%E8%A3%85-vmware"},{default:p(()=>[s("安装 VMware Workstation")]),_:1})]),n("li",null,[s("前往 "),n("a",$,[s("CentOS 官网"),a(e)]),s(" 下载系统镜像 "),F])]),Z,X,Q])}const ln=c(M,[["render",nn],["__file","index.html.vue"]]);export{ln as default};
