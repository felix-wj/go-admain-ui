/* import './assets/main.css' */

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue';
import '@arco-themes/vue-go-admin/css/arco.css';

import App from './App.vue'
import router from './router'
// 引入 Arco 图标库
import * as ArcoIconModules from '@arco-design/web-vue/es/icon';

const app = createApp(App)
// 挂载全局图标
for (const name in ArcoIconModules) {
    app.component(name, ArcoIconModules[name])
}
app.use(createPinia())
app.use(router)
app.use(ArcoVue)


app.mount('#app')
