<template>
    <div class="register">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="手机号码"  prop="phone">
            <el-input type="number" v-model.number="ruleForm.phone" placeholder="请输入手机号码" onkeyup="value=value.replace(/[^\d]/g,'');if(this.value.length>11)this.value=this.value.substring(0,11);" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="verification">
            <el-input v-model="ruleForm.verification " placeholder="请输入验证码"></el-input>
            <img class="num-verif" height="30"  title="点击更换验证码" alt="点击更换验证码" v-on:click="getvcode" src="/account/vcode">
          </el-form-item>

          <el-form-item label="手机验证码" prop="phoneVerification">
            <el-input  v-model="ruleForm.phoneVerification" placeholder="请输入手机验证码"></el-input>
            <el-button @click="phoneVerif('ruleForm')">获得手机验证码</el-button>
          </el-form-item>


          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-progress :percentage="100" status="success"></el-progress>

          <el-form-item label="推荐人" prop="Referee">
            <el-input v-model="ruleForm.Referee" placeholder="请输入推荐人"></el-input>
          </el-form-item>

           <el-form-item  prop="type">
            <el-checkbox-group class="checkbox" v-model="ruleForm.type">
              <el-checkbox  label="我已经阅读并同意" name="type"></el-checkbox>
            </el-checkbox-group>
            <span class="clause"><a class="use" href="">《使用条款》</a>和<a class="Privacy" href="">《隐私条款》</a></span>
          </el-form-item>

          <el-form-item style="margin-top: 30px;">
            <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>>

<script>
    import $ from 'jquery'
    export default {
    data() {
      return {
        ruleForm: {
          phone: '',
          verification: '',
          phoneVerification: '',
          pass: '',
          type: [],
        },
        rules: {
          phone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { type: 'number', message: '号码必须为数字值'},

          ],
          verification: [
            { required: true, message: '请输入验证码', trigger: 'blur' }

          ],
          phoneVerification: [
            { required: true, message: '请输入手机验证码', trigger: 'blur' },

          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '长度在6个以上的字符', trigger: 'blur' }
          ],
          type: [
            { type: 'array', required: true, message: '请勾选条款', trigger: 'change' }
          ],

        }
      };
    },
    created(){
        this.getvcode()
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.$refs[formName].model);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      getvcode:function(){
            $(".num-verif").attr('src','/account/vcode?id='+Math.random())
      }

    }
  }
</script>

<style>
.el-input{
    width: 50%;
}
.num-verif{
    vertical-align: middle;
    border-radius: 5px;
    line-height: 26px;
    color: #606266;
}
    .checkbox{
        display: inline-block;
    }
    .clause{
        color:#606266;
    }
    .use,.Privacy{
        color:#606266;
        font-size: 14px;
        display: inline-block;
        text-decoration: none;
    }
</style>

