<template>
  <div>
    <div style="float:left;padding-left:33px;">
        <span class="format">食品规格</span>
        <span  @click="show(1)" style="padding-left:10px;">
            <el-radio v-model="radio" label="1">单规格</el-radio>
        </span>
        <span  @click="show(2)" class="formatone" style="padding-left:10px;">
              <el-radio v-model="radio" label="2">多规格</el-radio>
        </span>
    </div>
    <div>
      <p v-if="flag==1">
          <foods-format-one></foods-format-one>
      </p>
      <p v-if="flag==2">
          <foods-format-two></foods-format-two>
      </p>
    </div>
    
    
  </div>
</template>
<script type="text/ecmascript-6">
// 导入单规格组件
import FoodsFormatOne from "./FoodsFormatOne"
// 引入多规格的组件
import FoodsFormatTwo from "./FoodsFormatTwo"
  export default {
    components:{
        FoodsFormatOne,
        FoodsFormatTwo,
    },
    data() {
      return {
        radio:'1',
        flag:1
      };
    },
    methods:{
      show(f){
        if(f==1){
          this.flag=1;

        }else{
          this.flag=2;
        }
      }
    }
  }
</script>
<style scoped>
.format{
  font-size: 14px;
  color:#4c576b;
}



</style>