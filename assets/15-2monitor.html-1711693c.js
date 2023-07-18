import{_ as e,o as t,c as n,e as i}from"./app-ab31641a.js";const l={},d=i(`<h1 id="poe监控和调试命令" tabindex="-1"><a class="header-anchor" href="#poe监控和调试命令" aria-hidden="true">#</a> PoE监控和调试命令</h1><h2 id="show-power-inline" tabindex="-1"><a class="header-anchor" href="#show-power-inline" aria-hidden="true">#</a> <code>show power inline</code></h2><ul><li>命令： <ul><li><code>show power inline </code></li></ul></li><li>功能：显示全局 PoE 设置与状态。</li><li>参数：无。命令模式：特权用户模式。</li><li>缺省情况：无。</li><li>使用指南：各显示字段含义如下表</li></ul><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">Power Inline Status</td><td style="text-align:center;">全局功能开关状态</td></tr><tr><td style="text-align:center;">Power Avaliable</td><td style="text-align:center;">全局可用功率上限值</td></tr><tr><td style="text-align:center;">Power Used</td><td style="text-align:center;">全局功率已使用值</td></tr><tr><td style="text-align:center;">Power Remaining</td><td style="text-align:center;">全局剩余可用功率</td></tr><tr><td style="text-align:center;">Min Voltage</td><td style="text-align:center;">全局欠压阈值</td></tr><tr><td style="text-align:center;">Max Voltage</td><td style="text-align:center;">全局过压阈值</td></tr><tr><td style="text-align:center;">Police</td><td style="text-align:center;">功率优先策略开关状态</td></tr><tr><td style="text-align:center;">Legacy</td><td style="text-align:center;">检测非标准PD开关状态</td></tr><tr><td style="text-align:center;">Disconnect</td><td style="text-align:center;">断开PD的方式</td></tr><tr><td style="text-align:center;">HW Version</td><td style="text-align:center;">PoE模块硬件版本号</td></tr><tr><td style="text-align:center;">SW Version</td><td style="text-align:center;">PoE模块软件版本号</td></tr><tr><td style="text-align:center;">Mode</td><td style="text-align:center;">供电模式 signal：信号线供电（Alternative A） spare：空闲线供电（Alternative B）</td></tr></tbody></table><ul><li>举例： 显示当前PoE的全局状态。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Switch#show power inline Power Inline Status: On Power Available: 370 W Power Used: 0 W Power Remaining: 370 W
 Min Voltage: 44 V 
 Max Voltage: 57 V 
 Police: Off 
 Legacy: Off 
 Disconnect: Ac 
 Mode: Signal HW 
 Version: 30 
 SW Version: 05.0.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-power-inline-interface-ethernet" tabindex="-1"><a class="header-anchor" href="#show-power-inline-interface-ethernet" aria-hidden="true">#</a> <code>show power inline interface ethernet</code></h2><ul><li>命令： <ul><li><code>show power inline interface [ethernet &lt;interface-number&gt; | &lt;interface-name&gt;] </code></li></ul></li><li>功能：显示端口 PoE 的配置与状态。</li><li>参数：interface-list：端口列表。若缺省该参数则显示所有端口。</li><li>命令模式：特权用户模式。</li><li>缺省情况：无。</li><li>使用指南：各字段含义如下表字段</li></ul><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">Interface</td><td style="text-align:center;">以太网端口号</td></tr><tr><td style="text-align:center;">Status</td><td style="text-align:center;">供电状态 enable：使能disable：关闭供电功能</td></tr><tr><td style="text-align:center;">Oper</td><td style="text-align:center;">工作状态 on：PD连接并正常受电off：PD未连接faulty：PD检测出错deny：可用功率不够或PD申请功率过大</td></tr><tr><td style="text-align:center;">Power</td><td style="text-align:center;">端口当前使用的功率</td></tr><tr><td style="text-align:center;">Max</td><td style="text-align:center;">端口最大分配的功率</td></tr><tr><td style="text-align:center;">Current</td><td style="text-align:center;">端口当前的电流</td></tr><tr><td style="text-align:center;">Volt</td><td style="text-align:center;">端口当前的电压</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Priority            供电优先级 
                    critical：
                    极高优先级high：
                    高优先级low：低优先级

Class               分类    用途    PD输入功率（W）
                     0     缺省     0.44~12.95
                     1     可选     0.44~3.84
                     2     可选     3.84~6.49
                     3     可选     6.49~12.95
                     4     为未来用途预留 
                     被视为类别0 为未来用途预留。 一个兼容受电设备不可能提供一个四类信号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>举例：<code>显示当前PoE设备1到6端口的状态。</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch#show power inline interface ethernet1/0/1-6

Interface Status Oper Power(mW) Max(mW) Current(mA) Volt(V) Priority Class
------------ ------- ------ --------- ------- ----------- ------- -------- -----
Ethernet1/0/1    enable    off    0    15400    0    0    high   0 
Ethernet1/0/2    enable    off    0    15400    0    0    low    0 
Ethernet1/0/3    enable    off    0    15400    0    0    low    0 
Ethernet1/0/4    enable    off    0    15400    0    0    low    0 
Ethernet1/0/5    enable    off    0    15400    0    0    low    0 
Ethernet1/0/6    enable    off    0    15400    0    0    low    0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="debug-power-inline" tabindex="-1"><a class="header-anchor" href="#debug-power-inline" aria-hidden="true">#</a> <code>debug power inline</code></h2><ul><li>命令： <ul><li><code>debug power inline no debug power inline </code></li></ul></li><li>功能：PoE 功能排错开关。</li><li>参数：无。</li><li>命令模式：特权用户模式。</li><li>缺省情况：无。</li><li>使用指南：当打开该排错开关后，命令执行时的关键过程都会有相关打印信息，便于在出错时进行排错。使用 no 命令可关闭该排错功能。</li><li>举例：打开 PoE 的排错功能。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Switch#debug power inline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),r=[d];function a(s,c){return t(),n("div",null,r)}const u=e(l,[["render",a],["__file","15-2monitor.html.vue"]]);export{u as default};
