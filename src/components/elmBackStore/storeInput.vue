<template>
  <div class="storeInput">
    <!--input框-->
    <p><span style="color:#ff4949;padding-top: 8px;">*</span><b>公司名称 &nbsp;&nbsp;</b><el-input v-model="input" placeholder="请输入公司名称"></el-input></p>
    <p><span style="color:#ff4949;padding-top: 8px;">*</span><b>公司地址 &nbsp;&nbsp;</b><el-input v-model="input" placeholder="请输入公司地址"></el-input></p>
    <p class="xian">当前城市：西安</p>
    <p><span style="color:#ff4949;padding-top: 8px;">*</span><b>联系电话 &nbsp;&nbsp;</b><el-input v-model="input"></el-input></p>
    <p> <b class="store">公司简介 &nbsp;&nbsp;</b><el-input v-model="input"></el-input></p>
    <p> <b class="store">公司标语 &nbsp;&nbsp;</b><el-input v-model="input"></el-input></p>

    <!--下拉列表-->
    <p> <b class="store">公司分类 &nbsp;&nbsp;</b><el-cascader :options="options1" v-model="selectedOptions3"></el-cascader></p>

    <!--按钮-->
    <div class="storeCharacter"> <b class="store" style="padding-top: 15px;">公司特点 &nbsp;&nbsp;</b>
      <div class="storeAll">
        <div class="storeButton" v-for="c in storeCharacter">
          <span class="character">{{c[0]}}</span>
          <el-switch v-model="c[1]" active-color="#20a0ff" inactive-color="#bfcbd9"></el-switch>
        </div>
      </div>
    </div>

    <!--时间-->
    <p><b class="store">签约时间</b>
      <el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"></el-time-select>
      <el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: startTime}"></el-time-select>
    </p>

    <!--上传-->
    <p><b class="store">上传公司头像</b>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </p>

    <p><b class="store">上传公司营业<br>执照</b>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </p>

    <p><b class="store">公司经营许可<br>证</b>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </p>

      <!--小按钮-->
    <p style="padding-left: 20%;padding-bottom: 20px;"> <el-button type="primary">立即创建</el-button></p>
  </div>
</template>

<script>
    export default {
        name: "storeInput",
        data() {
            return {
               //input框
               input: '',

              //下拉列表
              options1: [
                {value: 'zhinan',
                label: '传统唱片公司'
              }, {
                value: 'zujian',
                label: '文化公司'
              }, {
                  value:'zz',
                label: '经纪公司'
              }, {
                  value:'cc',
                  label: '推广公司'
                }],
              selectedOptions3: ['zujian', 'data', 'tag'],

              //开关
              value1:true,
              value2: true,
              value3:true,
              value4:true,
              value5:true,
              value6:true,
              storeCharacter:[
                ["唱片印刷","value1"],["唱片出版","value2"],["音乐制作","value3"],["明星包装","value4"],["歌手宣传推广","value5"],["演出","value6"]
              ],

              //时间
              startTime: '',
              endTime: '',

              //上传
              dialogImageUrl: '',
              dialogVisible: false,


              //表格
              // value: '',
              // tableData: [{
              //   date: '减',
              //   name: '满减优惠',
              //   address: '满30减5，满60减8',
              //   noData:'暂无数据'
              // }],
              // isDelete:true,
              // isShow:false
            }
        },
        methods: {
          handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDelete(index, row) {
          this.isDelete = false;
          this.isShow = true
        }
      }
    }
</script>


<style lang="scss" scoped>
  .storeInput {
     p {
          display: flex;
          justify-content: flex-start;
          width: 50%;
          margin-left: 20%;
          margin-top: 15px;
          font-size: 14px;
          color:#48576a;
          span {
              color: #ff4949;
              margin-right: 1%;
              padding-top: 5px;
          }
          .store{
             padding-left:1% ;
             padding-right: 1.5%;
             padding-top:15px;
          }
          b{
            font-weight: 100;
            padding-right: 1%;
            padding-top: 5px;
          }

      }
     .xian{
        padding-left: 5.5%;
      }
      .storeCharacter{
        display: flex;
        justify-content: flex-start;
        width: 50%;
        margin-left: 20.5%;
        margin-top: 18px;
        font-size: 14px;
        color:#48576a;
       .storeAll{
         width:100%;
         padding-top: 5px;
         display: flex;
         justify-content: flex-start;
         flex-wrap:wrap;
         .storeButton{
           display: flex;
           justify-content: space-between;
           padding-top: 10px;
           padding-right:2%;
           .character{
             color:black;
           }
         }
       }
        b{
          font-weight: 100;
          padding-right: 1%;
          padding-top: 5px;
        }
      }
  }

  .storeInput p span[data-v-0b22c5d1]{
    color:black;
    padding-top: 0;
  }
</style>
