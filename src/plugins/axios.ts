import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
const baseURL = 'https://localhost:44328/api'
axios.defaults.baseURL = baseURL
Vue.use(VueAxios, axios)