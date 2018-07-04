<template>
<div style="flex:1;">
    <common-right :title="title" :type="type"></common-right>
    <div style="padding:0 25px;">
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="商品名称">
                        <span>{{ props.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="所属店铺">
                        <span>{{ props.row.shop }}</span>
                    </el-form-item>
                    <el-form-item label="商品 ID">
                        <span>{{ props.row.id }}</span>
                    </el-form-item>
                    <el-form-item label="店铺 ID">
                        <span>{{ props.row.shopId }}</span>
                    </el-form-item>
                    <el-form-item label="商品分类">
                        <span>{{ props.row.category }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址">
                        <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="商品描述">
                        <span>{{ props.row.desc }}</span>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column label="食品名称" width="200" prop="goods"></el-table-column>
        <el-table-column label="食品介绍" width="400" prop="desc"></el-table-column>
        <el-table-column label="评分" width="150" prop="score"></el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
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
          desc: "香喷喷的牛肉面，让人垂涎欲滴",
          address: "上海市",
          goods: "牛肉面",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员",
          score: "9.4"
        },
        {
          id: "12987122",
          name: "王小二",
          data: "2018-06-21 08:40",
          category: "江浙小吃、小吃零食",
          desc: "香喷喷的牛肉面，让人垂涎欲滴",
          address: "上海市",
          goods: "牛肉面",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员",
          score: "9.4"
        },
        {
          id: "12987122",
          name: "王小二",
          data: "2018-06-21 08:40",
          category: "江浙小吃、小吃零食",
          desc: "香喷喷的牛肉面，让人垂涎欲滴",
          address: "上海市",
          goods: "牛肉面",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员",
          score: "9.4"
        },
        {
          id: "12987122",
          name: "王小二",
          data: "2018-06-21 08:40",
          category: "江浙小吃、小吃零食",
          desc: "香喷喷的牛肉面，让人垂涎欲滴",
          address: "上海市",
          goods: "牛肉面",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员",
          score: "9.4"
        },
        {
          id: "12987122",
          name: "王小二",
          data: "2018-06-21 08:40",
          category: "江浙小吃、小吃零食",
          desc: "香喷喷的牛肉面，让人垂涎欲滴",
          address: "上海市",
          goods: "牛肉面",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员",
          score: "9.4"
        },
        {
          id: "12987122",
          name: "王小二",
          data: "2018-06-21 08:40",
          category: "江浙小吃、小吃零食",
          desc: "香喷喷的牛肉面，让人垂涎欲滴",
          address: "上海市",
          goods: "牛肉面",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员",
          score: "9.4"
        },
        {
          id: "12987122",
          name: "王小二",
          data: "2018-06-21 08:40",
          category: "江浙小吃、小吃零食",
          desc: "香喷喷的牛肉面，让人垂涎欲滴",
          address: "上海市",
          goods: "牛肉面",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员",
          score: "9.4"
        },
        {
          id: "12987122",
          name: "王小二",
          data: "2018-06-21 08:40",
          category: "江浙小吃、小吃零食",
          desc: "香喷喷的牛肉面，让人垂涎欲滴",
          address: "上海市",
          goods: "牛肉面",
          shop: "王小虎夫妻店",
          shopId: "10333",
          Permissions: "管理员",
          score: "9.4"
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
