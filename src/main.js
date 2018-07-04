import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false


import VueAMap from "vue-amap"
Vue.use(VueAMap)
    // 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 高德的key
    key: '257dc1b3855a027119f7ac6c1d46d308',
    // 插件集合
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 高德 sdk 版本，默认为 1.4.4
    v: '1.4.4'
});

import commonLeft from "./components/common/commonLeft";
Vue.component('commonLeft', commonLeft)

import commonRight from "./components/common/commonRight";
Vue.component('commonRight', commonRight)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})