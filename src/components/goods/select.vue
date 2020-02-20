<template>
    <div class="wrap clearfix">
        <div class="leftContent">
            <span class="til">{{title}}</span>
            <a href="#"><span class="all">全部</span></a>
        </div>
        <div class="rightContent">
            <div class="item" v-for="item in list" :key="item.type">{{item.title}}
                <i class="el-icon-caret-bottom"></i>
                <m-selected class="select" :title="item.title" :sublist='item.subList'/>
            </div>
        </div>
    </div>
</template>
<script>
import mSelected from './mySelected.vue'
export default {
    props:['list','title'],
    components:{
        mSelected
    }
}
</script>
<style scoped>
    .clearfix::after{
        content: '';
        display: block;
        clear: both;
    }
    .wrap{
        padding: 15px 20px 0;
    }
    .leftContent{
        float: left;
        width: 20%;
    }
    .rightContent{
        float: right;
        width: 80%;
    }
    .til,a{
        width: 80px;
        display: inline-block;
        font-size: 14px;
        color: #333;
    }
    .all{
        display: inline-block;
        color: #222;
        padding: 3px 10px;
        background: linear-gradient(to bottom right,#FFD000,#FFBD00);
        border-radius: 10px;
    }
    .item{
        padding: 0 0 10px;
        display: inline-block;
        width: 120px;
        height: 28px;
        font-size: 14px;
        line-height: 28px;
        cursor: pointer;
        position: relative;
    }
    .select{
        display: none;
        position: absolute;
        z-index: 5;
    }
    .item:hover .select{
        display: block;
    }
    .line{
        height: 1px;
        width: 100%;
    }
</style>