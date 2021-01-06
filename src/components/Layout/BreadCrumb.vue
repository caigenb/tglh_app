<template>

    <a-breadcrumb class="layout_shrink_bread">
    <a-icon type="profile" /> 
        <a-breadcrumb-item>隐患上报系统</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">系统管理</a></a-breadcrumb-item>
    </a-breadcrumb>     
</template>
<script>
export default {
    name:'BreadCrumb'
}
</script>
<style lang="scss">
.layout_shrink_bread{
    width:15rem;
    height:3rem;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-left: 5% !important;
}
</style>