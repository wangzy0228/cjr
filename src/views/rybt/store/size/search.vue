<template >
  <el-form ref="form" :model="form" label-width="80px" :inline="true">
    <el-form-item label="账号">
      <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
    </el-form-item>
    <el-form-item label="注册时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="部门">
      <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
    </el-form-item>
    <el-form-item label="电子邮箱">
      <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
    </el-form-item>
    <el-form-item label="修改时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="手机">
      <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
    </el-form-item>
    <el-form-item label="状态">
      <el-select v-model="form.region" placeholder="请选择状态" style="width: 180px;">
        <el-option label="启用" value="shanghai"></el-option>
        <el-option label="停用" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item style="text-align: center">
      <el-button type="primary" @click="onSubmit" icon="fa fa-search">搜索</el-button>
      <el-button type="primary" @click="onSubmit" >重置</el-button>
      <!--<el-button @click="searchVisible = false">返回</el-button>-->
    </el-form-item>
  </el-form>
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
            },
            onSubmit(){

            }
        },
        components: {
            'Line1': line1,
            'Table1': table,  //将别名demo 变成 组件 Demo
            'Bar1': bar1  //将别名demo 变成 组件 Demo
        }
    }
</script>
