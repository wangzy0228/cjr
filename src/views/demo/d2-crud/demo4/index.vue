<template>
  <d2-container :filename="filename">
    <template slot="header">
      <!--<el-button type="primary" @click="addRow">新增</el-button>-->
      <el-button type="primary">注销</el-button>
      <el-button type="primary">启用</el-button>
      <el-button type="primary">禁用</el-button>
      <el-button type="primary">导出</el-button>
      <!--<Dialog1></Dialog1>-->
      <el-button type="primary" @click="outerVisible = true">新增</el-button>

      <el-dialog title="新增" :visible.sync="outerVisible" ref="d2Crud" :add-template="addTemplate" >
        <el-dialog
                width="30%"
                title="选择部门"
                :visible.sync="innerVisible"
                close-on-click-modal="false"
                append-to-body>
          <el-tree
                  :data="data2"
                  show-checkbox
                  node-key="id"
                  :default-expanded-keys="[2, 3]"
                  :default-checked-keys="[5]"
                  :props="defaultProps">
          </el-tree>
        </el-dialog>
        <template>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">
              <d2-crud
                      ref="d2Crud"
                      :columns="columns"
                      :data="data"
                      :add-template="addTemplate"
                      :form-options="formOptions"
                      @row-add="handleRowAdd"
                      @cell-click="handleCellClick"
                      @dialog-cancel="handleDialogCancel"
                      :options="options"/>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="身份证号">
                  <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
                </el-form-item>
                <el-form-item label="状态">
                  <el-select v-model="form.region" placeholder="请选择状态">
                    <el-option label="启用" value="shanghai"></el-option>
                    <el-option label="停用" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="出生日期">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="性别">
                  男<el-switch v-model="form.delivery"></el-switch>女
                </el-form-item>
                <el-form-item label="残疾类别">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="重度肢体" name="type"></el-checkbox>
                    <el-checkbox label="多重" name="type"></el-checkbox>
                    <el-checkbox label="视力" name="type"></el-checkbox>
                    <el-checkbox label="智力" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="学历">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="本科"></el-radio>
                    <el-radio label="硕士研究生"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="备注">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">保存</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </template>

        <!--<el-button slot="header" style="margin-bottom: 5px" @click="addRow">新增</el-button>-->
        <div slot="footer" class="dialog-footer">
          <el-button @click="outerVisible = false">取 消</el-button>
          <el-button type="primary" @click="innerVisible = true">打开内层</el-button>
        </div>
      </el-dialog>

    </template>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      :add-template="addTemplate"
      :form-options="formOptions"
      @row-add="handleRowAdd"
      @dialog-cancel="handleDialogCancel"
      :options="options"/>
    <!--<el-button slot="header" style="margin-bottom: 5px " @click="addRow">新增</el-button>-->

  </d2-container>
</template>

<script>
  /* eslint-disable */
  import dialog from '@/views/demo/d2-crud/demo4/dialog.vue'
  import line1 from '@/views/demo/charts/list/line/demo1/index.vue'

export default {
  data () {
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
        activeName: 'first',
        outerVisible: false,
        innerVisible: false,
        filename: __filename,
//        filename: __filename,
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
        },
      columns: [
        {
          title: '日期',
          key: 'date',
          width: '180'
        },
        {
          title: '姓名',
          key: 'name',
          width: '180'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      addTemplate: {
        key: {
            title: '卡密',
            value: ''
        },
        value: {
            title: '面值',
            value: ''
        },
        admin: {
            title: '管理员',
            value: ''
        },
        dateTimeCreat: {
            title: '创建时间',
            type:"datetime",
            value: ''
        },
        dateTimeUse: {
            title: '使用时间',
            value: ''
        }
      },
      formOptions: {
          labelWidth: '80px',
          labelPosition: 'left',
          saveLoading: false
      },
      addRules: {
          key: [ { required: true, message: '请输入卡密', trigger: 'blur' } ],
          value: [ { required: true, message: '请输入面值', trigger: 'blur' } ],
          admin: [ { required: true, message: '请输入管理员', trigger: 'blur' } ],
          dateTimeCreat: [ { required: true, message: '请输入创建时间', trigger: 'blur' } ],
          dateTimeUse: [ { required: true, message: '请输入使用时间', trigger: 'blur' } ]
      },
      options: {
        rowClassName ({ row, rowIndex }) {
          if (rowIndex === 1) {
            return 'warning-row'
          } else if (rowIndex === 3) {
            return 'success-row'
          }
          return ''
        },border: true
      }
    }
  },
    methods: {
        addRow () {
            this.$refs.d2Crud.showDialog({
                mode: 'add'
            })
        },
        handleRowAdd (row, done) {
//            this.formOptions.saveLoading = true
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
            /*setTimeout(() => {
                console.log(row)
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                done()
                this.formOptions.saveLoading = false
            }, 300)*/
        },
        handleDialogCancel (done) {
            this.$message({
                message: '取消保存',
                type: 'warning'
            })
            done()
        },
        open2() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        changeInnerDialog(){
            this.innerVisible = true;
//            this.$message({type:'success',message:'也可以了'});
        },handleCellClick(){
            this.$message({type:'success',message:'可以了'});
        }
    },
    components: {
        'Line1': line1,
        'Dialog1': dialog  //将别名demo 变成 组件 Demo
    }

}
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
