<template>

      <div id="main" :style="{width:'300px',height:'300px'}">
         
      </div>

</template>
<script>
import $ from 'jquery';
import Element from 'element-ui';
var echarts = require('echarts');

export default {
 name: 'Bank',
 data () {
 return {

 }
 },
 components: {
 },
 computed: {
 },
 methods: {
 },
 mounted() {
 /*ECharts图表*/
 // let echarts = require('echarts/lib/chart/bar')
 var myChart = echarts.init(document.getElementById('main'));
 myChart.setOption({
  series : [
   {
    name: '访问来源',
    type: 'pie',
    radius: '55%',
    itemStyle: {
    // normal: {
    //   // 阴影的大小
    //   shadowBlur: 200,
    //   // 阴影水平方向上的偏移
    //   shadowOffsetX: 0,
    //   // 阴影垂直方向上的偏移
    //   shadowOffsetY: 0,
    //   // 阴影颜色
    //   // shadowColor: 'rgba(0, 0, 0, 0.5)'
    //  }
    },
    data:[
     {value:400, name:'华南'},
     {value:335, name:'华北'},
     {value:310, name:'中西部'},
     {value:274, name:'东北部'},
     {value:235, name:'华西'}
    ]
   }
  ]
 })
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
#main{
    margin-top: 100px;
    margin-left: 50px;
}
#main h3{
    font-size: 26px;
    font-weight: normal;
}

</style>