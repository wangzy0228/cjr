<template>
  <d2-container :filename="filename">
    <template slot="header" flex="main:justify">新增服务目录
    </template>
    <d2-crud
            ref="d2Crud"
            :columns="columns"
            :data="data"
            :add-template="addTemplate"
            :form-options="formOptions"
            :add-rules="addRules"
            :options="options"
            :pagination="pagination"
            @row-add="handleRowAdd"
            @dialog-cancel="handleDialogCancel"
            @pagination-current-change="paginationCurrentChange">
      <el-button slot="header" style="margin-bottom: 5px" @click="addRow">新增</el-button>
    </d2-crud>

    <template slot="footer">
      <!--<d2-link-btn title="文档" link="https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"/>-->
    </template>
  </d2-container>
</template>

<script>
//    import doc from './doc.md'
//    import code from './code.js'
    import { BusinessTable1List } from '@api/demo.business.table.1'

    export default {
        data () {
            return {
                value: new Date(),
                filename: __filename,
//                doc,
//                code,
                columns: [
                    {
                        title: '卡密',
                        key: 'key',
                        width: 320
                    },
                    {
                        title: '面值',
                        key: 'value'
                    },
                    {
                        title: '管理员',
                        key: 'admin'
                    },
                    {
                        title: '创建时间',
                        key: 'dateTimeCreat'
                    },
                    {
                        title: '使用时间',
                        key: 'dateTimeUse'
                    }
                ],
                data: [],
                loading: false,
                pagination: {
                    currentPage: 1,
                    pageSize: 5,
                    total: 0
                },
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
                    border: true
                }
            }
        },
        mounted () {
            this.fetchData()
        },
        methods: {
            addRow () {
                this.$refs.d2Crud.showDialog({
                    mode: 'add'
                })
            },
            handleRowAdd (row, done) {
                this.formOptions.saveLoading = true
                setTimeout(() => {
                    console.log(row)
                    this.$message({
                        message: '保存成功',
                        type: 'success'
                    })
                    done()
                    this.formOptions.saveLoading = false
                }, 300)
            },
            handleDialogCancel (done) {
                this.$message({
                    message: '取消保存',
                    type: 'warning'
                })
                done()
            },
            paginationCurrentChange (currentPage) {
                this.pagination.currentPage = currentPage
                this.fetchData()
            },
            fetchData () {
                this.loading = true
                BusinessTable1List({
                    ...this.pagination
                }).then(res => {
                    this.data = res.list
                    this.pagination.total = res.page.total
                    this.loading = false
                }).catch(err => {
                    console.log('err', err)
                    this.loading = false
                })
            }
        }
    }
</script>
