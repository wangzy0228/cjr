export default {
  path: '/demo/business',
  title: '精准康复',
  icon: 'flask',
  children: (pre => [
    { path: `${pre}index`, title: '精准康复', icon: 'home' },
    {
      title: '康复需求采集',
      icon: 'table',
      children: [
        { path: `${pre}table/1`, title: '残疾人基本信息' }
      ]
    },
    {
      title: '上门评估列表',
      icon: 'github',
      children: [
        { path: `${pre}issues/142`, title: '康复机构位置' }
      ]
    }
  ])('/demo/business/')
}
