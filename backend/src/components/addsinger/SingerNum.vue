<template>
<div class="bBox">
      
	<div>
		<p class="nowSinger">现有歌手</p>
		<el-row :gutter="20">
		  <el-col :span="6"><div class="grid-content bg-purple top1">内地歌手343255人数</div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple top2">海外歌手24554532人数</div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple top3">欧美歌手345435323人数</div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple top4">日韩歌手24356632人数</div></el-col>
		</el-row>
	</div>

	<div class="sBox">
		<div class="left">
			
			<div class="title">添加歌手</div>
			<div class="add">
				  <el-form ref="form" :model="form" label-width="80px">
				  <el-form-item label="名字" class="tIn">
				    <el-input v-model="msg.name" style="width:67%;"></el-input>
				  </el-form-item>
				  <el-form-item label="性别" class="tIn">
				    <el-select v-model="msg.sex" placeholder="请选择性别">
				      <el-option label="男" value="男"></el-option>
				      <el-option label="女" value="女"></el-option>
				    </el-select>
				  </el-form-item>
				   <el-form-item label="地区" class="tIn">
				    <el-select v-model="msg.area" placeholder="请选择地区">
				      <el-option label="内地" value="内地"></el-option>
				      <el-option label="海外" value="海外"></el-option>
				      <el-option label="欧美" value="欧美"></el-option>
				      <el-option label="日韩" value="日韩"></el-option>
				    </el-select>
				  </el-form-item>
				  <!-- <el-form-item label="添加时间">
				    <el-col :span="11">
				      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
				    </el-col>
				  </el-form-item> -->
					  <el-form-item class="addBtn">
					  	<el-button type="primary" @click="onSubmit()">立即添加</el-button>
					  </el-form-item>
				</el-form>
			</div>
		</div>

		<div class="right">
			<p class="pNum">最受欢迎歌手</p>
			<div class="rBox">
				<div class="singerBox" v-for="p in list">
					<img :src="p.img " class="img">
					<span class="name">{{p.name}}</span>
				</div>
			</div>
		</div>
	</div>
</div>

</template>
<script>
 export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          region2:'',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
         list:[
                   {img:'./static/1.jpg',name:'张杰'},
                   {img:'./static/2.jpg',name:'邓紫棋'},
                   {img:'./static/3.jpg',name:'薛之谦'},
                   {img:'./static/4.jpg',name:'TFboys'},
                   {img:'./static/5.jpg',name:'米娜'},
                   {img:'./static/6.jpg',name:'权志龙'},
                   {img:'./static/7.jpg',name:'Troye Sivan'},
                   {img:'./static/8.jpg',name:'鹿晗'},
                   {img:'./static/9.jpg',name:'Avril Lavigne'},
          ],
          msg:{
          	name:'',
          	sex:'',
          	area:''
          }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
         if (!window.localStorage) {
                    alert('浏览器不支持localStorage')
                }else{
                    var storage=window.localStorage;
                    var data=JSON.stringify(this.msg);
                    storage.setItem("data",data);
                    console.log(storage.data);
                }

      },
    }
  }
</script>
<style scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .grid-content{
  	text-align: center; 
    line-height: 80px;
    color:#fff;
  }
  .bBox{
  	width:90%;
  	margin:50px auto;
  }
  .nowSinger{
  	font-size: 20px;
  	line-height: 60px;
  	text-align: center;
  	color:#fff;
  	background: #1aa0a2;
  	margin-bottom: 30px;
  }

  .title{
  	text-align: center;
  	font-size: 20px;
  	margin-top:30px;
  	line-height: 50px;
  }
.add{
	padding:30px;
	border-top:1px solid #ddd;
	padding-top:50px;
}
.line{
	padding-left:15px;
}
.top1{
	background: #db3e35;
}
.top2{
	background: #c0e930;
}
.top3{
	background: #3094e9;
}
.top4{
	background: #20e051;
}
.left{
	width:50%;
	background: #ccc;
}
.sBox{
	display:-webkit-flex;
	-webkit-justify-content:space-between;
}
.right{
	width:40%;
}
.pNum{
	text-align: center;
	line-height: 50px;
	background: #ee1c57;
	color:#fff;
	margin-bottom: 30px;
}
.img{
	width:100%;
	height:120px;
}
.name{
	display:-webkit-flex;
	-webkit-justify-content:center;
	background: #
}
.singerBox{
	width:30%;
	border:1px solid #ccc;
	margin-bottom: 5px;
}
.rBox{
	display: -webkit-flex;
	-webkit-justify-content:space-around;
	flex-wrap: wrap;
}
.tIn{
	padding:20px 0;
}
.addBtn{
	padding-left: 15%;
}


</style>