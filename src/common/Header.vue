<template>
  <div class="head">
    <div class="logo">后台管理系统</div>
    <div class="user-info">
    	<el-dropdown>
    		<span class="el-dropdown-link">
                <img class="user-logo" src="../assets/logo.png">admin
            </span>
            <el-dropdown-menu slot="dropdown">
             <el-dropdown-item>退出</el-dropdown-item>
         </el-dropdown-menu>
     </el-dropdown>
 </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Head!'
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head{
    background-color: #242f42;
    height: 70px;
}
.logo{
    width: 250px;
    float: left;
    font-size: 22px;
    color: #fff;
    text-align: center;
    line-height: 70px;
}
.el-dropdown-link{
    color: #fff;
    font-size: 16px;
    position: relative;
}
.el-dropdown{
    float: right;
    padding: 15px 50px 0 0;
    font-size: 22px;
}
.user-logo{
    display:inline-block;
    width:40px;
    height:40px;
    border-radius: 50%;
}

</style>
