<template>
    <div >
    <common-right :title="title" :type="type"></common-right>
    <storeCommon></storeCommon>
    </div>
</template>

<script>
import storeCommon from "../components/elmBackStore/storeCommon";
export default {
  data() {
    return {
      type: "",
      title: ""
    };
  },
  name: "elmBackStore",
  components: {
    storeCommon
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
