<template>
<div style="flex:1;">
<common-right :title="title" :type="type"></common-right>
<div style="padding:0 25px;">
  <el-table
  :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
  style="width: 100%">
  <el-table-column
    prop="num"
    label="#"
    width="180">
  </el-table-column>
  <el-table-column
    prop="date"
    label="注册日期"
    >
  </el-table-column>
  <el-table-column 
    prop="name"
    label="用户姓名">
  </el-table-column>
  <el-table-column
    prop="address"
    label="注册地址">
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
  data() {
    return {
      title: "",
      type: "",
      total: 0, //默认数据总数
      pagesize: 10, //每页的数据条数
      currentPage: 1, //默认开始页面
      tableData: [
        {
          num: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          num: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          num: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          num: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          num: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          num: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          num: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          num: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
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
    // console.log(this.$route.params.id);
    this.title = this.$route.query.id;
    this.type = this.$route.query.type;
  }
};
</script>