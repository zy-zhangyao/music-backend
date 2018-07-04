
<template>
	<div class="foodstypeBox">
		<p class="type-title">选择食品种类</p>
		<div class="typeBox">
			<p class="type-top">
				<el-form>
				<el-form-item label="食品种类">
					<el-select v-model="value" placeholder="请选择" class="typeleft">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
				    </el-select>
		        </el-form-item>
		    </el-form>
			</p>
			<select-foods></select-foods>
			
		</div>
	    
		
	</div>
	
</template>
<script type="text/ecmascript-6">
import SelectFoods from "./SelectFoods"
 export default {
 	components:{
 		SelectFoods
 	},
    data() {
      return {
        options: [{
          value: '选项1',
          label: '水果'
        }, {
          value: '选项2',
          label: '进口零食'
        }, {
          value: '选项3',
          label: '热饮'
        }, {
          value: '选项4',
          label: '加冰饮品'
        }, {
          value: '选项5',
          label: '干果'
        },
        {
          value: '选项6',
          label: '日韩料理'
        },
        {
          value: '选项7',
          label: '香辣火锅'
        },
        {
          value: '选项8',
          label: '优惠套餐'
        },
        {
          value: '选项9',
          label: '肯德基'
        },
        {
          value: '选项10',
          label: '快餐'
        }
        ],
        value: ''
      }
    }
  }
	
</script>

<style scoped>
.foodstypeBox{
	width:60%;
	margin:0 auto;

}
.type-title{
	line-height: 40px;
	margin-top:10px;
	font-size: 16px;
	font-weight: 600;
}
.typeBox{
	border:1px solid #f1f0f5;
    border-bottom:none;
}
.type-top{
	padding-top:10px;
	padding-bottom:30px;
	padding-left:10px;
}
.typeleft{
	float:left;
}
	


</style>