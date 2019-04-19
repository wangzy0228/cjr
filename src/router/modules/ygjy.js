import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/ygjy',
  name: 'demo-ygjy',
  meta,
  redirect: { name: 'demo-ygjy-index' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'index',
      name: `${pre}index`,
      component: _import('ygjy/index'),
      meta: {
        ...meta,
        title: '阳光家园首页'
      }
    },
    {
      path: 'organizationmanage',
      name: `${pre}index`,
      component: _import('ygjy/organizationmanage'),
      meta: {
        ...meta,
        title: '机构管理'
      }
    },
    {
      path: 'servicemanage',
      name: `${pre}index`,
      component: _import('ygjy/servicemanage'),
      meta: {
        ...meta,
        title: '服务管理'
      }
    },
    {
      path: 'jgnb',
      name: `${pre}index`,
      component: _import('ygjy/jgnb'),
      props: true,
      meta: {
        ...meta,
        title: '机构年报'
      }
    },
    {
      path: 'jgtz',
      name: `${pre}index`,
      component: _import('ygjy/jgtz'),
      props: true,
      meta: {
        ...meta,
        title: '机构台账'
      }
    },
    {
      path: 'personmanage',
      name: `${pre}index`,
      component: _import('ygjy/personmanage'),
      props: true,
      meta: {
        ...meta,
        title: '带缓存编辑 DB'
      }
    }
  ])('demo-ygjy-')
}
