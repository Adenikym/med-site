import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import home from './components/home.vue'
import about from './components/About.vue'
import contactus from './components/contact.vue'

Vue.use(VueRouter);

const routes =[
  {
    path:'/', component:home
  },
  {
    path:'/about', component:about
  },
{
  path:'/contact', component: contactus
}
]

const router= new VueRouter({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
