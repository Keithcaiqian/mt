<template>
  <div class="m-register">
    <el-row class="r-header">
      <el-col :span="21">
        <router-link class="site-logo" to="/">美团网</router-link>
      </el-col>
      <el-col :span="3">
        <div class="haveReg">
          <span>已有账号</span>
          <router-link class="lo" to="/login">登录</router-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" @input="inp"></el-input>
          <div class="passtrength">
            <div :class="['bar',strengthClass]"></div>
            <div class="item">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="ruleForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">同意以下协议并注册</el-button>
        </el-form-item>
      </el-form>
      <div class="co">
        <a class="f1" href="#" target="_blank">《美团点评用户服务协议》</a>
        <a class="f1" href="#" target="_blank">《美团点评隐私政策》</a>
      </div>
    </el-row>
    <el-row class="ruleForm-bottom">
      <router-link to="/">©meituan.com</router-link>
      <a href="#">京ICP证070791号</a>
      <span>京公网安备11010502025545号</span>
    </el-row>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位组成"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("密码必须为4-16位组成"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "",
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          api.getRegister({
              params:this.ruleForm
          }).then(res=>{
            console.log(res)
              if(res.data.status == 'success'){
                  this.$router.push('/');
              }else{
                   alert(res.data.msg);
              }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    inp() {
      if (
        this.ruleForm.password.length > 11 &&
        this.ruleForm.password.match(/\d+/g) &&
        this.ruleForm.password.match(/[a-zA-Z]+/g)
      ) {
        this.strengthClass = "third";
      } else if (this.ruleForm.password.length > 11) {
        this.strengthClass = "second";
      } else if (!this.ruleForm.password) {
        this.strengthClass = "";
      } else {
        this.strengthClass = "first";
      }
    }
  }
};
</script>
<style scoped>
.m-register {
  width: 980px;
  margin: 0 auto;
}
.r-header {
  padding: 10px 0;
  border-bottom: 1px solid #aaa;
}
.site-logo {
  display: inline-block;
  background-image: url("//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png");
  background-repeat: no-repeat;
  display: inline-block;
  width: 128px;
  height: 36px;
  background-size: 128px 36px;
  text-indent: -1000px;
  overflow: hidden;
}
.haveReg {
  font-size: 14px;
  color: #666;
}
.lo {
  margin-left: 10px;
  display: inline-block;
  color: #222;
  background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
  padding: 2px 10px;
  height: 20px;
  border-radius: 5px;
}
.el-form {
  margin-top: 30px;
}
.el-input {
  width: 260px;
}
.el-button {
  color: #222;
  background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
  width: 200px;
  border: none;
  font-weight: bold;
}
.el-button--primary:hover {
  background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
  color: #222;
}
.co {
  padding-left: 90px;
}
.co .f1 {
  font-size: 13px;
  color: #fe8c00;
}
.register-bottom {
  font-size: 13px;
  color: #999;
  text-align: center;
  margin-top: 50px;
  border-top: 1px solid #aaa;
  padding-top: 30px;
}
.passtrength {
  position: relative;
  width: 261px;
  height: 22px;
  background: #eee;
  margin-top: 10px;
}
.passtrength .bar {
  height: 21px;
  width: 0px;
  background: #f40;
  transition: all 0.5s;
}
.passtrength .bar.first {
  width: 87px;
}
.passtrength .bar.second {
  width: 174px;
}
.passtrength .bar.third {
  width: 259px;
  background-color: green;
}
.passtrength .item {
  position: absolute;
  width: 100%;
  height: 100%;
  top: -21px;
  left: 0;
}
.passtrength span {
  display: inline-block;
  width: 85px;
  height: 22px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  border-right: 2px solid #fff;
}
</style>