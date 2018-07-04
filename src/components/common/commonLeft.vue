<template>
  <el-aside class="elm-aside" width="230px" style="background-color: rgb(50,65, 87)">
    <el-menu :default-openeds="['1', '7']">
      <router-link :to="{name:'index',query:{id:'首页'}}">
        <el-submenu index="7">
            <template class="elm-app" slot="title"><i class="el-icon-menu"></i>首页</template>
        </el-submenu>
      </router-link>
      <el-submenu index="1">
        <template class="elm-app" slot="title"><i class="el-icon-document"></i>数据管理</template>
        <el-menu-item-group>
          <router-link :key="index" v-for="(n ,index) in manageHref" :to="{name:`${n.id}`,params:{id:`${n.id}`},query:{id:`${n.name}`,type:`${n.type}`}}">
            <el-menu-item index="1-5">{{n.name}}</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>添加数据</template>
        <el-menu-item-group>
          <router-link  :key="index" v-for="(n ,index) in addlist" :to="{name:`${n.id}`,params:{id:`${n.id}`},query:{id:`${n.name}`,type:`${n.type}`}}">
          <el-menu-item index="2-1">{{n.name}}</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-star-on"></i>图表</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">用户分布</el-menu-item>
        </el-menu-item-group>
        
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-edit"></i>编辑</template>
        <el-menu-item-group>
          <router-link :to="{name:'shopactive',query:{type:'编辑',id:'活动发布'}}">
          <el-menu-item index="4-1">活动发布</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-setting"></i>设置</template>
        <el-menu-item-group>
          <el-menu-item index="4-1">管理员设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-info"></i>说明</template>
      </el-submenu>
    </el-menu>
  </el-aside>

</template>
<script>
export default {
  data: () => ({
    show3: true,
    manageHref: [
      {
        type: "数据管理",
        id: "userlist",
        name: "用户列表"
      },
      {
        type: "数据管理",
        id: "shoplist",
        name: "商家列表"
      },
      {
        type: "数据管理",
        id: "foodlist",
        name: "食品列表"
      },
      {
        type: "数据管理",
        id: "orderlist",
        name: "订单列表"
      },
      {
        type: "数据管理",
        id: "managerlist",
        name: "管理员列表"
      }
    ],
    addlist: [
      {
        type: "添加数据",
        id: "addproduct",
        name: "添加商品"
      },
      {
        type: "添加数据",
        id: "addshop",
        name: "添加商铺"
      }
    ]
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
.close {
  float: right;
  cursor: pointer;
}
.el-header {
  background-color: #324157;
  color: #20a0ff;
  line-height: 60px;
}
.el-breadcrumb__inner {
  color: #bfcbd9;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  color: #bfcbd9;
}
.el-breadcrumb__inner .is-link {
  color: #bfcbd9;
}
.elm-aside {
  color: white;
}

.el-aside {
  background: #b3c0d1;

  color: #333;
}
.el-header {
  line-height: 0px;
}
.el-breadcrumb {
  line-height: 60px;
}

.el-menu-item-group__title {
  font-size: 14px;
  color: white;
  cursor: pointer;
}
.el-menu-item-group__title:hover {
  color: #20a0ff;
}
.el-submenu i {
  vertical-align: middle;
}
.el-menu {
  background: #324157;
  color: white;
}
.el-menu-item-group__title {
  color: #bfcbd9;
}
.el-submenu__title {
  color: #bfcbd9;
}
.el-submenu__title i {
  color: #bfcbd9;
}
.el-submenu .is-active {
  color: #bfcbd9;
}
.el-menu-item {
  color: #bfcbd9;
}

.el-submenu .is-opened {
  color: blue;
}
.el-aside,
.el-main {
  overflow-y: hidden;
}

.el-menu-item-group .el-menu-item-group__title {
  padding: 7px 0 -1px 20px;
}
</style>