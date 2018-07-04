<template>
  
    <div class="shopnum">
        <h2>数据统计</h2>
        <div class="numdetail">
            <p class="aa">当日数据 :</p>
            <p><span>20</span>新增用户</p>
            <p><span>14</span>新增订单</p>
            <p><span>23</span>新增管理员</p>
        </div>
        <div class="numdetail">
            <p class="bb">总数据 :</p>
            <p><span>10974</span>注册用户</p>
            <p><span>4455</span>订单</p>
            <p><span>16178</span>管理员</p>
        </div>
     
    </div>

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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
.shopnum {
  width: 100%;
  height: 150px;
  text-align: center;
  margin-top: 20px;
}
.shopnum h2 {
  font-size: 26px;
  font-weight: normal;
  // text-align: center;
}
.numdetail {
  width: 100%;
  display: flex;
  text-align: center;
  margin-top: 15px;
  // margin-left: 40px;
  // justify-content:space-around;
}
.numdetail p {
  font-size: 14px;
  width: 150px;
  color: #666666;
  height: 40px;
  line-height: 40px;
  background: #e5e9f2;
  border-radius: 5px;
  margin: 0 10px;
}
.numdetail p span {
  font-size: 24px;
  color: #333338;
  padding-right: 5px;
}
.numdetail .aa {
  background: #ff9800;
  font-size: 20px;
  color: white;
}
.numdetail .bb {
  background: #20a0ff;
  font-size: 20px;
  color: white;
}
</style>