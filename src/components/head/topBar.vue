<template>
    <div class="top-bar">
        <el-col :span="16">
            <div class="position">
                <i class="el-icon-location"/>
                {{$store.state.position.name}}
                <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>
                [
                <a href="#" v-for="item in nearCity" :key="item.id">{{item.name}}</a>
                ]
            </div>
            <login/>
        </el-col>
        <el-col :span="8">
            <ul>
                <li class="active">
                    <router-link to="/" style="color:orange;">我的美团</router-link>
                    <dl>
                        <dd>
                            <router-link to="/">我的订单</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">我的收藏</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">抵用券</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">账户设置</router-link>
                        </dd>
                    </dl>
                </li>
                <li>
                    <router-link to="/">手机APP</router-link>
                </li>
                <li class="active">
                    <router-link to="/">商家中心</router-link>
                    <dl class="merchant">
                        <dd>
                            <router-link to="/">美团餐饮商户中心</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">登录商家中心</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">美团智能收银</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">我想合作</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">手机免费开店</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">餐饮代理商招募</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">商家申请开票</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">免费合作美团排队</router-link>
                        </dd>
                    </dl>
                </li>
                <li class="active">
                    <router-link to="/">美团规则</router-link>
                    <dl class="pro">
                        <dd>
                            <router-link to="/">规则中心</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">规则目录</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">规则评议院</router-link>
                        </dd>
                    </dl>
                </li>
                <li class="active">
                    <router-link to="/">网站导航</router-link>
                    <div class="netNav">
                        <dl class="first">
                            <dt>酒店旅游</dt>
                            <dd>
                                <router-link to="/">国际机票</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">火车票</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">民宿</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">经济型酒店</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">主题酒店</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">商务酒店</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">公寓</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">豪华酒店</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">客栈</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">青年旅社</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">度假酒店</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">别墅</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">农家院</router-link>
                            </dd>
                        </dl>
                        <dl class="second">
                            <dt>吃美食</dt>
                            <dd>
                                <router-link to="/">烤鱼</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">特色小吃</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">烧烤</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">自助餐</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">火锅</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">代金券</router-link>
                            </dd>
                        </dl>
                        <dl class="third">
                            <dt>看电影</dt>
                            <dd>
                                <router-link to="/">热映电影</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">热门影院</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">热映电影口碑榜</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">最受期待电影</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">国内票房榜</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">北美票房榜</router-link>
                            </dd>
                            <dd>
                                <router-link to="/">电影排行榜</router-link>
                            </dd>
                        </dl>
                        <dl class="fourth">
                            <dt>手机应用</dt>
                             <dd>
                                <router-link to="/">
                                   <img src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt="">
                                </router-link>
                            </dd>
                             <dd>
                                <router-link to="/">
                                   <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt="">
                                </router-link>
                            </dd>
                             <dd>
                                <router-link to="/">
                                   <img src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png" alt="">
                                </router-link>
                            </dd>
                             <dd>
                                <router-link to="/">
                                   <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" alt="">
                                </router-link>
                            </dd>
                             <dd>
                                <router-link to="/">
                                   <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" alt="">
                                </router-link>
                            </dd>
                        </dl>
                    </div>
                </li>
            </ul>
        </el-col>
    </div>
</template>
<script>
import api from '@/api/index.js'
import login from './login'
export default {  
    data(){
        return{
           nearCity:[]
        }

    },
    components:{
        login
    },
    created(){
        api.getCurPosition().then(res=>{
            this.$store.dispatch('setPosition',res.data.data);
            this.nearCity = res.data.data.nearCity;
        })
    }
    
}
</script>

<style scoped>
    .top-bar{
        line-height: 40px;
        padding: 0 20px;
        height: 40px;
        width: 1190px;
        margin: 0 auto;
    }
    .el-col{
        text-align: left;
    }
    a{
        color: #999;
    }
    .position a{
        margin: 0 4px;
    }
    a:hover{
        color: orange;
    }
    .changeCity{
        border: 1px solid #ccc;
        padding: 1px;
        border-radius: 3px;
    }
    .position{
        margin-right: 8px;
    }
    .position,.login{
        display: inline-block;
    }
    ul{
        display: flex;
        justify-content: space-around;
    }
    li{
        position: relative;
        z-index: 10;
    }
    li a{
        padding: 12px 14px;
    }
    li>a{
        position: relative;
        border: 1px solid transparent;
        z-index: 20;
    }   
    li dl{
        line-height: 35px;
        display: none;
        position: absolute;
        top: 38px;
    }
    .pro{
        text-align: center;
    }
    .pro a{
        padding: 12px 8px;
    }
    .active:hover>a,dl{
        background-color: #fff;
        border: 1px solid #eee;
        box-sizing: border-box;
    }
    .active:hover>a{
        border-bottom: 1px solid transparent;
        color: orange;
    }
    .active:hover dl{
        display: block;
    }
    .merchant{
        text-align: center;
        right: 0;
        width: 130px;
    }
    .netNav{
        position: absolute;
        right: 0;
        top:38px;
        width: 1150px;
        justify-content: space-between;
        padding: 20px;
        border: 1px solid #eee;
        display: none;
        background-color: #fff;
    }
    .active:hover .netNav{
        display: flex;
    }
    .netNav dl{
        display: block;
        border: none;
        position: static;
    }
    .netNav dl dt{
        font-size: 14px;
        text-align: center;
        margin-bottom: 20px;
    }
    .netNav .first{
        width: 264px;
    }
    .netNav .first dd,.netNav .second dd{
        width: 88px;
        float: left;
        text-align: center;
    }
    .netNav .second{
        width: 177px;
    }
    .netNav .third{
        width: 127px;
        text-align: center;
    }
    .fourth{
        width: 440px;
    }
    .fourth dd{
        float: left;
    }
    .fourth img{
        width:60px;
        height: 60px;
    }
</style>