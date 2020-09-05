import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/router';
import store from "./stores/store";

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
