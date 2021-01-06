<template>
    <a-row>
      <a-col :span="24">
        <data-card></data-card>
      </a-col>
      <a-col :span="24" class="space">
           <div class="space1"></div>
          <data-select class="space2"></data-select>
      </a-col>
      <a-col :span="24">
        <div class="space1"></div>
       <data-charts class="space2"></data-charts>
      </a-col>
    </a-row>
</template>

<script>
import DataCard from './DataCard.vue'
import DataCharts from './DataCharts.vue'
import DataSelect from './DataSelect.vue'
export default {
    name:'UserCharts',
    components:{
        DataCard,
        DataCharts,
        DataSelect    
    }
}
</script>
<style lang="scss">
.space{
    margin-top: 30px !important;
}
.space1{
    height: 10px;
    background-color: white;
    margin-left: 5px !important;
}

.space2{
    margin-left: 5px !important;
}
</style>