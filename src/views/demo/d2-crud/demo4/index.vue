<template>
  <d2-container :filename="filename">
    <template slot="header">
      <el-button type="primary" @click="outerVisible = true">新增</el-button>
      <el-button type="info">注销</el-button>
      <el-button type="success">启用</el-button>
      <el-button type="danger">禁用</el-button>
      <el-button type="primary" plain @click="exportExcel">导出</el-button>

      <el-dialog title="新增/编辑" :visible.sync="outerVisible" ref="d2Crud" :add-template="addTemplate" >
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
            <el-tab-pane label="基本信息" name="first">
              <el-form ref="form" :model="form" label-width="80px" :inline="true">
                <el-form-item label="用户账号" class="ml20">
                  <el-input v-model="form.name" ></el-input>
                </el-form-item>
                <el-form-item label="密码" class="ml50">
                  <el-input v-model="form.name" ></el-input>
                </el-form-item>
                <el-form-item label="用户编号" class="ml20">
                  <el-input v-model="form.name" ></el-input>
                </el-form-item>
                <el-form-item label="状态" class="ml50">
                  <el-select v-model="form.region" placeholder="请选择状态">
                    <el-option label="启用" value="shanghai"></el-option>
                    <el-option label="停用" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="姓名" class="ml20">
                  <el-input v-model="form.name" ></el-input>
                </el-form-item>
                <el-form-item label="性别" class="ml50">
                  男<el-switch v-model="form.delivery"></el-switch>女
                </el-form-item>
                <el-form-item label="所在部门" class="ml20">
                  <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
                </el-form-item>
                <el-form-item label="兼职部门" class="ml50">
                  <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
                </el-form-item>
                <el-form-item label="手机" class="ml20">
                  <el-input v-model="form.name" ></el-input>
                </el-form-item>
                <el-form-item label="电子邮件" class="ml50">
                  <el-input v-model="form.name" ></el-input>
                </el-form-item>
                <el-form-item label="验证方式" class="ml20">
                  <el-select v-model="form.region" placeholder="请选择验证方式">
                    <el-option label="密码验证" value="shanghai"></el-option>
                    <el-option label="证书验证" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="图片上传" style="margin-left: 35px;">
                  <el-input v-model="form.name" ></el-input>
                </el-form-item>
                <el-form-item label="备注" style="width: 650px" class="ml20">
                  <el-input type="textarea" v-model="form.desc" style="width: 500px"></el-input>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="工作信息" name="second">
              <el-form ref="form" :model="form" label-width="80px" :inline="true">
                <el-form-item label="身份证号" class="ml20">
                  <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
                </el-form-item>
                <el-form-item label="家庭电话" class="ml50">
                  <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
                </el-form-item>
                <el-form-item label="职务" class="ml20">
                  <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
                </el-form-item>
                <el-form-item label="兼职职务" class="ml50">
                  <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
                </el-form-item>
                <el-form-item label="工作所在地" class="ml20">
                  <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
                </el-form-item>
                <el-form-item label="邮编" class="ml50">
                  <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
                </el-form-item>
                <el-form-item label="工作电话" class="ml20">
                  <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
                </el-form-item>
                <el-form-item label="传真" class="ml50">
                  <el-input v-model="form.name" @focus="changeInnerDialog" ></el-input>
                </el-form-item>
                <el-form-item label="是否党员" class="ml20" style="width: 500px">
                  是<el-switch v-model="form.delivery"></el-switch>否
                </el-form-item>
                <el-form-item label="工作职责" class="ml20" style="width: 650px">
                  <el-input type="textarea" v-model="form.desc" style="width: 500px"></el-input>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </template>

        <!--<el-button slot="header" style="margin-bottom: 5px" @click="addRow">新增</el-button>-->
        <div slot="footer" class="dialog-footer" style="text-align: center">
          <el-button type="primary">保存</el-button>
          <el-button @click="outerVisible = false">关闭</el-button>
        </div>
      </el-dialog>

    </template>
    <div>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      selection-row
      :data="data"
      :add-template="addTemplate"
      :form-options="formOptions"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
      @row-add="handleRowAdd"
      @dialog-cancel="handleDialogCancel"
      :options="options"/>
    <!--<el-button slot="header" style="margin-bottom: 5px " @click="addRow">新增</el-button>-->

    </div>
    <template slot="footer" style="text-align: right;">
      <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
      </el-pagination>
    </template>

  </d2-container>
</template>

<script>
  /* eslint-disable */
  import dialog from '@/views/demo/d2-crud/demo4/dialog.vue'
  import line1 from '@/views/demo/charts/list/line/demo1/index.vue'
  // 假数据
  import table from './data'

