<template>
  <div>
      <el-button type="text" @click="open3"  class="addspec">添加规格</el-button>
      <el-table :data="tableData" style="width: 100%;">
            <el-table-column label="规格" width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.spec }}</span>
      </template>
      </el-table-column>
         <el-table-column  label="包装费"  width="180">
      <template slot-scope="scope">
         <span>{{ scope.row.pack }}</span>
      </template>
      </el-table-column>
     <el-table-column  label="价格"  width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.price }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          spec: '默认',
          pack: '20',
          price: '20'
        }]
      }
    },
    methods: {
       open3() {
        this.$prompt('请输入规格', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的规格是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
<style scoped>
.addspec{
  background: #20a1ff;
  color:#fff;
  padding:10px 10px;
  margin-top:30px;
  clear:both;
  float:left;
  margin-left:280px;
}
</style>