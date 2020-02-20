<template>
    <div class="changeCity">
        <el-row>
            <m-city />
        </el-row>
        <el-row>
            <hot-city title="热门城市" :cityList='hotCity'/>
        </el-row>
        <el-row>
            <hot-city title="最近访问" :cityList='recentCity'/>
        </el-row>
        <el-row>
            <select-city />
        </el-row>
    </div>
</template>
<script>
import api from '@/api/index.js'
import mCity from '@/components/changeCity/city.vue'
import hotCity from '@/components/changeCity/hotCity.vue'
import selectCity from '@/components/changeCity/selectCity.vue'
export default {
    data(){
        return{
            hotCity:[],
            recentCity:[]
        }
    },
    created(){
        api.getHotCity().then(res=>{
            this.hotCity = res.data.data;
        })
        api.getRecentCity().then(res=>{
            this.recentCity = res.data.data;
        })
    },
    components:{
        mCity,
        hotCity,
        selectCity
    }
}
</script>
<style>
    .changeCity{
        width: 1190px;
        background-color: #fff;
        border: 1px solid #eee;
        margin: 20px auto 0;
        padding: 20px;
        box-sizing: border-box;
    }
</style>