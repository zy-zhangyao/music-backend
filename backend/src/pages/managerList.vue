<template>
<div style="flex:1;">
    <common-right :title="title" :type="type"></common-right>
    <div style="padding:0 25px;">
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="data" label="注册日期">
        </el-table-column>
        <el-table-column prop="address" label="地区">
        </el-table-column>
        <el-table-column prop="Permissions" label="权限">
        </el-table-column>
    </el-table>
<el-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page.sync="currentPage"
  layout="total, prev, pager, next"
  :total="total">
</el-pagination>
    </div>
</div>
</template>
<script>
export default {
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(val);
      this.currentPage = val;
    }
  },
  created() {
    this.total = this.tableData.length;
    this.type = this.$route.query.type;
    this.title = this.$route.query.id;
  },
  data() {
    return {
      total: 0, //默认数据总数
      pagesize: 10, //每页的数据条数
      currentPage: 1, //默认开始页面
      tableData: [
        {
          id: "12987122",
          name: "王小二",
          data: "2018-06-21 08:40",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员"
        },
        {
          id: "12987122",
          name: "王小二",
          data: "2018-06-21 08:40",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员"
        },
        {
          id: "12987122",
          name: "王小二",
          data: "2018-06-21 08:40",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员"
        },
        {
          id: "12987122",
          name: "王小二",
          data: "2018-06-21 08:40",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员"
        },
        {
          id: "12987122",
          name: "王小二",
          data: "2018-06-21 08:40",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员"
        },
        {
          id: "12987122",
          name: "王小二",
          data: "2018-06-21 08:40",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员"
        },
        {
          id: "12987122",
          name: "王小二",
          data: "2018-06-21 08:40",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员"
        }
      ]
    };
  }
};
</script>
<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
