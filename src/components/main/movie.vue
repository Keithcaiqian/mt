<template>
  <div class="container">
    <dl :class="arrs.class">
      <dt>{{arrs.title}}</dt>
      <dd class="proDetail" >{{arrs.arr.name}}</dd>
    </dl>
    <el-carousel indicator-position="outside" :autoplay="false" trigger='click'>
      <el-carousel-item v-for="(item,index) in arrs.arr.content" :key="index">
        <ul>
            <li v-for="it in item" :key="it.src">
                <img :src="it.src" alt="">
                <div class="info">
                    <div class="person">
                        <span class="people">{{it.person}}</span>
                        <span class="descri">人想看</span> 
                    </div>
                    <div class="movie-name"> 
                        {{it.mov}}
                    </div>
                </div>
            </li>
        </ul>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  props: ["arrs"]
};
</script>
<style scoped>
.container {
  width: 1190px;
  border-radius: 15px;
  background-color: #fff;
  margin: 40px auto;
}
.movie-bar {
  background: linear-gradient(
      to right,
      rgb(250, 60, 104) 2%,
      rgb(254, 70, 77) 97%
    )
    rgb(250, 60, 104);
}
.container dl {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 44px;
}
.container dt,
.container dd {
  display: inline-block;
  color: #fff;
  line-height: 44px;
  padding: 0 5px;
  cursor: pointer;
  position: relative;
}
.container dd::after {
  content: "";
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
.container dt {
  font-size: 18px;
  margin: 0 10px 0 13px;
}
.el-carousel{
    padding: 20px 10px 0;
}
ul{
    display: flex;
    justify-content: space-between;
}
li{
    width: 214px;
    height: 297px;
    position: relative;
    color: #fff
}
img{
    width: 100%;
    height: 100%;
}
.info{
    position: absolute;
    width: 100%;
    bottom: 0;
    padding:  0 0 10px 10px;
    line-height: 25px;
    font-weight: bold;
    background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, rgba(29,45,55,0.80) 99%)
}
.people{
    color: #fd9827;
}
.descri{
    font-size: 12px;
}
.movie-name{
    width: 106px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

</style>