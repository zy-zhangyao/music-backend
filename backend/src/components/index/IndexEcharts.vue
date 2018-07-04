<template>
  
     <div id="echartContainer" style="width:500px; height:500px;margin-top:50px;"></div>

</template>
<script>
import $ from "jquery";
import Element from "element-ui";
var echarts = require("echarts");

export default {
  data: () => ({
    show3: true
  }),
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echartContainer"));
    // 绘制图表
    myChart.setOption({
      title: { text: "ELM部分城市销量" },
      tooltip: {},
      xAxis: {
        data: ["西安", "成都", "合肥", "郑州", "厦门", "石家庄"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [30, 60, 40, 50, 50, 20]
        }
      ]
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
</style>