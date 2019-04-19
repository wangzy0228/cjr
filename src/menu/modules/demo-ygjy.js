/* eslint-disable */
export default {
  path: '/ygjy',
  title: '阳光家园',
  icon: 'sun-o',
  children: (pre => [
    { path: `${pre}`, title: '阳光家园', icon: 'home' },
    {
      title: '机构管理',
      icon: 'table',
      children: [
        { path: `${pre}organizationmanage`, title: '机构管理' }
      ]
    },
    {
      title: '服务管理',
      icon: 'server',
      children: [
        { path: `${pre}servicemanage`, title: '服务管理' }
      ]
    },
    {
        title: '机构年审',
        icon: 'paper-plane-o',
        children: [
            { path: `${pre}personmanage`, title: '机构年审' }
        ]
    },
    {
        title: '机构台账',
        icon: 'newspaper-o',
        children: [
            { path: `${pre}jgtz`, title: '机构台账' }
        ]
    },
    {
        title: '机构年报',
        icon: 'dashboard',
        children: [
            { path: `${pre}jgnb`, title: '机构年报' }
        ]
    }
  ])('/ygjy/')
}
