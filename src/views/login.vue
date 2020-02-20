<template>
  <div class="p-login">
    <el-row>
      <router-link class="site-logo" to="/">美团网</router-link>
    </el-row>
    <el-row class="main">
      <el-col :span="12">
        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt />
      </el-col>
      <el-col :span="12">
        <div class="login">
          <div class="error" v-if="isError">
            <span>一</span>
            {{errorCon}}
          </div>
          <p>账号登录</p>
          <el-input placeholder="用户名" prefix-icon="el-icon-phone" v-model="inp"></el-input>
          <el-input
            placeholder="密码"
            v-model="password"
            prefix-icon="el-icon-unlock"
            type="password"
          ></el-input>
          <button class="btn" @click="submit">登录</button>
          <div class="reg">
            <span>还没有账号？</span>
            <router-link to="/register">免费注册</router-link>
          </div>
          <div class="otherReg">
            <div class="top">用合作网站账号注册</div>
            <div>
              <span class="tencent"></span>
              <span class="sina"></span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="reg-bot">
      <div>
        <span>关于美团</span> |
        <span>加入我们</span> |
        <span>商家入驻</span> |
        <span>帮助中心</span> |
        <span>美团手机版</span>
      </div>
      <div>©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</div>
    </el-row>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      inp: "",
      password: "",
      isError: false,
      errorCon: ""
    };
  },
  methods: {
    submit() {
      if (!this.inp && !this.password) {
        this.errorCon = "请输入账号和密码";
        this.isError = true;
        return;
      }
      if (!this.inp) {
        this.errorCon = "请输入账号";
        this.isError = true;
        return;
      }
      if (!this.password) {
        this.errorCon = "请输入密码";
        this.isError = true;
        return;
      }
      api
        .getLoginData({
          params: {
            userName: this.inp,
            password: this.password
          }
        })
        .then(res => {
            console.log(res)
          if(res.data.status == 'success'){
              this.$store.commit('setUserName',this.inp);
              console.log(this.$store.state.userName)
              this.$router.push('/');
          }else{
              this.isError = true;
              this.errorCon = res.data.msg;
          }
        });
    }
  }
};
</script>
<style scoped>
.p-login {
  overflow: hidden;
  width: 980px;
  margin: 40px auto 0;
}
.site-logo {
  background-image: url("//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png");
  background-repeat: no-repeat;
  display: inline-block;
  width: 130px;
  height: 47px;
  background-size: cover;
  text-indent: -1000px;
  overflow: hidden;
}
.main {
  margin-top: 30px;
}
.login {
  padding-top: 60px;
  width: 270px;
  margin-left: 20px;
  position: relative;
}
.mterror {
  border: 1px solid red;
}
.error {
  position: absolute;
  top: 0;
  width: 270px;
  background-color: #fff6d8;
  border: 1px solid #f5d8a7;
  padding: 10px;
  box-sizing: border-box;
  font-size: 12px;
}
.error span {
  text-align: center;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  font-weight: bolder;
  color: #fff;
  display: inline-block;
  border-radius: 50%;
  background-color: red;
  padding: 2px;
  box-sizing: border-box;
  margin-right: 5px;
}
.login p {
  color: #666;
  font-size: 14px;
}
.el-input {
  margin: 8px 0;
}
.login .btn {
  color: #222;
  background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
  padding: 7px 20px 6px;
  border: none;
  width: 270px;
  cursor: pointer;
  border-radius: 5px;
}
.reg {
  font-size: 14px;
  margin: 10px 0;
}
.reg a {
  color: #fe8c00;
}
.otherReg {
  border-top: 2px solid #aaa;
  text-align: center;
  margin-top: 20px;
  position: relative;
}
.otherReg .top {
  font-size: 14px;
  position: absolute;
  width: 150px;
  top: -12px;
  background-color: #fff;
  left: 50%;
  transform: translateX(-50%);
}
.otherReg span {
  margin-top: 40px;
  display: inline-block;
  width: 18px;
  height: 18px;
  background-repeat: no-repeat;
}
.tencent {
  margin-right: 20px;
  background-position: -1250px -491px;
  background-image: url("//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png");
}
.sina {
  background-position: -1250px -599px;
  background-image: url("//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png");
}
.reg-bot div {
  border-top: 1px solid #eee;
  margin-top: 20px;
  font-size: 12px;
  color: #999;
  padding: 15px 0 0;
  box-sizing: border-box;
}
.reg-bot span {
  padding: 0 8px 0 8px;
  cursor: pointer;
}
</style>