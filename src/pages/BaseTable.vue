<template>
  <div class="basetable">
     <div class="crumbs">
       <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>
        <el-breadcrumb-item>基础表格</el-breadcrumb-item>
       </el-breadcrumb>
     </div>

      <div class="handle-box">
            <el-button type="primary" icon="el-icon-delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
            <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">
                <el-option key="1" label="广东省" value="广东省"></el-option>
                <el-option key="2" label="湖南省" value="湖南省"></el-option>
                <el-option key="3" label="海南省" value="海南省"></el-option>
                <el-option key="4" label="江苏省" value="江苏省"></el-option>
                <el-option key="5" label="河南省" value="河南省"></el-option>
                <el-option key="6" label="安徽省" value="安徽省"></el-option>
                <el-option key="7" label="云南省" value="云南省"></el-option>
                <el-option key="8" label="湖北省" value="湖北省"></el-option>
            </el-select>
            <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
            <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
      </div>

      <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange" :default-sort = "{prop: 'number', order: 'rising'}">
    <el-table-column
      type="selection"
      width="55" sortable>
    </el-table-column>
    <el-table-column
    prop="number"
    label="编号"
    width="120" sortable>
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="120" sortable>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120" sortable>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址" show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="操作" width="180">
      <template slot-scope="scope">
        <el-button size="small"
        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="small" type="danger"
        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>

    <el-table-column
    prop="tag"
    label="标签"
    width="100"
    :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
    :filter-method="filterTag"
    filter-placement="bottom-end">
    <template slot-scope="scope">
      <el-tag
      :type="scope.row.tag === '家' ? 'primary' : 'success'"
      close-transition>{{scope.row.tag}}</el-tag>
    </template>
  </el-table-column>
  </el-table>

    <!--分页功能-->
    <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage"
    :page-size="5"
    layout="total, prev, pager, next"
    :total="40">
    </el-pagination>


      <!--新增界面-->
      <el-dialog title="新增" :visible.sync="dialogFormVisible">
        <el-form :model="addForm">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="addForm.name" auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-radio-group v-model="addForm.sex">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>


           <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
           </el-form-item>


           <el-form-item label="日期" :label-width="formLabelWidth">
             <el-date-picker
             v-model="value1"
             type="date"
             placeholder="选择日期">
            </el-date-picker>
           </el-form-item>


           <el-form-item label="地址" :label-width="formLabelWidth">
              <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea">
              </el-input>
           </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>


  </div>
</template>
<script>
  import axios from 'axios';
  import {Users} from '../mock'
  export default {
    data() {
      return {
        message:"hello",
        tableData:[],
        currentPage:2,
        multipleSelection: [],
        select_cate: '',
        select_word: '',
        del_list: [],
        is_search: false,
        dialogFormVisible: false,
        addForm: {
          name: '',
          sex: -1,
          age: 0,
          birth: '',
          addr: ''
        },
        formLabelWidth: '80px',
        num8: 1,
        value1:"",
        textarea: ''
      }
    },
    created(){
      this.getUsers()
    },
    watch:{
      select_cate(){
        var self = this;
        console.log(this)
        self.tableData.filter(function(d){
          if(d.address.indexOf(self.select_cate)>-1){
            self.tableData.splice(0,self.tableData.length);
            self.tableData.push(d)
          }
        })
      },
      select_word(){
        var self = this;
        self.tableData.filter(function(d){
          if(d.name.indexOf(self.select_word)>-1 || d.address.indexOf(self.select_word)>-1){
            self.tableData.splice(0,self.tableData.length);
            self.tableData.push(d)
          }
        })
        console.log(this.select_word)
      }
    },
    methods:{
      getUsers:function(){
        this.tableData = Users.data
        // console.log(this.tableData)
        // console.log(Users)
      },
      fetchData:function(){
        var that = this;
        axios.get('static/vuetable.json')
        .then(function (response) {
          that.tableData = response.data.list
          console.log(that.tableData)
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      // 全选和部分选中
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      // 分页功能
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //筛选
      search(){
        this.is_search = true;
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      handleEdit(index, row) {
        this.$message('编辑第'+(index+1)+'行');
      },
      handleDelete(index, row) {
        this.$message.error('删除第'+(index+1)+'行');
      },
      delAll(){
        const self = this,
        length = self.multipleSelection.length;
        let str = '';
        self.del_list = self.del_list.concat(self.multipleSelection);
        for (let i = 0; i < length; i++) {
          str += self.multipleSelection[i].name + ' ';
        }
        self.$message.error('删除了'+str);
        self.multipleSelection = [];
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      //显示新增界面
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.handle-box{
    margin-bottom: 20px;
}
.handle-select{
    width: 120px;
}
.handle-input{
    width: 300px;
    display: inline-block;
}
</style>
