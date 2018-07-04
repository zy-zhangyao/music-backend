<!-- 添加商品页面组件 -->
<template>
	<div>
    <common-right :title="title" :type="type"></common-right>
		<foods-type></foods-type>
		<add-foods></add-foods>
	</div>
	
</template>
<script type="text/ecmascript-6">
import FoodsType from "../components/addproduct/addproducttop/FoodsType";
import AddFoods from "../components/addproduct/addproductfoot/AddFoods";
export default {
  data() {
    return {
      type: "",
      title: ""
    };
  },
  components: {
    FoodsType,
    AddFoods
  },
  created() {
    this.type = this.$route.query.type;
    this.title = this.$route.query.id;
  }
};
</script>

<style scoped>
div {
  flex: 1;
}
</style>