export default {
  data () {
    return {
        currentPage4: 4,
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
            title: '账号',
            key: 'zhanghao',
            width: '180',
            sortable:true,
            fixed:"left",
            label: '账号',
            prop: 'zhanghao'
        },
        {
            title: '姓名',
            key: 'name',
            width: '180',
            label: '姓名',
            prop: 'name'
        },
        {
          title: '性别',
          key: 'sex',
            label: '性别',
            prop: 'sex'
        },{
            title: '部门',
            key: 'dept',
            width: '180',
            label: '部门',
            prop: 'dept'
          },
        {
            title: '电子邮箱',
            key: 'email',
            width: '180',
            label: '电子邮箱',
            prop: 'email'
        },
        {
            title: '手机',
            key: 'phone',
            width: '180',
            label: '手机',
            prop: 'phone'
        },
        {
            title: '注册时间',
            key: 'registryTime',
            width: '180',
            label: '注册时间',
            prop: 'registryTime'
        },
        {
            title: '修改时间',
            key: 'updateTime',
            width: '180',
            label: '修改时间',
            prop: 'updateTime'
        },
        {
            title: '状态',
            key: 'state',
            label: '状态',
            prop: 'state'
          /*,
            fixed:"right"*/
        }
      ],
      data: [
        {
          zhanghao: '1100002',
          name: '王小虎',
          sex: '男',
          dept: '北京市残联',
          email: 'wangzy@mail.taiji.com',
          phone: '18515163440',
          registryTime: '2016-05-02',
          updateTime: '王小虎',
          state: '启用'
        },
        {
            zhanghao: '1100001',
            name: '王小虎',
            sex: '男',
            dept: '北京市残联',
            email: 'wangzy@mail.taiji.com',
            phone: '18515163440',
            registryTime: '2016-05-02',
            updateTime: '王小虎',
            state: '启用'
        },
        {
            zhanghao: '1100003',
            name: '王小虎',
            sex: '男',
            dept: '北京市残联',
            email: 'wangzy@mail.taiji.com',
            phone: '18515163440',
            registryTime: '2016-05-02',
            updateTime: '王小虎',
            state: '启用'
        },
        {
            zhanghao: '1100003',
            name: '王小虎',
            sex: '男',
            dept: '北京市残联',
            email: 'wangzy@mail.taiji.com',
            phone: '18515163440',
            registryTime: '2016-05-02',
            updateTime: '王小虎',
            state: '启用'
        },
        {
            zhanghao: '1100003',
            name: '王小虎',
            sex: '男',
            dept: '北京市残联',
            email: 'wangzy@mail.taiji.com',
            phone: '18515163440',
            registryTime: '2016-05-02',
            updateTime: '王小虎',
            state: '启用'
        },
        {
            zhanghao: '1100003',
            name: '王小虎',
            sex: '男',
            dept: '北京市残联',
            email: 'wangzy@mail.taiji.com',
            phone: '18515163440',
            registryTime: '2016-05-02',
            updateTime: '王小虎',
            state: '启用'
        },
        {
            zhanghao: '1100003',
            name: '王小虎',
            sex: '男',
            dept: '北京市残联',
            email: 'wangzy@mail.taiji.com',
            phone: '18515163440',
            registryTime: '2016-05-02',
            updateTime: '王小虎',
            state: '启用'
        },
        {
            zhanghao: '1100003',
            name: '王小虎',
            sex: '男',
            dept: '北京市残联',
            email: 'wangzy@mail.taiji.com',
            phone: '18515163440',
            registryTime: '2016-05-02',
            updateTime: '王小虎',
            state: '启用'
        },
        {
            zhanghao: '1100003',
            name: '王小虎',
            sex: '男',
            dept: '北京市残联',
            email: 'wangzy@mail.taiji.com',
            phone: '18515163440',
            registryTime: '2016-05-02',
            updateTime: '王小虎',
            state: '启用'
        },
        {
            zhanghao: '1100003',
            name: '王小虎',
            sex: '男',
            dept: '北京市残联',
            email: 'wangzy@mail.taiji.com',
            phone: '18515163440',
            registryTime: '2016-05-02',
            updateTime: '王小虎',
            state: '启用'
        },
        {
            zhanghao: '1100003',
            name: '王小虎',
            sex: '男',
            dept: '北京市残联',
            email: 'wangzy@mail.taiji.com',
            phone: '18515163440',
            registryTime: '2016-05-02',
            updateTime: '王小虎',
            state: '启用'
        },
        {
            zhanghao: '1100003',
            name: '王小虎',
            sex: '男',
            dept: '北京市残联',
            email: 'wangzy@mail.taiji.com',
            phone: '18515163440',
            registryTime: '2016-05-02',
            updateTime: '王小虎',
            state: '启用'
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
        },border: true,
          height: '450'
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
        changeInnerDialog(){
            this.innerVisible = true;
//            this.$message({type:'success',message:'也可以了'});
        },handleCellClick(){
            this.$message({type:'success',message:'可以了'});
        },
        filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        exportExcel () {
            this.$export.excel({
                columns: this.columns,
                data: this.data,
                header: '导出 Excel',
                merges: ['A1', 'E1']
            }).then(() => {
                this.$message('导出表格成功')
            })
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
  .ml20{
    margin-left: 20px;
  }
  .ml50{
    margin-left: 50px;
  }
  .el-form-item__label{
   width: 100px !important;
  }
  .d2-container-full{
    width: 100%;
  }
</style>
