<template>
<div style="flex:1">
  <common-right :title="title" :type="type"></common-right>
  <div style="padding:0 25px;">
  <el-table :data="tableData5.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width:100%">
      <el-table-column type="expand">
        <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="店铺名称">
                    <span>{{ props.row.shopName }}</span>
                </el-form-item>
                <el-form-item label=" 店铺地址">
                    <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="店铺介绍">
                    <span>{{ props.row.desc }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                    <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="联系电话">
                    <span>{{ props.row.tel }}</span>
                </el-form-item>
                <el-form-item label="评分">
                    <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="销售量">
                    <span>{{ props.row.desc }}</span>
                </el-form-item>
                <el-form-item label="分类">
                    <span>{{ props.row.category }}</span>
                </el-form-item>
            </el-form>
        </template>
      </el-table-column>
      <el-table-column label="店铺名称" prop="shopName"></el-table-column>
      <el-table-column label="店铺地址" prop="address"></el-table-column>
      <el-table-column label="店铺介绍" prop="desc"></el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <router-link :to="{name:'addproduct',params:{id:'addproduct'},query:{id:'添加商品',type:'添加数据'}}">
        <el-button size="mini" @click="addProduct(scope.$index, scope.row)">添加商品</el-button>
        </router-link>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
    <edit-shop-info ref="children" :msg="this.dialogFormVisible" :getData="this.tableData5"></edit-shop-info>
</div>  
</template>
<script>
// import BusinessListPage from "./BusinessListPage";
import EditShopInfo from "../components/BusinessList/edit/editShopInfo.vue";
export default {
  components: {
    EditShopInfo
  },
  data() {
    return {
      dialogFormVisible: true, //弹出框默认隐藏传值
      total: 0, //默认数据总数
      pagesize: 10, //每页的数据条数
      currentPage: 1, //默认开始页面
      tableData5: [
        {
          id: "12987122a",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987123b",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987125c",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987126d",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987122a",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987122a",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987122a",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987122a",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987123b",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987123b",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987123b",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987123b",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987123b",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987123b",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987123b",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
        },
        {
          id: "12987123b",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shopName: "王小虎夫妻店",
          shopId: "10333",
          monthSale: 320,
          tel: "010-3892392"
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
    },
    handleEdit() {
      console.log(this.dialogFormVisible);
      this.$refs.children.say(this.dialogFormVisible);
    },
    handleDelete() {
      console.log(222);
    }
  },
  created() {
    this.total = this.tableData5.length;
    this.type = this.$route.query.type;
    this.title = this.$route.query.id;
  }
};
</script>
<style>
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

.el-table .cell {
  display: flex;
  flex-wrap: nowrap;
}
</style>
