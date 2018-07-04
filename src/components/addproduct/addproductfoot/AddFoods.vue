<template>
	<div class="addfoodsBox">
		<p class="add-title">选择食品种类</p>
	    <div class="addBox">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="食品名称" prop="name">
				    <el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<el-form-item label="食品活动" prop="name1">
				    <el-input v-model="ruleForm.name1"></el-input>
				</el-form-item>
				<el-form-item label="食品详情" prop="name2">
				    <el-input v-model="ruleForm.name2"></el-input>
				</el-form-item>

				<!-- 引入食品图片组件 <-->
				<p>
				    <foods-img></foods-img>
				</p>
			
				<el-form-item label="食品特点" prop="region">
				    <el-select v-model="ruleForm.region"  clearable placeholder="请选择活动区域" class="move-left">
				      <el-option label="新品" value="shanghai"></el-option>
				      <el-option label="招牌" value="beijing"></el-option>
				    </el-select>
				</el-form-item>
				<!-- 引入规格选项组件 -->
				<p>
					<foods-format></foods-format>
				</p>
				<el-form-item class="addsBtn">
				    <el-button type="primary" @click="submitForm('ruleForm')">确认添加食品</el-button>
				    <el-button @click="resetForm('ruleForm')" class="newadd">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
		
	</div>
	
</template>
<script type="text/ecmascript-6">
// 导入上传图片组件
import FoodsImg from "./FoodsImg"
// 导入规格选项组件
import FoodsFormat from "./FoodsFormat"

 export default {
 	components:{
 		FoodsImg,
 		FoodsFormat
 	},
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入食品名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
           name1: [
            { required: true, message: '请输入食品活动', trigger: 'blur' },
          ],
            name2: [
            { required: true, message: '请输入食品详情', trigger: 'blur' },
          ],
          region: [
            { required: true, message: '请选择食品特点', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
	
</script>

<style scoped>
.addfoodsBox{
	width:60%;
	margin:15px auto;
}
.add-title{
	line-height: 40px;
	margin-top:10px;
	font-size: 16px;
	font-weight: 600;
}
.addBox{
	border:1px solid #f1f0f5;
	padding:10px;
	box-shadow: 0 0 10px #f1f0f5;
}
.move-left{
	float:left;
	padding-left: 10px;
}
.addsBtn{
	clear:both;
	padding-right:230px;
}
.newadd{
	width:126px;
	margin-top: 10px;
	margin-left:0px;
}
	


</style>