<template>
  <d2-container :filename="filename" type="card">
    <template slot="header">
      <el-input v-model="input" placeholder="请输入内容" clearable style="width: 20%;margin-right: 10px;"></el-input>
      <el-button type="primary">搜索</el-button>
      <el-button type="primary" @click="searchVisible = true">高级搜索</el-button>
      <el-button type="primary" >重置</el-button>

      <el-dialog title="高级搜索" :visible.sync="searchVisible" width="30%" class="searchForm">
        <template>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
              <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
            </el-form-item>
            <el-form-item label="部门">
              <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱">
              <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
            </el-form-item>
            <el-form-item label="手机">
              <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
            </el-form-item>
            <el-form-item label="注册时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="修改时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="状态">
              <el-select v-model="form.region" placeholder="请选择状态">
                <el-option label="启用" value="shanghai"></el-option>
                <el-option label="停用" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="text-align: center">
              <el-button type="primary" @click="onSubmit" style="margin-left: -80px;">重置</el-button>
              <el-button type="primary" @click="onSubmit" >搜索</el-button>
              <el-button @click="searchVisible = false">返回</el-button>
            </el-form-item>
          </el-form>
        </template>
      </el-dialog>
    </template>
    <div style="height: 550px; margin: -16px;">
      <SplitPane :min-percent='20' :default-percent='20' split="vertical" >
        <template slot="paneL">
          <div style="margin: 10px;">
            <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
          </div>
          <div style="height: 470px; overflow-x: auto;overflow-y: auto; width: 240px;">
            <el-tree
                    class="filter-tree"
                    :data="data2"
                    show-checkbox
                    node-key="id"
                    default-expand-all
                    :filter-node-method="filterNode"
                    :default-checked-keys="[5]"
                    :props="defaultProps"
                    ref="tree2" style="width: 500px;">
            </el-tree>
          </div>
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
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                searchVisible: false,
                input:'',
                filterText: '',
                filename: __filename,
                data2: [{
                    id: 1,
                    label: '中国残联',
                    children: [{
                        id: 4,
                        label: '北京市',
                        children: [{
                            id: 9,
                            label: '北京市辖县'
                        }, {
                            id: 10,
                            label: '北京市辖区'
                        }]
                    },{
                        id: 4,
                        label: '河北省',
                        children: [{
                            id: 9,
                            label: '石家庄市'
                        }, {
                            id: 10,
                            label: '邯郸市'
                        }]
                    },{
                        id: 4,
                        label: '天津市',
                        children: [{
                            id: 9,
                            label: '天津市辖区'
                        }, {
                            id: 10,
                            label: '天津市辖县'
                        }]
                    },{
                        id: 4,
                        label: '山西省',
                        children: [{
                            id: 9,
                            label: '太原市'
                        }, {
                            id: 10,
                            label: '大同市'
                        }]
                    },{
                        id: 4,
                        label: '内蒙古自治区',
                        children: [{
                            id: 9,
                            label: '呼和浩特市'
                        }, {
                            id: 10,
                            label: '赤峰市'
                        }]
                    },{
                        id: 4,
                        label: '辽宁省',
                        children: [{
                            id: 9,
                            label: '沈阳市'
                        }, {
                            id: 10,
                            label: '大连市'
                        }]
                    },{
                        id: 4,
                        label: '黑龙江省',
                        children: [{
                            id: 9,
                            label: '哈尔滨市'
                        }, {
                            id: 10,
                            label: '齐齐哈尔市'
                        }]
                    },{
                        id: 4,
                        label: '新疆维吾尔自治区',
                        children: [{
                            id: 9,
                            label: '乌鲁木齐市',
                            children: [{
                                id: 9,
                                label: '天山区' ,
                                children: [{
                                    id: 9,
                                    label: '长江路街道办事处长江路街道办事处长江路街道办事处'
                                }, {
                                    id: 10,
                                    label: '和田街道办事处'
                                }]
                            }, {
                                id: 10,
                                label: '沙拉巴克区'
                            }]
                        }, {
                            id: 10,
                            label: '克拉玛依市'
                        }]
                    },{
                        id: 4,
                        label: '黑龙江农垦',
                        children: [{
                            id: 9,
                            label: '建三江管理局'
                        }, {
                            id: 10,
                            label: '牡丹江管理局'
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
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            }
        },
        components: {
            'Line1': line1,
            'Table1': table,  //将别名demo 变成 组件 Demo
            'Bar1': bar1  //将别名demo 变成 组件 Demo
        }
    }
</script>

<style>
  .d2-container-full__body{
    padding: 0px !important;
  }
  .d2-crud-body{
    padding: 0px !important;
  }
  .el-dialog__body{
     padding-top: 10px !important;
  }
  .el-dialog__header{
    /*background-color: #409EFF;*/
  }
  .el-form-item {
    margin-bottom: 10px !important;
  }
  .el-form-item__content{
    /*margin-left: 0px !important;*/
  }
  .searchForm .el-form-item__label{
    width: 80px !important;
  }
</style>