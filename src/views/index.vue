<template>
  <div class="m-main">
    <el-row class="main">
      <el-col :span="4" class="left">
        <dl>
          <dt>全部分类</dt>
          <dd
            v-for="(item,index) in itemData"
            :key="index"
            @mouseenter="enter(item)"
            @mouseleave="leave"
          >
            <i :class="item.type"></i>
            <router-link to="/">{{item.name}}</router-link>
            <span>></span>
          </dd>
        </dl>
        <div class="detail" v-if="isDetail" @mouseenter="isShow" @mouseleave="isLeave">
          <div class="item" v-for="(item,index) in isDetail.items" :key="index + '1'">
            <h3>{{item.title}}</h3>
            <a href="#" v-for="(ite,ind) in item.items" :key="ind + '2'">{{ite}}</a>
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <el-row class="m-title">
          <router-link to="/">美团外卖</router-link>
          <router-link to="/">猫眼电影</router-link>
          <router-link to="/">美团酒店</router-link>
          <router-link to="/">民宿／公寓</router-link>
          <router-link to="/">商家入驻</router-link>
          <router-link to="/">美团公益</router-link>
        </el-row>
        <el-row class="swip">
          <el-col :span="14">
            <swiper />
          </el-col>
          <el-col :span="4">
            <a href="#">
              <img
                class="img"
                src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"
                alt
              />
            </a>
          </el-col>
          <el-col :span="6">
            <div class="m-login">
              <div>
                <img 
                  class="img"
                  :src="$store.state.userName?'//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png':
                  '//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg'"
                  alt
                />
              </div>
              <div>
                <p>Hi！{{$store.state.userName ? $store.state.userName : '你好'}}</p>
              </div>
              <div class="btn" v-if="!$store.state.userName">
                <el-button round @click="regis">注册</el-button>
              </div>
              <div class="btn" v-if="!$store.state.userName">
                <el-button round @click="login">立即登录</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="m-img">
          <el-col :span="14">
            <a href="#">
              <img
                class="img1"
                src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
                alt
              />
            </a>
            <a href="#">
              <img
                class="img1"
                src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
                alt
              />
            </a>
          </el-col>
          <el-col :span="4">
            <a href="#">
              <img
                class="img2"
                src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
                alt
              />
            </a>
          </el-col>
          <el-col :span="6">
            <div class="code">
              <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt />
              <p>美团APP手机版</p>
              <p class="sp">
                <span>1元起</span>吃喝玩乐
              </p>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <m-container :arrs="dataList"/>
  </div>
</template>
<script>
import api from '@/api/index.js';
import swiper from "@/components/main/swiper.vue";
import mContainer from '@/components/main/container.vue';
export default {
  data() {
    return {
      dataList:[{
        title:'有格调',
        arr:['全部'],
        class:'food-bar'
      },
      {
        title:'猫眼电影',
        arr:['正在热映','即将上映'],
        class:'movie-bar'
      },
      {
        title:'推荐民宿',
        class:'area-bar',
        arr:['天津','济南','大连','太原','石家庄','秦皇岛','呼和浩特','潍坊','唐山','泰安']      
      }],
      timer: null,
      isDetail: null,
      itemData: []
    };
  },
  created(){
    api.getLeftNavList().then(res => {
      this.itemData = res.data.data;
    })
    // api.getFirstPageBottomList().then(res => {
    //   this.dataList = res.data.data;
    // })
  },
  methods: {
    enter(data) {
      clearTimeout(this.timer);
      this.isDetail = data;
    },
    leave() {
      this.timer = setTimeout(() => {
        this.isDetail = null;
      }, 200);
    },
    isShow() {
      clearTimeout(this.timer);
    },
    isLeave() {
      this.isDetail = null;
    },
    regis(){
      this.$router.push({name:'register'});
    },
    login(){
      this.$router.push({name:'login'});
    }
  },
  components: {
    swiper,
    mContainer
  }
};
</script>

<style >
.m-search{
  padding-bottom: 20px;
}
.main {
  width: 1190px;
  margin: -70px auto 0;
}
.el-col.left {
  background-color: #fff;
  border: 1px solid #eee;
  position: relative;
  height: 482px;
}
.left dt {
  padding: 15px 10px 0;
  font-size: 16px;
  color: #222;
  margin-bottom: 25px;
}
.left dd {
  padding: 2px 10px;
  color: #646464;
  font-size: 13px;
}
.left dd:hover {
  color: #000;
  background-color: rgb(248, 180, 124);
}
.left span {
  float: right;
}
.left i {
  display: inline-block;
  vertical-align: middle;
  background-size: cover;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 10px;
}
.detail {
  width: 400px;
  height: 416px;
  background-color: #fff;
  position: absolute;
  right: -403px;
  top: 60px;
  border: 1px solid #eee;
  padding: 10px 10px 0;
  box-sizing: border-box;
  z-index: 5;
}
.item {
  padding: 10px 0;
}
.item h3 {
  border-bottom: 1px solid #eee;
  padding: 0 0 5px 0;
  position: relative;
  font-weight: normal;
}
.item h3::after {
  content: "更多>";
  font-size: 12px;
  color: #999;
  font-weight: normal;
  position: absolute;
  right: 0;
}
.item a {
  color: #999;
  font-size: 12px;
  padding: 16px 16px 8px 0;
  white-space: nowrap;
}
.item a:hover {
  color: orange;
}
.m-title {
  padding-left: 20px;
  padding-top: 10px;
}
.m-title a {
  font-size: 16px;
  color: #222;
  margin: 0 20px;
  font-weight: bold;
}
.swip {
  margin: 32px 0 0 13px;
}
.swip .img {
  width: 150px;
  height: 240px;
}
.m-login {
  width: 230px;
  height: 240px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #eee;
  padding-top: 20px;
  box-sizing: border-box;
}
.m-login .img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
}
.m-login p{
  cursor: pointer;
}
.btn {
  margin: 15px 0 0;
}
.el-button {
  width: 120px;
}
.m-img {
  margin-left: 10px;
}
.img1 {
  width: 270px;
  height: 165px;
  margin: 10px 10px 0 0;
}
.img2 {
  width: 150px;
  height: 165px;
  margin: 10px 10px 0 0;
}
.code {
  width: 230px;
  height: 167px;
  margin-left: 10px;
  background-color: #fff;
  text-align: center;
  border: 1px solid #eee;
  margin: 10px 0 0 0;
  padding-top: 5px;
  box-sizing: border-box;
}
.code img {
  width: 95px;
  height: 95px;
}
.sp {
  font-size: 12px;
}
.sp span {
  color: red;
  margin-right: 3px;
}

.food {
  background-image: url("../assets/food.png");
}
.takeout {
  background-image: url("../assets/外卖.png");
}
.hotel {
  background-image: url("../assets/酒店.png");
}
.takeout {
  background-image: url("../assets/电影.png");
}
.train {
  background-image: url("../assets/火车.png");
}
.home {
  background-image: url("../assets/家装.png");
}
.health {
  background-image: url("../assets/健身.png");
}
.bar {
  background-image: url("../assets/酒吧.png");
}
.hair {
  background-image: url("../assets/美发.png");
}
.house {
  background-image: url("../assets/民宿.png");
}
.parent {
  background-image: url("../assets/亲子.png");
}
.life {
  background-image: url("../assets/生活服务.png");
}
.aid {
  background-image: url("../assets/医疗.png");
}
.study {
  background-image: url("../assets/在线学习培训.png");
}
.diamond {
  background-image: url("../assets/钻石.png");
}
.KTV {
  background-image: url("../assets/KTV.png");
}
</style>