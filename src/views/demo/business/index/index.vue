<template>
  <d2-container :filename="filename" type="ghost">
    <!--<d2-module-index-banner slot="header" v-bind="banner"/>-->
    <!--<d2-module-index-menu :menu="menu"/>-->
    <Radar1></Radar1>
  </d2-container>
</template>

<script>
import menu from '@/menu/modules/demo-business'
import radar1 from '@/views/demo/charts/list/radar/demo1/index.vue'
export default {
  data () {
    return {
      filename: __filename,
      menu,
      banner: {
        title: 'DEMOS',
        subTitle: '提供借鉴和参考的页面'
      }
    }
  },
  components: {
      'Radar1': radar1  //将别名demo 变成 组件 Demo
  }
}
</script>
