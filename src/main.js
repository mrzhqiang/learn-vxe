import Vue from 'vue';
import App from './App.vue';

import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';

Vue.config.productionTip = false;
Vue.use(VXETable);
// 给 vue 实例挂载内部对象，例如：
// Vue.prototype.$XModal = VXETable.modal
// Vue.prototype.$XPrint = VXETable.print
// Vue.prototype.$XSaveFile = VXETable.saveFile
// Vue.prototype.$XReadFile = VXETable.readFile

new Vue({
    render: h => h(App),
}).$mount('#app');
