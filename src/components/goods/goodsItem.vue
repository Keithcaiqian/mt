<template>
  <div>
    <el-row class="goods-item" v-for="(item,index) in dataList" :key="index">
      <el-col :span="7">
        <a href="#">
          <span>{{index}}</span>
          <img
            :src="item.image"
            alt
          />
        </a>
      </el-col>
      <el-col :span="17">
        <el-row class='topCon'>
          <div class="name">{{item.title}}</div>
          <el-rate
            v-model="item.score"
            disabled
            text-color="#ff9900"
            score-template="{item.score}"
          ></el-rate>
          <span class='evalute' v-if="item.score > 4.5">很好</span>
          <span class='evalute' v-else-if="item.score > 4">好</span>
          <span class='evalute' v-else-if="item.score > 3.5">不错</span>
          <span class='evalute' v-else-if="item.score > 3">一般</span>
          <span class='evalute' v-else>差</span>
          <span class='score'>{{item.score}}分</span>
          <span class='disNum'>{{item.commentNum}}人评论</span>
          <div>
              <span>{{item.address}}</span>
              <i class="el-icon-location"></i>
              <span class='map'>查看地图</span>
          </div>
          <div>
              <span>人均￥{{item.avgPrice}}</span>
          </div>
        </el-row>
        <el-row class="botCon" v-for="(it,ind) in item.dealItems.slice(0,2)" :key="ind" >
            <div class="title">{{it.title}}</div>
            <span class="pri">￥{{it.price}}</span>
            <span class="oldPri">门市价￥{{it.counterPrice}}</span>
            <span class="soldNum">已售{{it.saleNum}}</span>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    created(){
      api.getGoodsList().then(res=>{
        this.dataList = res.data.data;
      })
    },
    data() {
      return {
        value: 3.7,
        dataList:[]
      }
    }
}
</script>
<style scoped>
.goods-item {
  padding: 20px 0 16px;
}
a span {
  position: absolute;
  width: 20px;
  background-color: #fb6433;
  text-align: center;
  color: #fff;
  line-height: 13px;
  font-size: 12px;
  border-radius: 2px;
  top: 26px;
  left: -2px;
}
img {
  width: 220px;
  height: 125px;
}
.el-rate{
    display: inline-block;
}
.name{
    font-size:16px;
    color:#333;
}
.topCon{
    font-size:12px;
    color:#666;
    line-height:25px;
    border-bottom: 1px dotted #eee;
}
.evalute,.score{
    margin-right:10px;
}
.disNum{
    color:#ff9900;
}
.el-icon-location{
    color:yellow;
    margin-left:10px;
}
.map{
    color:#222;
}
.botCon{
  padding:  6px 10px 8px 0;
}
.botCon .title{
  font-size: 16px;
  color: #666;
}
.botCon .pri{
  color: #ff6600;
  font-size: 15px;
  margin-right: 10px;
}
.botCon .oldPri,.botCon .soldNum{
  font-size: 12px;
  margin-right: 10px;
  color: #999;
}
.show{
  margin-top: 16px;
  font-size: 12px;
  cursor: pointer;
}
</style>