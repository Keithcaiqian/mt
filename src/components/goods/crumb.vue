<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>
            <router-link to="/">{{$store.state.position.name}}美团</router-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
            <router-link to="#">{{$store.state.position.name}}{{$route.params.id}}</router-link>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .el-breadcrumb{
        width: 1190px;
        margin: 10px auto;
        font-size: 12px;
    }
    .el-breadcrumb__inner a,.el-breadcrumb__item:last-child .el-breadcrumb__inner a{
        color: #222;
        font-weight: normal;
        cursor: pointer;
    }
    .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover{
        cursor: pointer;
    }
    a:hover{
        color: orange!important;
    }
</style>