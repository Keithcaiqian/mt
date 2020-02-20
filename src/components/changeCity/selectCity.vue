<template>
  <div class="selectCity">
    <div class="letter">
      <dl>
        <dt>按拼音首字母选择：</dt>
        <dd v-for="(item,index) in letter" :key="index">
          <a :href="'#city_' + item">{{item}}</a>
        </dd>
      </dl>
    </div>
    <div class="area" v-for="(item,index) in allData" :key="index" :id="'city_' + index">
      <span class="title">{{index}}</span>
      <span class="city">
        <a @click="toCity(city)" v-for="city in item" :key="city.id">{{city.name}}</a>
      </span>
    </div>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      allData:{},
      letter: "ABCDEFGHJKLMNPQRSTWXYZ".split("")
    };
  },
 created() {
    api.getAllCityList().then(res=>{
        let list = res.data.data;
        let obj = {};
        list.forEach((item,index) =>{
           if(!obj[item.firstChar]){
               obj[item.firstChar] = [];
           }
           obj[item.firstChar].push(item);
       })
       this.allData = obj;
    })

  },
  methods:{
    toCity(item){
      console.log(item)
      this.$store.dispatch('setPosition',item);
      this.$router.push('/');
    }
  }
};
</script>
<style scoped>
.letter {
  padding: 30px 10px 30px 0;
}
dl {
  display: flex;
  justify-content: space-between;
}
dt {
  color: #333;
  font-size: 16px;
}
dd {
  font-size: 15px;
  padding: 2px 0;
  cursor: pointer;
}
.area {
  padding: 13px 30px 13px 10px;
}
.title {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffd000;
  line-height: 40px;
  text-align: center;
  vertical-align: top;
}
.city {
  display: inline-block;
  max-width: 1065px;
}
.city a {
  display: inline-block;
  font-size: 14px;
  margin: 10px 20px;
  cursor: pointer;
}
</style>