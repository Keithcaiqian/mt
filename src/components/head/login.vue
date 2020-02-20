<template>
    <div class="login" v-if="!$store.state.userName">
        <router-link class="my-login" to="/login">立即登录</router-link>
        <router-link to="/register">注册</router-link>
    </div>
    <div class="login" v-else>
        <div class="exit" @click="exit">退出登录</div>
    </div>
</template>
<script>
export default {
    methods:{
        exit(){
            this.$store.commit('setUserName','');   
        }
    }
}
</script>
<style scoped>
    .my-login{
        color: orange;
    }
    .exit{
        cursor: pointer;
    }
    a,.exit{
        margin: 0 0 0 8px;
    }
    a:hover,.exit:hover{
        color: orange;
    }

</style>