<template>
    <div>
        <!-- Form -->
        <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->

        <el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible" :append-to-body="true">
            <el-form :model="form">
                <el-form-item label="店铺名称" :label-width="formLabelWidth">
                <el-input v-model="this.getShopData[0].name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="详细地址" :label-width="formLabelWidth">
                <el-input v-model="this.getShopData[0].address" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="店铺介绍" :label-width="formLabelWidth">
                <el-input v-model="this.getShopData[0].desc" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" :label-width="formLabelWidth">
                <el-input v-model="this.getShopData[0].phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="店铺分类" :label-width="formLabelWidth">
                <el-cascader
                    :options="options"
                    :change-on-select="true"
                    size="medium"
                    ></el-cascader>
                </el-form-item>
                <el-form-item label="店铺图片" :label-width="formLabelWidth">
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
  //父组件通过props属性传递进来的数据
  props: {
    msg: {
      type: Boolean,
      default: true
    },
    getData: {
      type: Array,
      default: ""
    }
  },
  data() {
    return {
      //上传图片
      imageUrl: "",
      //收到的店铺信息
      getShopData: [],
      //遮罩层是否显示
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        delivery: false,
        type: []
      },
      //多级菜单
      formLabelWidth: "120px",
      options: [
        {
          value: "yiguoliaoli",
          label: "异国料理",
          children: [
            {
              value: "rihanliaoli",
              label: "日韩料理"
            },
            {
              value: "xican",
              label: "西餐"
            },
            {
              value: "pisayimian",
              label: "披萨意面"
            },
            {
              value: "dongnanyacai",
              label: "东南亚菜"
            }
          ]
        },
        {
          value: "guoshushengxian",
          label: "果蔬生鲜",
          children: [
            {
              value: "shuiguo",
              label: "水果"
            },
            {
              value: "shengxian",
              label: "生鲜"
            },
            {
              value: "shucai",
              label: "蔬菜"
            }
          ]
        },
        {
          value: "tianpinyinpin",
          label: "甜品饮品",
          children: [
            {
              value: "naichaguozhi",
              label: "奶茶果汁"
            },
            {
              value: "tianpin",
              label: "甜品"
            },
            {
              value: "kafei",
              label: "咖啡"
            }
          ]
        }
      ]
    };
  },
  methods: {
    //父传子
    say() {
      this.dialogFormVisible = this.msg;
      // console.log(this.dialogFormVisible)
    },
    //上传图片
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  created: function() {
    this.getShopData = this.getData;
    console.log(this.getShopData);
  }
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
  padding: 5px;
  border: 1px dashed #8c939d;
  border-radius: 10px;
}
.avatar {
  width: 150px;
  height: 150px;
  display: block;
  border-radius: 10px;
}
</style>