<template>
      <store-input></store-input>
</template>
<script>
import storeInput from "./storeInput";
export default {
  data: () => ({
    show3: true
  }),
  components: {
    storeInput
  }
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
