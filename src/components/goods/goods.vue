<template>
  <div class="goods">
    <crumb />
    <el-row>
      <el-col :span="18">
          <div class="wrapper">
              <m-select title='分类' :list='list' />
              <div class="line"></div>
              <m-select title='区域' :list='area' />
          </div>
          <div class="wrap-bottom">
             <ul class="nav">
               <li>智能排序</li>
               <li>价格排序
                 <span class="pri">
                    <i class="el-icon-caret-top up"></i>
                    <i class="el-icon-caret-bottom down"></i>
                 </span>
               </li>
               <li>人气最高</li>
               <li>评价最高</li>
             </ul>
             <goods-item />
          </div>
      </el-col>
      <el-col :span="6">
          <right-goods />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from '@/api/index.js';
import rightGoods from './rightGoods.vue';
import crumb from "./crumb.vue";
import mSelect from './select';
import goodsItem from './goodsItem'
export default {
  data() {
    return {
      list:[],
      area:[]
    };
  },
  created(){
     api.getFoodList().then(res=>{
       this.list = res.data.data;
     })
     api.getFoodPositonList().then(res=>{
       let data = res.data +']}';
       this.area = JSON.parse(data).data;
     })
  },
  components: {
    crumb,
    mSelect,
    goodsItem,
    rightGoods
  }
};
</script>
<style scoped>
.el-row {
  width: 1190px;
  margin: 25px auto 0;
}
.wrapper{
    background-color: #fff;
    border: 1px solid #eee;
    padding: 0 0 15px;
}
.line{
  width: 700px;
  height: 1px;
  background-color: #ccc;
  position: relative;
  left: 183px;
}
.wrap-bottom{
  background-color: #fff;
  border: 1px solid #eee;
  margin-top: 30px;
  padding: 11px 20px;
}
.nav{
  padding: 15px 20px 2px;
  display: flex;
}
.nav li{
  font-size: 14px;
  color: #222;
  padding: 0 10px;
  margin-right: 20px;
  cursor: pointer;
}
.nav span{
  width: 20px;
  position: relative;
} 
.nav span i{
  width: 10px;
  height: 10px;
  color: #eee;
  position: absolute
}
.nav .up{
  top: -2px;
}
.nav .down{
  bottom: 0;
}
</style>