<template>
  <div class="login-wrap">
   <div class="ms-title">后台管理系统</div>
   <div class="ms-login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
      </el-form-item>
      <div class="login-btn">
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </div>
      <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
    </el-form>
  </div>
  </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('ms_username',self.ruleForm.username);
                        self.$router.push('/readme');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ms-title{
        width:100%;
        text-align: center;
        font-size:30px;
        color: #000;

    }
    .ms-login{
        width:300px;
        margin: 0 auto;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
