<!--
<template>
  <div class="d2-page-cover">
    <div class="d2-page-cover__logo">
      <slot/>
    </div>
    <p class="d2-page-cover__sub-title">欢迎登录中残联系统</p>
  </div>
</template>

<style lang="scss" scoped>
.d2-page-cover {
  @extend %full;
  @extend %unable-select;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .d2-page-cover__logo {
    img {
      width: 200px;
    }
  }
  .d2-page-cover__title {
    margin: 0px;
    margin-bottom: 20px;
    font-weight: bold;
    color: $color-text-main;
  }
  .d2-page-cover__sub-title {
    margin: 0px;
    margin-bottom: 5px;
    color: $color-text-normal;
  }
  .d2-page-cover__build-time {
    margin: 0px;
    margin-bottom: 10px;
    font-size: 12px;
    color: $color-text-placehoder;
  }
}
</style>
-->
<template>
  <d2-container :filename="filename" type="card">
    <template slot="header">区域划分</template>
    <div style="height: 550px; margin: -16px;">
      <SplitPane :min-percent='20' :default-percent='30' split="vertical">
        <template slot="paneL">
          <div style="margin: 10px;">左</div>
          <pie1></pie1>
        </template>
        <template slot="paneR">
          <SplitPane split="horizontal">
            <template slot="paneL">
              <div style="margin: 10px;">右上</div>
              <Line1></Line1>
            </template>
            <template slot="paneR">
              <div style="margin: 10px;">右下</div>
              <bar1></bar1>
            </template>
          </SplitPane>
        </template>
      </SplitPane>
    </div>
  </d2-container>
</template>

<script>
    import line1 from '@/views/demo/charts/list/line/demo1/index.vue'
    import pie1 from '@/views/demo/charts/list/pie/demo4/index.vue'
    import bar1 from '@/views/demo/charts/list/bar/demo4/index.vue'
    export default {
        data () {
            return {
                filename: __filename
            }
        },
        mounted () {
            // 加载完成后显示提示
            this.showInfo()
        },
        methods: {
            // 显示提示
            showInfo () {
                this.$notify({
                    title: '提示',
                    message: '在横向或者纵向的分割线上拖拽调整分区大小'
                })
            }
        },
        components: {
            'Line1': line1,
            'Pie1': pie1,  //将别名demo 变成 组件 Demo
            'Bar1': bar1  //将别名demo 变成 组件 Demo
        }
    }
</script>
