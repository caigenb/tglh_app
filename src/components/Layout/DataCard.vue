<template>
   <a-row>
    <a-col :span="8">
      <a-card title="总上报数" class="total ">
        <p class="totalnum">{{allnum}}条</p>
      </a-card>
    </a-col>
    <a-col :span="8">
     <a-card title="审核通过" class="total">
        <p class="totalnum">{{pass}}条</p>
      </a-card>
    </a-col>
    <a-col :span="8">
       <a-card title="处理隐患" class="total">
        <p class="totalnum">{{finish}}处</p>
      </a-card>
    </a-col>
  </a-row>
  
</template>
<script>
export default {
  name:'DataCard',
  data(){
    return{
      allnum:'11111',
      pass:'111111',
      finish:'444444',
    }
  },
}
</script>
<style lang="scss">
  .total{
    text-align: center;
    width: 80%;
    height: 150px;
  }
  .totalnum{
    font-size: 23px;
  }
</style>