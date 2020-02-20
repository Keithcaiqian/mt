<template>
    <div>
        <dl>
            <dt>{{title}}</dt>
            <dd v-for="item in sublist" :key="item.id">
                <a href="#">{{item.name}}</a>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:['sublist','title']
}
</script>
<style  scoped>
    dl{
        background-color: #fff;
        border: 1px solid #eee;
        width: 430px;
        padding: 19px 15px 9px;
        position: relative;
        top: 4px;
    }
    dl::before{
        content: '^';
        display: block;
        position: absolute;
        color: #eee;
        font-size: 15px;
        top: -13px;
        left: 11px;
        background-color: #fff;
    }
    dt{
        font-size: 16px;
        color: #ccc;
    }
    dd{
        display: inline-block;
        width: 100px;
    }
</style>