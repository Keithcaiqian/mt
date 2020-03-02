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
    <m-container :arrs="dataList[0]" :curIndex='0'/>
    <movie :arrs="movieList"/>
    <m-container :arrs="dataList[1]" :curIndex='1'/>
  </div>
</template>
<script>
import api from "@/api/index.js";
import swiper from "@/components/main/swiper.vue";
import mContainer from "@/components/main/container.vue";
import movie from '@/components/main/movie.vue'
export default {
  data() {
    return {
      dataList: [
        {
          title: "有格调",
          arr: [
            {
              name: "全部",
              content: [
                {
                  src:
                    "//p1.meituan.net/bbia/360a7f3525892469991aec4e35a87133217587.jpg@552w_312h_1e_1c",
                  name: "浮帝欧蛋糕",
                  detail: "蛋糕5选1,约8英寸，圆形",
                  pri: "118",
                  oldPri: "238",
                  area: "模式口"
                },
                {
                  src:
                    "//p0.meituan.net/msmerchant/7b3940c74b3bd1b22a6cfa42d3e39ec8341205.jpg@552w_312h_1e_1c",
                  name: "真麦工坊（梧桐苑店）",
                  detail: "蛋糕5选1,约6英寸",
                  pri: "88",
                  oldPri: "168",
                  area: "门头沟城区"
                },
                {
                  src:
                    "//p1.meituan.net/dpmerchantpic/894a230555aedd63c423a454b48e5842180576.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|552w_312h_1e_1c",
                  name: "真麦工坊（梧桐苑店）",
                  detail: "蛋糕5选1,约6英寸",
                  pri: "88",
                  oldPri: "168",
                  area: "门头沟城区"
                },
                {
                  src:
                    "//p0.meituan.net/poi/beba5f675ba2763dd14f3672dd1a59a1135168.jpg@552w_312h_1e_1c",
                  name: "美西翘壳鱼庄",
                  detail: "花鲢鱼火锅套餐，建议4人使用",
                  pri: "120",
                  oldPri: "179",
                  area: "长寿湖风景区"
                },
                {
                  src:
                    "//p1.meituan.net/wedding/0ee63046cc6289544f3306ac29d96c2f188265.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|552w_312h_1e_1c",
                  name: "3·11美发工作室",
                  detail: "3·11美发工作室",
                  pri: "",
                  oldPri: "",
                  per: "168",
                  area: "桃花新城"
                },
                {
                  src:
                    "//p0.meituan.net/wedding/3921034c19173dc67180de605dacb09328453.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|552w_312h_1e_1c",
                  name: "施华蔻美发连锁（首脑长寿古镇店）",
                  detail: "施华蔻美发连锁（首脑长寿古镇店）",
                  pri: "88",
                  oldPri: "168",
                  area: "长寿古镇"
                }
              ]
            },
            {
              name: "约会聚餐",
              content: [
                {
                  src:
                    "//p1.meituan.net/bbia/360a7f3525892469991aec4e35a87133217587.jpg@552w_312h_1e_1c",
                  name: "浮帝欧蛋糕",
                  detail: "蛋糕5选1,约8英寸，圆形",
                  pri: "118",
                  oldPri: "238",
                  area: "模式口"
                },
                {
                  src:
                    "//p0.meituan.net/msmerchant/7b3940c74b3bd1b22a6cfa42d3e39ec8341205.jpg@552w_312h_1e_1c",
                  name: "真麦工坊（梧桐苑店）",
                  detail: "蛋糕5选1,约6英寸",
                  pri: "88",
                  oldPri: "168",
                  area: "门头沟城区"
                },
                {
                  src:
                    "//p1.meituan.net/dpmerchantpic/894a230555aedd63c423a454b48e5842180576.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|552w_312h_1e_1c",
                  name: "真麦工坊（梧桐苑店）",
                  detail: "蛋糕5选1,约6英寸",
                  pri: "88",
                  oldPri: "168",
                  area: "门头沟城区"
                },
                {
                  src:
                    "//p0.meituan.net/poi/beba5f675ba2763dd14f3672dd1a59a1135168.jpg@552w_312h_1e_1c",
                  name: "美西翘壳鱼庄",
                  detail: "花鲢鱼火锅套餐，建议4人使用",
                  pri: "120",
                  oldPri: "179",
                  area: "长寿湖风景区"
                },
                {
                  src:
                    "//p1.meituan.net/bbia/422681c866afd759d241188f0f0c7345150350.jpg@552w_312h_1e_1c",
                  name: "幸福西饼生日蛋糕（长寿古镇店）",
                  detail:
                    "【蛋糕】S四重奏/榴芒双拼/鲜果嘉年华/榴莲香雪（4选1）1个，约2磅，方形",
                  pri: "188",
                  oldPri: "296",
                  area: "长寿古镇"
                },
                {
                  src:
                    "//p0.meituan.net/msmerchant/ece37ce11c355f13a5cf3745b380e282230492.jpg@552w_312h_1e_1c",
                  name: "元祖食品（长寿中央国际店）",
                  detail: "蛋糕3选1,约10英寸",
                  pri: "283",
                  oldPri: "298",
                  area: "桃花新城"
                }
              ]
            },
            {
              name: "丽人SPA",
              content: [
                {
                  src:
                    "//p1.meituan.net/dpdeal/e70a7be22e47fe3309592c597310aea4151269.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|552w_312h_1e_1c",
                  name: "Beau·梦 美甲美睫工作室",
                  detail: "Beau·梦 美甲美睫工作室",
                  pri: "",
                  oldPri: "",
                  per: "103",
                  area: "桃花新城"
                },
                {
                  src:
                    "//p0.meituan.net/wedding/1a8be87a30d97f86c7714e50ffa1a9e127590.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|552w_312h_1e_1c",
                  name: "向日葵美甲美睫",
                  detail: "向日葵美甲美睫",
                  area: "门头沟城区"
                },
                {
                  src:
                    "//p1.meituan.net/merchantpic/9a8a3bff7dabbffa8bf054c97703ea6f138661.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|552w_312h_1e_1c",
                  name: "优.悦美甲美睫",
                  detail: "优.悦美甲美睫",
                  area: "桃花新城"
                },
                {
                  src:
                    "//p0.meituan.net/dpmerchantpic/688756977de42c436a5b1ed60d660f5b2361817.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|552w_312h_1e_1c",
                  name: "心韵美容院",
                  detail: "心韵美容院",
                  area: "桃花新城"
                },
                {
                  src:
                    "//p1.meituan.net/wedding/0ee63046cc6289544f3306ac29d96c2f188265.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|552w_312h_1e_1c",
                  name: "3·11美发工作室",
                  detail: "3·11美发工作室",
                  pri: "",
                  oldPri: "",
                  per: "168",
                  area: "桃花新城"
                },
                {
                  src:
                    "//p0.meituan.net/wedding/3921034c19173dc67180de605dacb09328453.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|552w_312h_1e_1c",
                  name: "施华蔻美发连锁（首脑长寿古镇店）",
                  detail: "施华蔻美发连锁（首脑长寿古镇店）",
                  pri: "88",
                  oldPri: "168",
                  area: "长寿古镇"
                }
              ]
            }
          ],
          class: "food-bar"
        },
        {
          title: "推荐民宿",
          class: "area-bar",
          arr: [
            {
              name: "北京",
              content: [
                {
                  src:
                    "https://img.meituan.net/phoenix/6def4bd3d4c884df01ec9567c6f4c203103835.jpg@740w_416h_1e_1c",
                  name: "海淀三山五园附近的日式榻榻米风格的《胶囊公寓》",
                  detail: "整套可住3人 | 香山/八大处风景区",
                  pri: "99"
                },
                {
                  src:
                    "https://img.meituan.net/iphoenix/b80b2321cbe0e5a9a4cd04d7fa46cf6693704.jpg@740w_416h_1e_1c",
                  name:
                    "「野孩子の家」学府 金可儿床垫 沙河高教园 超过性价比 高端配置 独门独户 24小时卫浴 阳光大床房 野孩子 家",
                  detail: "整套一居室.可住两人 | 小汤山温泉度假村",
                  pri: "138"
                },
                {
                  src:
                    "https://img.meituan.net/phoenix/1a4d8fdbaa5944df496fc36c1e9d3a851910597.jpg@740w_416h_1e_1c",
                  name: "北京方舍青年旅舍经济舒适  沙发客",
                  detail: "整套3居室.可住一人 | 国贸CBD/四惠",
                  pri: "68"
                },
                {
                  src:
                    "https://img.meituan.net/phoenix/da2cc4f87de4e8aed8ec32098ad32f2e265064.jpg@740w_416h_1e_1c",
                  name:
                    "沙河地铁站一公里，高教园，北航北邮中央财经大学矿业大学",
                  detail: "整套一居室.可住两人 | 小汤山温泉度假村",
                  pri: "50"
                },
                {
                  src:
                    "https://img.meituan.net/iphoenix/50235a2aefdedc4af3764582e545c3e4107847.jpg@740w_416h_1e_1c",
                  name:
                    "「野孩子の家」沙河高教园地铁附近  独门独户  日式主题   榻榻米  24小时卫浴  空调暖气",
                  detail: "整套一居室.可住两人 | 小汤山温泉度假村",
                  pri: "138"
                },
                {
                  src:
                    "https://img.meituan.net/phoenix/6d04442a238d02d289c622443f29ad60749420.jpg@740w_416h_1e_1c",
                  name: "来间特价房-单间大床-采光好-安静",
                  detail: "整套2居士可住两人",
                  pri: "59"
                }
              ]
            },
            {
              name: "天津",
              content: [
                {
                  src:
                    "https://img.meituan.net/phoenix/01904838d15dc487fd2678d0a2fcc85b410357.jpg@740w_416h_1e_1c",
                  name: "海淀三山五园附近的日式榻榻米风格的《胶囊公寓》",
                  detail: "整套可住3人 | 香山/八大处风景区",
                  pri: "99"
                },
                {
                  src:
                    "http://p0.meituan.net/iphoenix/4b74199ec770ed0ef90e6f3bc750015f98114.jpg@740w_416h_1e_1c",
                  name:
                    "「野孩子の家」学府 金可儿床垫 沙河高教园 超过性价比 高端配置 独门独户 24小时卫浴 阳光大床房 野孩子 家",
                  detail: "整套一居室.可住两人 | 小汤山温泉度假村",
                  pri: "138"
                },
                {
                  src:
                    "https://img.meituan.net/phoenix/b38c2c0f6091085d702ec2d585c5349d1391930.jpg@740w_416h_1e_1c",
                  name: "北京方舍青年旅舍经济舒适  沙发客",
                  detail: "整套3居室.可住一人 | 国贸CBD/四惠",
                  pri: "68"
                },
                {
                  src:
                    "https://img.meituan.net/phoenix/2ddffbcc9f3f56f227907f09df748b382205272.jpg@740w_416h_1e_1c",
                  name:
                    "沙河地铁站一公里，高教园，北航北邮中央财经大学矿业大学",
                  detail: "整套一居室.可住两人 | 小汤山温泉度假村",
                  pri: "50"
                },
                {
                  src:
                    "https://img.meituan.net/phoenix/bbac03b51f853341a9d095e94f73af0d479711.jpg@740w_416h_1e_1c",
                  name:
                    "「野孩子の家」沙河高教园地铁附近  独门独户  日式主题   榻榻米  24小时卫浴  空调暖气",
                  detail: "整套一居室.可住两人 | 小汤山温泉度假村",
                  pri: "138"
                },
                {
                  src:
                    "https://img.meituan.net/phoenix/82dc279d3ec8b0ed4cc044837c951935926887.jpg@740w_416h_1e_1c",
                  name: "来间特价房-单间大床-采光好-安静",
                  detail: "整套2居士可住两人",
                  pri: "59"
                }
              ]
            },
            {
              name: "青岛",
              content: [
                {
                  src:
                    "https://img.meituan.net/phoenix/cc45ab2e61ab9cbb0b082b32b6aabd74316250.jpg@740w_416h_1e_1c",
                  name: "海淀三山五园附近的日式榻榻米风格的《胶囊公寓》",
                  detail: "整套可住3人 | 香山/八大处风景区",
                  pri: "99"
                },
                {
                  src:
                    "https://img.meituan.net/phoenix/1c4910f955fad2fe6fa7111d28fe76b5701551.jpg@740w_416h_1e_1c",
                  name:
                    "「野孩子の家」学府 金可儿床垫 沙河高教园 超过性价比 高端配置 独门独户 24小时卫浴 阳光大床房 野孩子 家",
                  detail: "整套一居室.可住两人 | 小汤山温泉度假村",
                  pri: "138"
                },
                {
                  src:
                    "https://img.meituan.net/iphoenix/c68e25b79fd097cdaa5143e89c4d1d97748749.jpg@740w_416h_1e_1c",
                  name: "北京方舍青年旅舍经济舒适  沙发客",
                  detail: "整套3居室.可住一人 | 国贸CBD/四惠",
                  pri: "68"
                },
                {
                  src:
                    "https://img.meituan.net/phoenix/328369f5504ebcfcbd0c16de4c4cb20584050.jpg@740w_416h_1e_1c",
                  name:
                    "沙河地铁站一公里，高教园，北航北邮中央财经大学矿业大学",
                  detail: "整套一居室.可住两人 | 小汤山温泉度假村",
                  pri: "50"
                },
                {
                  src:
                    "https://img.meituan.net/phoenix/328369f5504ebcfcbd0c16de4c4cb20584050.jpg@740w_416h_1e_1c",
                  name:
                    "「野孩子の家」沙河高教园地铁附近  独门独户  日式主题   榻榻米  24小时卫浴  空调暖气",
                  detail: "整套一居室.可住两人 | 小汤山温泉度假村",
                  pri: "138"
                },
                {
                  src:
                    "http://p0.meituan.net/phoenix/221eff73ee24a6af98af7cee9d9e1b30605778.jpg@740w_416h_1e_1c",
                  name: "来间特价房-单间大床-采光好-安静",
                  detail: "整套2居士可住两人",
                  pri: "59"
                }
              ]
            },
            {
              name: "济南",
              content: [
                {
                  src:
                    "https://img.meituan.net/phoenix/616a6d4ce456f28e8cd44cc41de2344a164798.jpg@740w_416h_1e_1c",
                  name: "海淀三山五园附近的日式榻榻米风格的《胶囊公寓》",
                  detail: "整套可住3人 | 香山/八大处风景区",
                  pri: "99"
                },
                {
                  src:
                    "http://p0.meituan.net/iphoenix/989e1f3f2c4766163f32ceb4eabeb9683075747.jpg@740w_416h_1e_1c",
                  name:
                    "「野孩子の家」学府 金可儿床垫 沙河高教园 超过性价比 高端配置 独门独户 24小时卫浴 阳光大床房 野孩子 家",
                  detail: "整套一居室.可住两人 | 小汤山温泉度假村",
                  pri: "138"
                },
                {
                  src:
                    "http://p0.meituan.net/iphoenix/16705def46b400fd1cb6a3757f931e73975449.png@740w_416h_1e_1c",
                  name: "北京方舍青年旅舍经济舒适  沙发客",
                  detail: "整套3居室.可住一人 | 国贸CBD/四惠",
                  pri: "68"
                },
                {
                  src:
                    "https://img.meituan.net/phoenix/0c5790e08249b349203319334727e673957610.jpg@740w_416h_1e_1c",
                  name:
                    "沙河地铁站一公里，高教园，北航北邮中央财经大学矿业大学",
                  detail: "整套一居室.可住两人 | 小汤山温泉度假村",
                  pri: "50"
                },
                {
                  src:
                    "https://img.meituan.net/iphoenix/50235a2aefdedc4af3764582e545c3e4107847.jpg@740w_416h_1e_1c",
                  name:
                    "「野孩子の家」沙河高教园地铁附近  独门独户  日式主题   榻榻米  24小时卫浴  空调暖气",
                  detail: "整套一居室.可住两人 | 小汤山温泉度假村",
                  pri: "138"
                },
                {
                  src:
                    "http://p0.meituan.net/iphoenix/21f7a71be2f3a2d53f0d4bd0f4a514463876792.jpg@740w_416h_1e_1c",
                  name: "来间特价房-单间大床-采光好-安静",
                  detail: "整套2居士可住两人",
                  pri: "59"
                }
              ]
            }
          ]
        }
      ],
      movieList:{
        title:"猫眼电影",
        class:'movie-bar',
        arr:{
              name:'即将上映',
              content:[
                      [{
                        src:'//p0.meituan.net/moviemachine/6664cd8c31f1254bc52793a158dc53ff8811971.jpg@321w_445h_1e_1c',
                        person:408,
                        mov:"调酒师"
                      },{
                        src:'//p0.meituan.net/moviemachine/331c70099c5728d53694009426fb84ba165027.jpg@321w_445h_1e_1c',
                        person:6637,
                        mov:"通往春天的列车"
                      },{
                        src:'//p0.meituan.net/movie/582d57e86924b47279c001dca5a12adb5773823.png@321w_445h_1e_1c',
                        person:4493,
                        mov:"危险记忆"
                      },{
                        src:'//p1.meituan.net/movie/eb37c5b78ec0c14aaad707700fcc1443390529.jpg@321w_445h_1e_1c',
                        person:262,
                        mov:"恋上美人鱼"
                      },{
                        src:'//p0.meituan.net/movie/6adbe9c365a3aaadfb65910bc279bf6a3385927.jpg@321w_445h_1e_1c',
                        person:125,
                        mov:"沉香"
                      }],
                      [{
                        src:'//p0.meituan.net/moviemachine/3b8ab40ddd5e499a6c2924f7c34b03702316978.jpg@321w_445h_1e_1c',
                        person:5235,
                        mov:"木兰：横空出世"
                      },{
                        src:'//p0.meituan.net/movie/115273d73084aa4e54c3401f7457e9fa1185899.jpg@321w_445h_1e_1c',
                        person:4352,
                        mov:"站住！小偷"
                      },{
                        src:'//p0.meituan.net/moviemachine/5abd9fa1ab51da3ff81f52c97e6f9f7076364.jpg@321w_445h_1e_1c',
                        person:324,
                        mov:"今生只为遇见你"
                      },{
                        src:'//p0.meituan.net/movie/4e0d0e826fded46ec79e1e335b2482be52178.jpg@321w_445h_1e_1c',
                        person:976,
                        mov:"北平会馆"
                      },{
                        src:'//p1.meituan.net/movie/31832c7a82d9db4921c55ceab5db30a91720579.jpg@321w_445h_1e_1c',
                        person:756,
                        mov:"六人-泰坦尼克上的中国幸存者"
                      }]
                  ]
            }
      },
      timer: null,
      isDetail: null,
      itemData: []
    };
  },
  created() {
    api.getLeftNavList().then(res => {
      this.itemData = res.data.data;
    });
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
    regis() {
      this.$router.push({ name: "register" });
    },
    login() {
      this.$router.push({ name: "login" });
    }
  },
  components: {
    swiper,
    mContainer,
    movie
  }
};
</script>

<style >
.m-search {
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
.m-login p {
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