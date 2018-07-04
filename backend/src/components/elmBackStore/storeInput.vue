<template>
  <div class="storeInput">
    <!--input框-->
    <p><span style="color:#ff4949;padding-top: 8px;">*</span><b>店铺名称 &nbsp;&nbsp;</b><el-input v-model="input"></el-input></p>
    <p><span style="color:#ff4949;padding-top: 8px;">*</span><b>详细地址 &nbsp;&nbsp;</b><el-input v-model="input" placeholder="请输入地址"></el-input></p>
    <p class="xian">当前城市：西安</p>
    <p><span style="color:#ff4949;padding-top: 8px;">*</span><b>联系电话 &nbsp;&nbsp;</b><el-input v-model="input"></el-input></p>
    <p> <b class="store">店铺简介 &nbsp;&nbsp;</b><el-input v-model="input"></el-input></p>
    <p> <b class="store">店铺标语 &nbsp;&nbsp;</b><el-input v-model="input"></el-input></p>

    <!--下拉列表-->
    <p> <b class="store">店铺分类 &nbsp;&nbsp;</b><el-cascader :options="options1" v-model="selectedOptions3"></el-cascader></p>

    <!--按钮-->
    <div class="storeCharacter"> <b class="store" style="padding-top: 15px;">店铺特点 &nbsp;&nbsp;</b>
      <div class="storeAll">
        <div class="storeButton" v-for="c in storeCharacter">
          <span class="character">{{c[0]}}</span>
          <el-switch v-model="c[1]" active-color="#20a0ff" inactive-color="#bfcbd9"></el-switch>
        </div>
      </div>
    </div>

    <!--计数器-->
    <p><b class="store">配送费</b><el-input-number v-model="num3" :min="0" :step="1"></el-input-number></p>
    <p><b class="store">起送价</b><el-input-number v-model="num4" :min="0" :step="1"></el-input-number></p>

    <!--时间-->
    <p><b class="store">营业时间</b>
      <el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"></el-time-select>
      <el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: startTime}"></el-time-select>
    </p>

    <!--上传-->
    <p><b class="store">上传店铺头像</b>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </p>

    <p><b class="store">上传营业执照</b>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </p>

    <p><b class="store">上传餐饮服务<br>许可证</b>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </p>

    <!--下拉列表-->
    <p><b class="store">优惠活动</b>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </p>

    <!--表格-->
    <p>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="活动标题" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"  v-show="isDelete"></i>
            <span style="margin-left: 10px" v-show="isDelete">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="活动名称" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p  v-show="isDelete">{{ scope.row.name }} </p>
              <p  v-show="isDelete">{{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium"  v-show="isDelete">{{ scope.row.name }}</el-tag>
                <p v-show="isShow">{{ scope.row.noData }}</p>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"  v-show="isDelete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
                label: '异国料理',
                children: [{
                  value: 'shejiyuanze',
                  label: '日韩料理'
                }, {
                  value: 'daohang',
                  label: '西餐'
                },{
                  value:'aa',
                  label:'披萨意面'
                },{
                  value:'bb',
                  label:'东南亚菜'
                }]
              }, {
                value: 'zujian',
                label: '快餐便当',
                children: [{
                  value: 'basic',
                  label: '简餐'
                }, {
                  value: 'form',
                  label: '盖浇饭'
                }, {
                  value: 'data',
                  label: '米粉面馆'
                }, {
                  value: 'notice',
                  label: '包子粥店'
                }, {
                  value: 'navigation',
                  label: '香锅砂锅'
                }, {
                  value: 'others',
                  label: '麻辣烫'
                },{
                  value:'a',
                  label:'饺子馄饨'
                },{
                  value:'b',
                  label:'生煎锅贴'
                }]
              }, {
                  value:'zz',
                label: '果蔬生鲜',
                children: [{
                  value:'c',
                  label: '水果'
                }, {
                  value:'d',
                  label: '生鲜'
                }, {
                  value:'e',
                  label: '蔬菜'
                },{
                  value:'f',
                  label:'海鲜水产'
                }]
              }, {
                  value:'cc',
                  label: '小吃夜宵',
                  children: [{
                    value:'h',
                    label: '小龙虾'
                  }, {
                    value:'i',
                    label: '地方小吃'
                  }, {
                    value:'j',
                    label: '烧烤'
                  },{
                    value:'k',
                    label:'炸鸡烤串'
                  },{
                    value:'l',
                    label:'鸭脖卤味'
                  }]
                },{
                  value:'zzz',
                  label: '特色菜系',
                  children: [{
                    value:'ierng',
                    label: '川湘菜'
                  }, {
                    value:'aaa',
                    label: '其他菜系'
                  }, {
                    value:'bbb',
                    label: '江浙菜'
                  },{
                    value:'ccc',
                    label:'粤菜'
                  },{
                    value:'g',
                    label:'海鲜'
                  }]
                },{
                  value:'zzzz',
                  label: '鲜花蛋糕',
                  children: [{
                    value:'iefwh',
                    label: '鲜花'
                  }, {
                    value:'aaaaa',
                    label: '蛋糕'
                  }, {
                    value:'bbbbb',
                    label: '面包'
                  }]
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
                ["品牌保证","value1"],["蜂鸟专送","value2"],["新开店铺","value3"],["外卖保","value4"],["准时达","value5"],["开发票","value6"]
              ],

              //计数器
              num3: 5,
              num4:20,

              //时间
              startTime: '',
              endTime: '',

              //上传
              dialogImageUrl: '',
              dialogVisible: false,

              //下拉列表
              options: [{
                value: '选项1',
                label: '满减优惠'
              }, {
                value: '选项2',
                label: '优惠大酬宾'
              }, {
                value: '选项3',
                label: '新用户立减'
              }, {
                value: '选项4',
                label: '进店领券'
              }],

              //表格
              value: '',
              tableData: [{
                date: '减',
                name: '满减优惠',
                address: '满30减5，满60减8',
                noData:'暂无数据'
              }],
              isDelete:true,
              isShow:false
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
