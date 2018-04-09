<template>
  <div class="basetable">
     <div class="crumbs">
       <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>
        <el-breadcrumb-item>Vue表格组件</el-breadcrumb-item>
       </el-breadcrumb>
     </div>
     <p>{{message}}</p>
  </div>
</template>

<script>
    export default {
        data: function(){
            return {
               message:"hello world vueTable"
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
