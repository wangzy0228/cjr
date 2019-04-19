export default {
  path: '/wzagz',
  title: '无障碍改造',
  icon: 'university',
  children: (pre => [
    { path: `${pre}index`, title: '无障碍改造', icon: 'home' },
    {
      title: '基础功能',
      icon: 'folder-o',
      children: [
        {
          title: '调整服务内容',
          children: [
            { path: `${pre}store/size`, title: '新增服务目录' },
            { title: '黑名单管理' }
          ]
        },
        { title: '机构管理' },
        { title: '儿童管理' }
      ]
    },
    /*{
      path: `${pre}store`,
      title: '全局状态管理',
      icon: 'bolt',
      children: [
        { path: `${pre}store/page`, title: '多标签页控制', icon: 'window-restore' },
        { path: `${pre}store/menu`, title: '菜单控制', icon: 'bars' },
        // { path: `${pre}store/size`, title: '全局尺寸', icon: 'font' },
        { path: `${pre}store/ua`, title: '浏览器信息', icon: 'info-circle' },
        { path: `${pre}store/gray`, title: '灰度模式', icon: 'eye' },
        { path: `${pre}store/fullscreen`, title: '全屏', icon: 'arrows-alt' },
        { path: `${pre}store/theme`, title: '主题', icon: 'diamond' },
        { path: `${pre}store/transition`, title: '页面过渡开关', icon: 'toggle-on' }
      ]
    },*/
    /*{
      path: `${pre}page-argu`,
      title: '参数传递和留存',
      icon: 'assistive-listening-systems',
      children: [
        { path: `${pre}page-argu/send`, title: '发送' },
        { path: `${pre}page-argu/get/username-from-menu?userid=userid-from-menu`, title: '接收' }
      ]
    },*/
    /*{
      path: `${pre}db`,
      title: '数据持久化',
      icon: 'database',
      children: [
        { path: `${pre}db/all`, title: '总览', icon: 'table' },
        { path: `${pre}db/public`, title: '公共存储', icon: 'users' },
        { path: `${pre}db/user`, title: '私有数据', icon: 'user' },
        { path: `${pre}db/page-public`, title: '路由存储', icon: 'file-o' },
        { path: `${pre}db/page-user`, title: '私有路由存储', icon: 'file-o' },
        { path: `${pre}db/page-snapshot-public`, title: '路由快照', icon: 'file' },
        { path: `${pre}db/page-snapshot-user`, title: '私有路由快照', icon: 'file' }
      ]
    },*/
    {
      path: `${pre}log`,
      title: '日志',
      icon: 'bullseye',
      children: [
        { path: `${pre}log/log`, title: '日志记录', icon: 'dot-circle-o' },
        { path: `${pre}log/error`, title: '错误捕捉', icon: 'bug' },
        { path: `${pre}log/ajax`, title: 'Ajax 错误', icon: 'bug' },
        { path: `${pre}log/console`, title: '控制台日志', icon: 'lightbulb-o' }
      ]
    },
    { path: `${pre}env`, title: '环境信息', icon: 'exclamation-circle' }
  ])('/wzagz/')
}
