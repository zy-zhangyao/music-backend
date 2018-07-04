<!-- 后台添加食品种类组建 -->
<!-- 模板部分 -->
<template>
  <div class="selectBox">
  	<el-collapse v-model="activeNames" @change="handleChange">
		  <el-collapse-item title="添加食品种类" name="1">
		    <div>
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item label="食品种类">
					    <el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="种类描述">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">提交</el-button>
					</el-form-item>
				</el-form>
		    </div>
		  </el-collapse-item>
		</el-collapse>
  </div>
</template>


<!-- js部分 -->
<script type="text/ecmascript-6">



 export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>


<!-- scss部分 -->
<style  scoped>
.selectBox{
	text-align:center;

}
</style>