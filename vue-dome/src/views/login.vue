<template>
    <div class="login_">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" onkeyup="value=value.replace(/[^\d]/g,'');if(this.value.length>11)this.value=this.value.substring(0,11);" auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>
<script>
    var url = 'http://192.168.0.130:3000'
    export default {
    data() {
      return {
        ruleForm: {
          name: '',
          password: '',

        },
        rules: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' }

          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

              var loginParams = { name: this.ruleForm.name, password: this.ruleForm.password };

              url = url + '/login';

              this.$http.post(url, loginParams).then(response => {

                if(response.data.status == 1){
                    alert('登录成功')
                }else{
                    alert('登录失败')
                }
              }, response => {
                    alert('登录错误')
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>

</style>
