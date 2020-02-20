<template>
      <el-container>
          <el-header height='' style="padding:0;">
            <my-head/>
          </el-header>
          <el-main style="overflow:visible">
            <router-view></router-view>
          </el-main>
          <el-footer height='' style="padding:0;">
             <my-footer />
          </el-footer>
      </el-container>
</template> 

<script>
import myHead from '@/components/head/index.vue'
import myFooter from '@/components/footer/footer.vue'

export default {
  name: 'home',
  components:{
    myHead,
    myFooter
  }
}
</script>

<style>
  .el-container{
  background-color: #F8F8F8;
  }
  .el-header, .el-footer {
    color: #333;
    font-size: 12px;
  }
</style>