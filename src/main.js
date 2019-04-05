import Vue from 'vue'
import App from './App.vue'
import router from './router'

const firebase = require('firebase');
import './components/firebaseInit'

Vue.config.productionTip = false
export const bus = new Vue();

let app;
firebase.auth().onAuthStateChanged(() => {
  if( !app ){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})


