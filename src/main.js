import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)
 
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})


// Custom directives

Vue.directive('theme', {
  bind(el, binding){
    if(binding.value == 'wide'){
      el.style.maxWidth = '1200px'
    } else if (binding.value == 'narrow'){
      el.style.maxWidth = '400px'
    }
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})

// Filters

Vue.filter('snipped', function(value){
  return value.slice(0, 100) + '....'
})


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
