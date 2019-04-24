import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/homework',
  name: 'demo-homework',
  meta,
  redirect: { name: 'demo-homework-index' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'index',
      name: `${pre}index`,
      component: _import('homework/index'),
      meta: {
        ...meta,
        title: '作业首页'
      }
    },
    {
      path: 'organizationmanage',
      name: `${pre}index`,
      component: _import('homework/organizationmanage'),
      meta: {
        ...meta,
        title: '机构管理'
      }
    },
    {
      path: 'servicemanage',
      name: `${pre}index`,
      component: _import('homework/servicemanage'),
      meta: {
        ...meta,
        title: '服务管理'
      }
    },
    {
      path: 'jgnb',
      name: `${pre}index`,
      component: _import('homework/jgnb'),
      props: true,
      meta: {
        ...meta,
        title: '机构年报'
      }
    },
    {
      path: 'jgtz',
      name: `${pre}index`,
      component: _import('homework/jgtz'),
      props: true,
      meta: {
        ...meta,
        title: '机构台账'
      }
    },
    {
      path: 'personmanage',
      name: `${pre}index`,
      component: _import('homework/personmanage'),
      props: true,
      meta: {
        ...meta,
        title: '带缓存编辑 DB'
      }
    },
    {
      path: 'heyihua',
      name: `${pre}index`,
      component: _import('homework/heyihua'),
      props: true,
      meta: {
        ...meta,
        title: '何毅花'
      }
    },
    {
      path: 'huihui',
      name: `${pre}index`,
      component: _import('homework/huihui'),
      props: true,
      meta: {
        ...meta,
        title: '慧慧'
      }
    },
    {
      path: 'wenqiang',
      name: `${pre}index`,
      component: _import('homework/wenqiang'),
      props: true,
      meta: {
        ...meta,
        title: '文强'
      }
    },
    {
      path: 'yongwt',
      name: `${pre}index`,
      component: _import('homework/yongwt'),
      props: true,
      meta: {
        ...meta,
        title: '文婷'
      }
    },
    {
      path: 'yingxiao',
      name: `${pre}index`,
      component: _import('homework/yingxiao'),
      props: true,
      meta: {
        ...meta,
        title: '英晓'
      }
    }
  ])('demo-homework-')
}
