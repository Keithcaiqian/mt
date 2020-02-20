<template>
    <div class="select" :class="{disable:disabled}">
        <h3>{{province.area}}</h3>
        <div class="wrap">
            <div class="col" v-for="(item,index) in province.arr" :key="index">
                <span :class="{'active':it.provinceName == value }"
                 v-for="(it,index) in item" :key="index + '1'"
                 @click="changeArea(it)">
                    {{it.provinceName}}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['province','value','disabled'],
    data(){
        return{
           
        }
    },
    methods:{
        changeArea(data){
            this.$emit('change',data);
        }
    }
}
</script>
<style scoped>
    .select{
        background-color: #fff;
        border:1px solid #eee;
        padding: 20px 0 20px 15px;
        z-index: 5;
    }
    h3{
        color: #ccc;
        font-size: 16px;
        margin-bottom: 11px;
    }
    .wrap{
        display: flex;
    }
    .col{
        display: flex;
        flex-direction: column;
    }
    .col span{
        color: #666;
        font-size: 12px;
        margin: 6px 38px 6px 0;
        white-space: nowrap;
        border-radius: 7px;
        padding: 1px 8px;
    }
    .col span:hover{
        background-color: #eee;
    }
    .col span.active{
           background: linear-gradient(to bottom right,#FFD000,#FFBD00);
           color: #222; 
    }
    .disable{
        display: none;
    }
</style>