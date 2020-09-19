import Vue from 'vue'
import App from './App.vue'
import Router from './router'

console.log(Router);

new Vue({
    router: Router,
    render: h => h(App)
}).$mount('#root')