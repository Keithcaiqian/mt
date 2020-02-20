<template>
    <div class='m-search'>
<div class="search">
        <div class="left">
            <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" @click="toHomePage">
            <!-- <div class="sel">
                <div class="sel-til">
                    全部分类
                    <span class="icon"></span>
                </div>
                <ul class="sel-item">
                    <li>
                        <router-link to="/">美食</router-link>
                    </li>
                    <li>
                        <router-link to="/">外卖</router-link>
                    </li>
                    <li>
                        <router-link to="/">酒店</router-link>
                    </li>
                </ul>
            </div> -->
        </div>
        <div class="center">
            <input type="text" v-model="searchWd" placeholder="搜索商家或地点" @focus="focu" @blur="blur" @input="inp">
            <el-button type="primary" class="btn" icon="el-icon-search"></el-button>
            <dl class="hotSearch" v-if="isHot">
                <dt>热门搜索</dt>
                <dd v-for="(item,index) in hotdata" :key="index" > 
                    <router-link :to="{name:'detail',params:{id:item}}">{{item}}</router-link>
                </dd>
            </dl>
            <dl class="searchList" v-if="isSearch">
                <dd v-for="(item,index) in searchdata" :key="index" > 
                    <router-link  :to="{name:'detail',params:{id:item}}">{{item}}</router-link>
                </dd>
            </dl>
        </div>
    </div>
    </div>
    
</template>
<script>
import api from '@/api/index.js'
export default {
    data(){
        return{
            searchWd:'',
            isFocu:false,
            hotdata:[],
            searchdata:[],
        }
    },
    created(){
        api.getHotSearch().then(res =>{
            this.hotdata = res.data.data;
        })
    },
    computed:{
        isHot(){
            return this.isFocu && !this.searchWd;
        },
        isSearch(){
            return this.isFocu && this.searchWd;
        }
    },
    methods:{
        focu(){
            this.isFocu = true;
        },
        blur(){
            setTimeout(() => {
                this.isFocu = false;
            }, 200);
        },
        inp(){
            let value = this.searchWd;
            api.getSearchList().then(res => {
                this.searchdata = res.data.data.list.filter((item,index) =>{
                    return item.indexOf(value) > -1;
                });
            })
        },
        toHomePage(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    .m-search{
        width: 100%;
        background-color: #fff;
    }
    .search{
        padding: 0 20px;
        width: 1190px;
        margin: 0 auto;
        height: 122px;
    }
    .left{
        float: left;
        padding: 28px 60px 40px 0;
    }
    img{
        width: 126px;
        height: 46px;
        cursor: pointer;
    }
    .center{
        float: left;
        margin-left: 120px;
        padding: 28px 0 0;
    }
    input{
        position: relative;
        padding: 15px;
        outline: none;
        border: 1px solid #eee;
        border-radius: 5px;
        width: 470px;
        box-sizing: border-box;
    }
    .btn{
        background-color: orange;
        border: none;
        padding: 16px 27px;
        color: #000;
    }
    .btn:hover{
        background-color: orange;
        color: #000;
    }
    .hotSearch,.searchList{
        position: absolute;
        width: 470px;
        border: 1px solid #eee;
        background-color: #fff;
        text-align: left;
        line-height: 20px;
        padding: 5px;
        box-sizing: border-box;
        color: #999;
        z-index: 5;
    }
    .hotSearch dt{
        font-weight: bolder;
    }
    /* .sel{
        position: relative;
        display: inline-block;
        margin-left: 20px;
        vertical-align: 18px;
        padding: 2px;
        border-radius: 3px;
        line-height: 20px;
        cursor: pointer;
    }
    .sel-til{
        border: 1px solid #eee;
        position: relative;
        z-index: 10;
        background-color: #fff;
    } */
    /* .icon{
        display: inline-block;
        background-image: url('../../assets/下拉 .png');
        background-repeat: no-repeat;
        background-size: cover;
        width: 10px;
        height: 10px;
        transition: all 0.2s;
    }
    .sel:hover .icon{
        transform: rotate(-180deg);
    }
    .sel:hover .sel-til{
        border-bottom: 1px solid transparent;
    }
    .sel:hover .sel-item{
        display: block;
    }
    .sel-item{
        display: none;
        position: absolute;
        width: 200px;
        border: 1px solid #eee;
        padding: 5px;
        background-color: #fff;
        top: 23px;
        left:2;
        text-align: left;
    } */
</style>