<template>
<div style="flex:1;">
    <common-right :title="title"></common-right>
    <div style="padding-left:40px;">
        <index-tops></index-tops>
        <div class="charts">
          <index-echarts></index-echarts>
          <index-piecharts></index-piecharts>
        </div>
    </div>
</div>
</template>
<script>
import indexEcharts from "../components/index/IndexEcharts";
import indexPiecharts from "../components/index/IndexPiecharts";
import indexTops from "../components/index/IndexTops";

var echarts = require("echarts");
export default {
  data() {
    return {
      title: ""
    };
  },
  components: {
    indexEcharts,
    indexPiecharts,
    indexTops
  },
  created() {
    this.title = this.$route.query.id;
    // console.log(this.$route.query.id);
  }
};
</script>
<style scoped>
.charts {
  flex: 1;
  display: flex;
}
</style>
