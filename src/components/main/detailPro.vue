<template>
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
                    <span class="cur" v-show="item.pri">￥<span class="pri">{{item.pri}}</span></span>
                    <span class="oldPri" v-show="item.oldPri">门市价￥{{item.oldPri}}</span>
                    <span class="per" v-show="item.per">￥<span class="pri">{{item.per}}</span>/人均</span>
                    <span class="area" v-show="item.area">{{item.area}}</span>
                </div>
            </div>
      </el-col>
    </el-row>
</template>
<script>
export default {
    props:['list']
}
</script>
<style scoped>
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
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .m-detail{
        margin: 0 0 7px;
        font-size: 12px;
        color: #999;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .price{
        overflow: hidden;
    }
    .cur,.per{
        color: #be9e4d;
        margin: 0 6px 0 0;
    }
    .cur .pri,.per .pri{
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