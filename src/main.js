import Vue from "vue"
import App from "./App.vue"
import * as svgicon from 'vue-svgicon';
import "./assets/main.css"
import store from "./store"
import SvgIcon from './assets/icons/SvgIcon.vue'

Vue.component('svg-icon', SvgIcon)

Vue.config.productionTip = false

Vue.use(svgicon, {
    classPrefix: 'AppIcon-',
  });

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app")
