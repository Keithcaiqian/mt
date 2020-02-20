<template>
  <el-carousel>
    <el-carousel-item v-for="item in imgList" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
    data(){
        return{
            imgList:[
                'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
                'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
                'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
            ]
        }
    }
}
</script>

<style scoped>
    .el-carousel{
        height: 240px;
        width: 550px;  
        overflow: hidden;
    }
    .el-carousel-item{
        width: 100%;
        height: 100%;
    }
    img{
        width: 550px;
        height: 240px;
    }
</style>