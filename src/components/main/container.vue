<template>
<div class="m-container">
  <div class="container" v-for="(ele,ind) in arrs" :key="ind + '2'">
    <dl :class="ele.class">
      <dt>{{ele.title}}</dt>
      <dd v-for="(props,num) in ele.arr" :key="num + '3'">{{props}}</dd>
    </dl>
    <el-row class="show">
      <el-col :span="8" v-for="(item, index) in list" :key="index" >
            <img
                :src="item.src"
                class="image"
            />
            <div>
                <div class="name">{{item.name}}</div>
                <div class="m-detail">{{item.detail}}</div>
                <div class="price">
                    <span class="cur">￥<span class="pri">{{item.pri}}</span></span>
                    <span class="oldPri">门市价￥{{item.oldPri}}</span>
                    <span class="area">{{item.area}}</span>
                </div>
            </div>
      </el-col>
    </el-row>
  </div>
</div>

</template>
<script>
export default {
    props:['arrs'],
    data(){
        return {
            list:[
                {
                    src:'//p1.meituan.net/bbia/360a7f3525892469991aec4e35a87133217587.jpg@552w_312h_1e_1c',
                    name:'浮帝欧蛋糕',
                    detail:'蛋糕5选1,约8英寸，圆形',
                    pri:'118',
                    oldPri:'238',
                    area:'模式口'
                },{
                     src:'//p0.meituan.net/msmerchant/7b3940c74b3bd1b22a6cfa42d3e39ec8341205.jpg@552w_312h_1e_1c',
                    name:'真麦工坊（梧桐苑店）',
                    detail:'蛋糕5选1,约6英寸',
                    pri:'88',
                    oldPri:'168',
                    area:'门头沟城区'
                },{
                     src:'//p1.meituan.net/dpmerchantpic/894a230555aedd63c423a454b48e5842180576.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|552w_312h_1e_1c',
                    name:'真麦工坊（梧桐苑店）',
                    detail:'蛋糕5选1,约6英寸',
                    pri:'88',
                    oldPri:'168',
                    area:'门头沟城区'
                },
                {
                    src:'//p1.meituan.net/bbia/360a7f3525892469991aec4e35a87133217587.jpg@552w_312h_1e_1c',
                    name:'浮帝欧蛋糕',
                    detail:'蛋糕5选1,约8英寸，圆形',
                    pri:'118',
                    oldPri:'238',
                    area:'模式口'
                },{
                     src:'//p0.meituan.net/msmerchant/7b3940c74b3bd1b22a6cfa42d3e39ec8341205.jpg@552w_312h_1e_1c',
                    name:'真麦工坊（梧桐苑店）',
                    detail:'蛋糕5选1,约6英寸',
                    pri:'88',
                    oldPri:'168',
                    area:'门头沟城区'
                },{
                     src:'//p1.meituan.net/dpmerchantpic/894a230555aedd63c423a454b48e5842180576.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|552w_312h_1e_1c',
                    name:'真麦工坊（梧桐苑店）',
                    detail:'蛋糕5选1,约6英寸',
                    pri:'88',
                    oldPri:'168',
                    area:'门头沟城区'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .container{
        width: 1190px;
        border-radius: 15px;
        background-color: #fff;
        margin: 40px auto;
    }
    .food-bar{ 
        background-image: linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%);
    }
    .movie-bar{
        background:linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104);
    }
    .area-bar{
        background: linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74);
    }
    .container dl{
        border-radius:5px 5px 0 0;
        width: 100%;
        height: 44px;
    }
    .container dt,.container dd{
        display: inline-block;
        color: #fff;
        line-height: 44px;
        padding: 0 5px;
        cursor: pointer;
        position: relative;
    }
    .container dd:hover::after{
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: #fff;
    }
    .container dt{
        font-size: 18px;
        margin: 0 10px 0 13px;
    }
    .show{
        padding: 11px 10px 10px;
    }
    .show .el-col{
        padding: 10px;
        cursor: pointer;
        transition: 0.5s;
    }
    .show .el-col:hover{
        background-color: rgb(247, 244, 244);
    }
    .show .el-col img{
        width: 100%;
        height: 208px;
        border-radius: 5px;
    }
    .name{
        margin: 8px 0;
        font-size: 16px;
        color: #222;
    }
    .m-detail{
        margin: 0 0 7px;
        font-size: 12px;
        color: #999;
    }
    .price{
        overflow: hidden;
    }
    .cur{
        color: #be9e4d;
        margin: 0 6px 0 0;
    }
    .cur .pri{
        font-size: 22px;
    }
    .oldPri{
        color: #999;
        font-size: 12px;
        text-decoration: line-through;
    }
    .area{
        float: right;
        margin: 10px 0 0;
        color: #999;
        font-size: 12px;
    }
</style>