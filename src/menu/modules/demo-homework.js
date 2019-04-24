/* eslint-disable */
export default {
  path: '/homework',
  title: '作业',
  icon: 'university',
  children: (pre => [
    { path: `${pre}`, title: '作业', icon: 'home' },
    {
      title: '王敏',
      icon: 'table',
      children: [
        { path: `${pre}organizationmanage`, title: '王敏' }
      ]
    },
    {
      title: '小潘',
      icon: 'server',
      children: [
        { path: `${pre}servicemanage`, title: '小潘' }
      ]
    },
    {
        title: '永生',
        icon: 'paper-plane-o',
        children: [
            { path: `${pre}personmanage`, title: '永生' }
        ]
    },
    {
        title: '冯师傅',
        icon: 'newspaper-o',
        children: [
            { path: `${pre}jgtz`, title: '冯师傅' }
        ]
    },
    {
        title: '张建',
        icon: 'dashboard',
        children: [
            { path: `${pre}jgnb`, title: '张建' }
        ]
    },
    {
        title: '惠惠',
        icon: 'dashboard',
        children: [
            { path: `${pre}huihui`, title: '惠惠' }
        ]
    },
    {
        title: '文强',
        icon: 'dashboard',
        children: [
            { path: `${pre}wenqiang`, title: '文强' }
        ]
    },
    {
        title: '何毅花',
        icon: 'dashboard',
        children: [
            { path: `${pre}heyihua`, title: '何毅花' }
        ]
    }
  ])('/homework/')
}
