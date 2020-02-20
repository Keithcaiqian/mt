<template>
    <div class="right-goods">
        <p>猜你喜欢</p>
        <div class="item" v-for="item in dataList" :key="item.itemId">
            <img src="http://p0.meituan.net/msmerchant/b34690f52ebdda221e4153c35878de8c2243192.jpg@275w_156h_1e_1c" alt="">
            <div class="title">{{item.title}}</div>
            <el-rate
                v-model="item.score"
                disabled
                text-color="#ff9900"
          ></el-rate>
          <span class="comment">{{item.commentNum}}个评论</span>
          <div class="position">{{item.areaName}}</div>
          <div class="price">￥<span class="iprice">{{item.lowPrice}}</span>起</div>
        </div>
    </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    created(){
        api.getRecommendGoods().then(res=>{
            this.dataList = res.data.data.map(item=>{
                item.score = Number(item.score);
                return item;
            });
            console.log(this.dataList)
        })
    },
    data(){
        return{
            dataList:[]
        }
    }
}
</script>
<style scoped>
    .right-goods{
        width: 230px;
        background-color: #fff;
        border: 1px solid #eee;
        margin-left: 30px;
        padding: 16px 20px 0;
    }
    p{
        font-size: 16px;
        margin-bottom: 12px;
    }
    .item{
        line-height: 25px;
        width: 190px;
        margin: 5px auto;
        cursor: pointer;
    }
    .item img{
        width: 190px;
        height: 106px;
    }
    .title{
        font-size: 14px;
        color: #222;
    }
    .el-rate{
        display: inline-block;
    }
    .comment,.position{
        font-size: 12px;
        color: #999;
    }
    .price{
        color:  #ff6600;
        font-size: 14px;
        font-weight: bold;
    }
    .iprice{
        font-size: 22px;
    }
</style>