<template>
     <a-row style="background-color:white">
      <a-col :span="17">
           <div id="container"></div>
      </a-col>
      <a-col :span="7">
        <div class="top">
       <ul>
        <h4>各厂排名</h4>
        <li><span class="topnum">1</span>打开冰箱门</li>
       </ul>
     </div>
      </a-col>
    </a-row>
</template>
<script>
import { Column } from '@antv/g2plot';
const data = [
  { name:'炼钢厂', number: 138 },
  { name: '炼铁厂', number: 52 },
  { name: '动力厂', number: 61 },
  { name: '烧结厂', number: 145 },
  { name: '带钢厂', number: 48 },
];
export default {
    methods:{
    charts(){
       const bar = new Column('container',{
        data,
        xField: 'name',
        yField: 'number',
        seriesField: 'name',
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle', // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: '#FFFFFF',
            opacity: 100
          },
          formatter(value){
            return value.number+"项"
          }
        },
    });
    bar.render();
    },
},
mounted:function(){
    this.charts();
  }
}
</script>
<style lang="scss">
 .top{
    width:100%;
    height: 330px;
    text-align: center;
    background-color: white;
  }
   .totalnum{
    font-size: 23px;
  }
   #container{
    height: 330px;
    width: 100%;
    background-color: white;
  }
   h4{
    margin-top: .5em !important;
    margin-bottom: .5em !important;
    color: rgba(0,0,0,.85) !important;
    font-weight: 500 !important;
  }
  li{
    color: rgba(0,0,0,.85);
    font-size: 14px;
    line-height: 22px;  
    list-style: none;
  }
   .topnum{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-top: 1.5px;
    margin-right: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    background-color: #314659;
    color: white;
    border-radius: 20px;
  }
</style>
