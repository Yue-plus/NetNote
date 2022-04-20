const navbar = [
  {
    text: '致下一届',
    link: '/ToNext.html'
  },{
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
    text: '数学',
    link: 'https://math.note.yue.zone/'
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
      '/coding/PostgreSQL',
      '/coding/Redis/',
      '/coding/RabbitMQ/',
      '/coding/Docker/'
    ]
  },{
    text: '网络搭建',
    children: [
      '/net/00-Abbreviation/',
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
    text: '网络安全',
    children: [
      {text: '中华人民共和国网络安全法', link: 'http://www.cac.gov.cn/2016-11/07/c_1119867116.htm'},
      '/hack/base/'
    ]
  },{
    text: '系统服务',
    children: [
      '/serve/base/',
      '/serve/VM/',
      '/serve/WS/',
      '/serve/CentOS/'
    ]
  },{
    text: 'Gitee',
    link: 'https://gitee.com/yue_plus/NetNote'
  }
]

export default navbar