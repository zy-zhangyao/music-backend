<!-- 添加商品页面组件 -->
<template>
	<div>
    <common-right :title="title" :type="type"></common-right>
    <singer-num></singer-num>
	</div>
	
</template>
<script type="text/ecmascript-6">
import SingerNum from "../components/addsinger/SingerNum";
export default {
  data() {
    return {
      type: "",
      title: ""
    };
  },
  components: {
    SingerNum,
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
