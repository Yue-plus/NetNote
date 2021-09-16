import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'NetNote',
  description: '只要学不死，就往死里学！',

  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/logo_192.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/logo_192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  themeConfig: {
    navbar: [
      {
        text: '起步',
        children: [
          '/start/start.md',
          '/start/use_GitHub/',
          '/start/use_VScode/',
          '/start/use_IDEA/',
          '/start/markdown.md',
          '/start/mermaid.md',
          '/start/yaml.md'
        ]
      },{
        text: '游戏',
        children: [
          '/game/minecraft.md',
          '/game/unity.md',
          '/game/UnrealEngine.md',
          '/game/GodotEngine.md'
        ]
      },{
        text: '编程',
        children: [
          '/coding/Web/',
          '/serve/WS/PS/',
          '/coding/Python/',
          '/coding/Java/',
          '/coding/Spring/',
          '/coding/MariaDB/',
          '/coding/Redis/',
          '/coding/RabbitMQ/',
          '/coding/Docker/'
        ]
      },{
        text: '网络搭建',
        children: [
          '/net/01-base/',
          '/net/switch/',
          '/net/router/',
          '/net/acap/',
          '/net/security/',
          '/net/wan/',
          {
            text: '参考手册',
            children: [
              '/net/manual/operate/',
              '/net/manual/command/'
            ]
          },{
            text: '思科模拟器',
            children: [
              {text: 'Cisco Packet Tracer Help', link: 'https://help.cisco.yueplus.ink/Simplified%20Chinese/'},
              {text: 'GitHub', link: 'https://github.com/Yue-plus/cisco_packet_tracer_help'}
            ]
          }
        ]
      },{
        text: '系统服务',
        children: [
          '/serve/base/',
          '/serve/VM/',
          '/serve/WS/',
          '/serve/Linux/'
        ]
      },{
        text: 'Gitee',
        link: 'https://gitee.com/yue_plus/NetNote'
      }
    ],
    sidebar: {
      '/start/': [{
        text: '起步',
        children: [
          '/start/start.md',
          '/start/use_GitHub/README.md',
          '/start/use_VScode/README.md',
          '/start/use_IDEA/README.md',
          '/start/markdown.md',
          '/start/mermaid.md',
          '/start/yaml.md'
        ]
      }],
      '/game/': [{
        text: '游戏',
        children: [
          '/game/minecraft.md',
          '/game/unity.md',
          '/game/UnrealEngine.md',
          '/game/GodotEngine.md'
        ]
      }],
      '/coding/Spring/Framework/WebServlet/': [{
        text: 'Spring Projects',
        children: [
          '/coding/Spring/README.md',
          '/coding/Spring/Framework/WebServlet/1.SpringWebMVC.md',
          '/coding/Spring/Framework/WebServlet/2.REST_Clients.md',
          '/coding/Spring/Framework/WebServlet/3.Testing.md',
          '/coding/Spring/Framework/WebServlet/4.WebSockets.md',
          '/coding/Spring/Framework/WebServlet/5.OtherWebFrameworks.md'
        ]
      }],
      '/coding/': [{
        text: '编程',
        children: [
          '/coding/Web/README.md',
          '/serve/WS/PS/README.md',
          '/coding/Java/README.md',
          '/coding/Spring/README.md',
          '/coding/Python/README.md',
          '/coding/MariaDB/README.md',
          '/coding/Redis/README.md',
          '/coding/RabbitMQ/README.md',
          '/coding/Docker/README.md'
        ]
      }],
      '/net/manual/command/': [{
        text: '命令手册',
        children: [
          '/net/manual/command/01-1_base.md',
          '/net/manual/command/01-2_FS.md',
          '/net/manual/command/02_interface.md',
          '/net/manual/command/03-1_Vlan.md',
          '/net/manual/command/03-2_MAC.md',
          '/net/manual/command/04_MSTP.md',
          '/net/manual/command/07_DHCP.md',
          '/net/manual/command/08-1_routing-strategy.md',
          '/net/manual/command/08-2_static-routing.md',
          '/net/manual/command/08-3_RIP.md',
          '/net/manual/command/08-4_RIPng.md',
          '/net/manual/command/14-1.md',
          '/net/manual/command/14-2.md',
          '/net/manual/command/14-3.md',
          '/net/manual/command/14-4.md',
          '/net/manual/command/15-1command.md',
          '/net/manual/command/15-2monitor.md',
          '/net/manual/command/16-1_VSF-base.md',
          '/net/manual/command/16-2_VSF-MAD.md',
          '/net/manual/command/16-3_VSF-debug.md',
          '/net/manual/command/17_info-center.md'
        ]
      }],
      '/net/manual/operate/': [{
        text: '操作手册',
        children: [
          '/net/manual/operate/07_DHCP.md'
        ]
      }],
      '/net/': [{
        text: '网络搭建',
        children: [
          '/net/01-base/README.md',
          '/net/switch/README.md',
          '/net/router/README.md',
          '/net/acap/README.md',
          '/net/security/README.md',
          '/net/wan/README.md'
        ]
      }],
      '/serve/base/': [{
        text: '基本操作',
        children: [
          '/serve/base/sys_install/README.md'
        ]
      }],
      '/serve/VM/': [{
        text: '云平台与虚拟机',
        children: [
          '/serve/VM/DCC-CRL1000/README.md',
          '/serve/VM/VMware/README.md',
          '/serve/VM/Hyper-V/README.md'
        ]
      }],
      '/serve/WS/': [{
        text: 'Windows Server',
        children: [
          '/serve/WS/AD/README.md',
          '/serve/WS/DNS/README.md',
          '/serve/WS/IIS/README.md',
          '/serve/WS/DHCP.md',
          '/serve/WS/WDS/README.md',
          '/serve/WS/FS/README.md',
          '/serve/WS/DFS.md',
          '/serve/WS/NLB/README.md',
          '/serve/WS/FailoverCluster.md',
          '/serve/WS/PS/README.md'
        ]
      }],
      '/serve/Linux/': [{
        text: 'Linux',
        children: [
          '/serve/Linux/01-Base/README.md',
          '/serve/Linux/02-Chrony/README.md',
          '/serve/Linux/03-NFS/README.md',
          '/serve/Linux/04-MariaDB/README.md',
          '/serve/Linux/05-Apache/README.md',
          '/serve/Linux/06-Tomcat/README.md',
          '/serve/Linux/07-Samba/README.md',
          '/serve/Linux/08-NIS/README.md',
          '/serve/Linux/09-Postfix/README.md',
          '/serve/Linux/10-Pacemaker/README.md'
        ]
      }]
    },
    repo: 'https://github.com/Yue-plus/NetNote',
    repoLabel: 'GitHub',
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',
    docsRepo: 'https://github.com/Yue-plus/NetNote',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    contributors: true,
    contributorsText: '此页贡献者',
    lastUpdatedText: '上次更新'
  },

  plugins: [
    ['@vuepress/pwa'],
    ['@vuepress/plugin-pwa-popup', {
      locales: {
        '/': {
          message: '发现新内容可用',
          buttonText: '刷新',
        }
      }
    }],
    // ['@vuepress/docsearch', {
    //   appId: '0YWM7BGDQI',
    //   apiKey: '9dc6fe12516690be51dea370e78001f6',
    //   indexName: 'note.yueplus.ink',
    //   locales: {
    //     '/': {
    //       placeholder: '在此搜索文档'
    //     }
    //   }
    // }],
    ['@vuepress/plugin-search', {
      locales: {
        '/': { placeholder: '搜索' }
      }
    }]
  ]
})