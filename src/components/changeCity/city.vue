<template>
  <div class="wrap">
    <span>按省份选择：</span>
    <div class="province" @click="selProvince" v-document-click='documentClick' >
      {{proName}}
      <i class="el-icon-caret-bottom"></i>
      <m-select :province="provinceList" v-if="isProvince" @change='changePro' :value='proName'/>
    </div>
    <div class="city" @click="selCity" v-document-click='documentClick' :class="{disabled:isDisable}">
      {{ciName}}
      <i class="el-icon-caret-bottom"></i>
      <m-select :disabled="isDisable" :province="cityList" v-if="isCity" @change='changeCity' :value='ciName'/>
    </div>
    <span>直接搜索：</span>
    <el-select
        v-model="value"
        filterable
        remote
        reserve-keyword
        placeholder="请输入城市中文或拼音"
        :remote-method="remoteMethod"
        :loading="loading">
        <el-option
        v-for="item in options"
        :key="item"
        :label="item"
        :value="item">
        </el-option>
  </el-select>
  </div>
</template>
<script>
import mSelect from './select.vue'
import api from '@/api/index.js'
export default {
    data(){
        return {
            isDisable:true,
            value:'',
            loading:false,
            isProvince:false,
            isCity:false,
            proName:'省份',
            ciName:"城市",
            options:['山东','甘肃','江苏','北京','云南','海南','浙江'],
            provinceList:{
                area:'省份',
                arr:[]
            },
            cityList:{
                 area:'城市',
                arr:[]
            }
        }
    },
    created(){
        api.getProvinceList().then(res =>{
            let arr = res.data.data;
            let num = Math.ceil(arr.length / 12);
            for(let i=0;i<num;i++){
                this.provinceList.arr.push(arr.splice(i,12));
            }
        })
    },
    methods:{
        selProvince(e){
            e.stopPropagation();
            this.isProvince = true;
            if(this.isCity == true){
                this.isCity = false;
            }
        },
        selCity(e){
            e.stopPropagation();
            this.isCity = true;
            if(this.isProvince == true){
                this.isProvince = false;
            }
        },
        documentClick(){
            this.isProvince = false;
            this.isCity = false;
        },
        changePro(data){
            this.proName = data.provinceName;
            this.isDisable = false;
            this.cityList.arr =[];
            let num = Math.ceil(data.cityInfoList.length / 12);
            for(let i=0;i<num;i++){
                this.cityList.arr.push(data.cityInfoList.splice(i,12));
            }
            this.cityList.arr.forEach(function(item){
                item.forEach(function(ele,index){
                    ele.provinceName = ele.name;
                })
            })
        },
        changeCity(data){
            this.ciName = data.name;
            this.$store.dispatch('setPosition',data);
            this.$router.push('/');
        },
        remoteMethod(){
            // 请求后端接口
        }
    },
    components:{
        mSelect
    }
}
</script>
<style scoped>
.wrap {
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}
.province,
.city {
  display: inline-block;
  width: 150px;
  height: 40px;
  margin: 0 10px 0 20px;
  padding: 10px 5px 10px 10px;
  border: 1px solid #eee;
  box-sizing: border-box;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
}
.city{
    margin-right: 60px;
}
i {
  float: right;
}
.select {
  position: absolute;
  top: 45px;
  left: 0;
}
.disabled{
    cursor: not-allowed;
}
</style>