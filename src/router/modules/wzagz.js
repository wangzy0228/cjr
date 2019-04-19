import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/wzagz',
  name: 'demo-wzagz',
  meta,
  redirect: { name: 'demo-wzagz-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'index', name: `${pre}index`, component: _import('wzagz/index'), meta: { ...meta, title: '无障碍改造首页' } },
    // { path: 'wzadjcd', name: `${pre}wzadjcd`, component: _import('wazgz/wzadjcd'), meta: { ...meta, title: '多级菜单' } },
    { path: 'store/page', name: `${pre}store-page`, component: _import('wzagz/store/page'), meta: { ...meta, cache: true, title: '多标签页控制' } },
    { path: 'store/menu', name: `${pre}store-menu`, component: _import('wzagz/store/menu'), meta: { ...meta, title: '菜单控制' } },
    { path: 'store/size', name: `${pre}store-size`, component: _import('wzagz/store/size'), meta: { ...meta, title: '新增服务目录' } },
    { path: 'store/ua', name: `${pre}store-ua`, component: _import('wzagz/store/ua'), meta: { ...meta, title: '浏览器信息' } },
    { path: 'store/gray', name: `${pre}store-gray`, component: _import('wzagz/store/gray'), meta: { ...meta, title: '灰度模式' } },
    { path: 'store/fullscreen', name: `${pre}store-fullscreen`, component: _import('wzagz/store/fullscreen'), meta: { ...meta, title: '全屏' } },
    { path: 'store/theme', name: `${pre}store-theme`, component: _import('wzagz/store/theme'), meta: { ...meta, title: '主题' } },
    { path: 'store/transition', name: `${pre}store-transition`, component: _import('wzagz/store/transition'), meta: { ...meta, title: '页面过渡开关' } },
    { path: 'page-cache/on', name: `${pre}page-cache-on`, component: _import('wzagz/page-cache/on.vue'), meta: { ...meta, cache: true, title: '开启缓存' } },
    { path: 'page-cache/off', name: `${pre}page-cache-off`, component: _import('wzagz/page-cache/off.vue'), meta: { ...meta, title: '关闭缓存' } },
    { path: 'page-cache/params/:id', name: `${pre}page-cache-params`, component: _import('wzagz/page-cache/params.vue'), meta: { ...meta, cache: true, title: '带参路由缓存' }, props: true },
    { path: 'page-argu/send', name: `${pre}page-argu-send`, component: _import('wzagz/page-argu/send.vue'), meta: { ...meta, title: '参数传递 发送' } },
    { path: 'page-argu/get/:username', name: `${pre}page-argu-get`, component: _import('wzagz/page-argu/get.vue'), meta: { ...meta, title: '参数传递 接收' } },
    { path: 'db/all', name: `${pre}db-all`, component: _import('wzagz/db/all'), meta: { ...meta, title: '总览' } },
    { path: 'db/public', name: `${pre}db-public`, component: _import('wzagz/db/public'), meta: { ...meta, title: '公共存储' } },
    { path: 'db/user', name: `${pre}db-user`, component: _import('wzagz/db/user'), meta: { ...meta, title: '私有存储' } },
    { path: 'db/page-public', name: `${pre}db-page-public`, component: _import('wzagz/db/page-public'), meta: { ...meta, title: '路由存储' } },
    { path: 'db/page-user', name: `${pre}db-page-user`, component: _import('wzagz/db/page-user'), meta: { ...meta, title: '私有路由存储' } },
    { path: 'db/page-snapshot-public', name: `${pre}db-page-snapshot-public`, component: _import('wzagz/db/page-snapshot-public'), meta: { ...meta, title: '路由快照' } },
    { path: 'db/page-snapshot-user', name: `${pre}db-page-snapshot-user`, component: _import('wzagz/db/page-snapshot-user'), meta: { ...meta, title: '私有路由快照' } },
    { path: 'log/ajax', name: `${pre}log-ajax`, component: _import('wzagz/log/ajax'), meta: { ...meta, title: 'Ajax 错误' } },
    { path: 'log/console', name: `${pre}log-console`, component: _import('wzagz/log/console'), meta: { ...meta, title: '控制台日志' } },
    { path: 'log/error', name: `${pre}log-error`, component: _import('wzagz/log/error'), meta: { ...meta, title: '错误捕捉' } },
    { path: 'log/log', name: `${pre}log-log`, component: _import('wzagz/log/log'), meta: { ...meta, title: '日志记录' } },
    { path: 'env', name: `${pre}env`, component: _import('wzagz/env'), meta: { ...meta, title: '环境信息' } }
  ])('demo-wzagz-')
}
