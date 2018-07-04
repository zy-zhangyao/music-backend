<template>
  <div class="imgBox">
    <p class="img-title">上传食品图片</p>
    <p>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      
    </p>
    
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>
<style scoped>
.imgBox{
  display:flex;
}
.img-title{
  font-size: 14px;
  color:#4c576b;
  padding-left:5px;
  padding-right:15px;
}
  
</style>