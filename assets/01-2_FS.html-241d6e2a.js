import{_ as i,o as e,c as l,e as d}from"./app-ab31641a.js";const a={},n=d(`<h1 id="文件系统操作命令" tabindex="-1"><a class="header-anchor" href="#文件系统操作命令" aria-hidden="true">#</a> 文件系统操作命令</h1><h2 id="cd" tabindex="-1"><a class="header-anchor" href="#cd" aria-hidden="true">#</a> cd</h2><ul><li>命令：<code>cd &lt;directory&gt;</code></li><li>功能：修改当前存储设备的工作路径。</li><li>参数说明：<code>&lt;directory&gt;</code>为子目录名称，取值范围为1~80 个连续字符。</li><li>命令模式：特权模式。</li><li>缺省情况：默认的工作路径为 Flash 。</li><li>使用指南：执行该命令后，当前存储设备会切换到新的工作路径。修改后可以通过 pwd 命令进行查看。</li><li>举例：修改当前存储设备的工作路径为 flash 。<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch#cd flash：
Switch#pwd
flash:/
Switch#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="copy" tabindex="-1"><a class="header-anchor" href="#copy" aria-hidden="true">#</a> copy</h2><ul><li>命令：<code>copy &lt;source-file-url&gt; &lt;dest-file-url&gt;</code></li><li>功能：把交换机上的某个指定文件复制为新的文件。</li><li>参数说明：<code>&lt;source-file-url&gt;</code>为源文件；<code>&lt;dest-file-url&gt;</code>为目标文件。用户在 IMG 下对备用主控板卡和线卡上的文件进行操作时，源文件和目标文件的URL 格式必须满足以下要求：</li><li>1.源文件的 URL 格式中前缀必须为以下几种形式： <ul><li>“flash:/” 开头</li><li>“ftp://username:pass@server-ip/file-name”</li><li>“tftp://server-ip/file-name”</li></ul></li><li>2.目标文件的 URL 格式中前缀必须为以下几种形式： <ul><li>“flash:/” 开头</li><li>“ftp://username:pass@server-ip/file-name”</li><li>“tftp://server-ip/file-name”</li></ul></li><li>命令模式：特权模式。</li><li>缺省情况：无</li><li>使用指南：</li><li>1．在使用此命令时，当源文件的 URL 格式中前缀为 ftp:// 或 tftp:// 时，目标文件的 URL 格式中前缀不能为 ftp:// 或 tftp:// 。</li><li>2．在使用此命令时，应保证源文件存在，并且目标文件名不能和已有的目录名或已有的文件名重名，否则会提示 copy 操作执行失败或将已有文件覆盖等信息。</li><li><ol start="3"><li>如果目标文件与源文件在不同路径目录下，执行此命令后，也可以将不同路径目录下的文件复制到当前目录下。 URL 书写举例：Flash 设备上根路径下的 nos.img 文件的 URL 必须是 flash:/nos.img 。</li></ol></li><li>举例：将当前 flash:/nos.img 文件复制到 flash:/ 6.1.11.0.img 。<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch#copy flash:/nos.img flash:/nos-6.1.11.0.img
Copy flash:/nos.img to flash:/nos-6.1.11.0.img? [Y:N] y
Copyed file flash:/nos.img to flash:/nos-6.1.11.0.img.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> delete</h2><ul><li>命令：<code>delete &lt;file-url&gt;</code></li><li>功能：删除存储设备上的指定文件。</li><li>参数说明：<code>&lt;file-url&gt;</code>为要删除的文件全路径。</li><li>命令模式：特权模式。</li><li>缺省情况：无</li><li>使用指南：执行该命令后会将指定的文件删除。</li><li>举例：删除文件 flash:/nos.img 。<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch#delete flash:/nos5.img
Delete file flash:/nos5.img?[Y:N]y
Deleted file flash:/nos.img.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="dir" tabindex="-1"><a class="header-anchor" href="#dir" aria-hidden="true">#</a> dir</h2><ul><li>命令：<code>dir [WORD]</code></li><li>功能说明：显示存储设备中的指定目录的信息。</li><li>参数说明：<code>&lt;WORD&gt;</code>为显示的目录名称。可能有如下形式：目录名， slot-xx# 目录名， flash:/ 目录名， cf:/ 目录名。</li><li>命令模式：特权用户配置模式。</li><li>缺省情况：如果不输入<code>&lt;WORD&gt;</code>则显示当前工作目录的信息。</li><li>使用指南：执行此命令后会显示出指定目录下的文件与子目录信息。</li><li>注意：该命令不支持递归显示所有子目录信息。</li><li>举例：显示目录 flash:/ 的信息：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch#dir flash:/
nos.img             2,449,496   1980-01-01 00:01:06 ----
startup-config      2,064       1980-01-01 00:30:12 ----
Total   7, 932, 928 byte(s) in   4  file(s)， free 4, 966, 400 byte(s)
Switch#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> format</h2><ul><li>命令：<code>format &lt;device&gt;</code></li><li>功能：格式化存储设备。</li><li>参数说明：<code>&lt;device&gt;</code>为要格式化的设备名称。</li><li>命令模式：特权用户配置模式。</li><li>缺省情况：无。</li><li>使用指南： 1.执行格式化操作后将导致存储设备上的所有文件丢失，并且不可恢复。 2.Format 文件类型仅支持 FAT32 格式，其它格式不支持。 3.该命令不能对 flash 进行格式化。</li></ul><h2 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir" aria-hidden="true">#</a> mkdir</h2><ul><li>命令：<code>mkdir &lt;directory&gt;</code></li><li>功能：在指定存储设备的指定目录下创建子目录。</li><li>参数说明：<code>&lt;directory&gt;</code>为子目录名称，取值范围为 1~80 个连续字符。</li><li>命令模式：特权用户配置模式。</li><li>缺省情况：无。</li><li>使用指南：创建的目录名不能与指定目录下的其它目录或文件名重名，且不能在 flash 设备中创建子目录。如果创建过程中出错则提示错误信息。</li></ul><h2 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> mount</h2><p>S5750E机器不支持</p><h2 id="pwd" tabindex="-1"><a class="header-anchor" href="#pwd" aria-hidden="true">#</a> pwd</h2><ul><li>命令：<code>pwd</code></li><li>功能：显示当前工作路径。</li><li>参数说明：无</li><li>命令模式：特权用户配置模式。</li><li>缺省情况：默认的工作路径为 flash 。</li><li>举例：显示当前工作路径。<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch#pwd
flash:/
Switch#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="rename" tabindex="-1"><a class="header-anchor" href="#rename" aria-hidden="true">#</a> rename</h2><ul><li>命令：<code>rename &lt;source-file-url&gt; &lt;new-filename&gt;</code></li><li>功能：把交换机上的某个指定的文件重命名为新的文件名。</li><li>参数说明：<code>&lt;source-file-url&gt;</code>为源文件，可以带有文件路径；<code>&lt;new-filename&gt;</code>为不含路径的新文件名。</li><li>命令模式：特权用户配置模式。</li><li>缺省情况：无。</li><li>使用指南：在使用此命令的时候，当新的文件名与已经存在的目录或文件均不重名且文件未</li><li>被使用时，可以将文件重命名，否则提示重命名操作失败。</li><li>举例：将当前工作路径下的文件 nos.img 重命名为 nos-6.1.11.0.img 。<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch#rename nos5.img nos-6.1.11.0.img
Rename flash:/nos5.img to flash:/nos-6.1.11.0.img ok！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="rmdir" tabindex="-1"><a class="header-anchor" href="#rmdir" aria-hidden="true">#</a> rmdir</h2><ul><li>命令：<code>rmdir &lt;directory&gt;</code></li><li>功能：在指定存储设备的指定目录下删除子目录。</li><li>参数说明：<code>&lt;directory&gt;</code>为子目录名称，取值范围为 1~80 个连续字符。</li><li>命令模式：特权用户配置模式。</li><li>缺省情况：无。</li><li>使用指南：被删除的目录必须存在且为空目录，即删除目录前必须先删除该目录下的所有文件，否则会给出错误提示。如果子目录删除成功，提示成功信息；如果子目录删除过程中出错，则提示错误信息。</li></ul><h2 id="unmoun" tabindex="-1"><a class="header-anchor" href="#unmoun" aria-hidden="true">#</a> unmoun</h2><p>S5750E机器不支持</p>`,23),s=[n];function t(r,c){return e(),l("div",null,s)}const h=i(a,[["render",t],["__file","01-2_FS.html.vue"]]);export{h as default};