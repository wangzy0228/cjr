<template>
  <d2-container :filename="filename" type="card">
    <template slot="header">区域划分

    </template>
    <div style="height: 550px; margin: -16px;">
      <SplitPane :min-percent='20' :default-percent='20' split="vertical">
        <template slot="paneL">
          <div style="margin: 10px;">左</div>
          <el-tree
                  :data="data2"
                  show-checkbox
                  node-key="id"
                  :default-expanded-keys="[2, 3]"
                  :default-checked-keys="[5]"
                  :props="defaultProps">
          </el-tree>
        </template>
        <template slot="paneR">
          <Table1></Table1>
        </template>
      </SplitPane>
    </div>
  </d2-container>
</template>

<script>
/* eslint-disable */
import line1 from '@/views/demo/charts/list/line/demo1/index.vue'
import bar1 from '@/views/demo/charts/list/bar/demo4/index.vue'
import table from '@/views/demo/d2-crud/demo4/index.vue'

    export default {
        data() {
            return {
                filename: __filename,
                data2: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        mounted () {
            // 加载完成后显示提示
//            this.showInfo()
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
            'Table1': table,  //将别名demo 变成 组件 Demo
            'Bar1': bar1  //将别名demo 变成 组件 Demo
        }
    }
</script>