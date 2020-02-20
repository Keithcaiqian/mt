<template>
    <div class="hotCity">
        <dl>
            <dt>{{title}}</dt>
            <dd v-for="item in cityList" :key="item.id" @click="toCity(item)">{{item.name}}</dd>
        </dl>
        
    </div>
</template>
<script>
export default {
    props:['title','cityList'],
    methods:{
        toCity(item){
            this.$store.dispatch('setPosition',item);
            this.$router.push({name:'main'});
        }
    }
}
</script>
<style scoped>
    .hotCity{
        padding: 30px 0;
        border-bottom: 1px solid #eee;
    }
    .hotCity dl{
        display: flex;
    }
    .hotCity dl dt{
        font-size: 16px;
        color: #333;
    }
    .hotCity dl dd{
        font-size: 14px;
        color: #666;
        margin: 0 20px;
        cursor: pointer;
    }
</style>
