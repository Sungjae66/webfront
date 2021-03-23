import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:sessionStorage.getItem('user'),
    token:sessionStorage.getItem('token'),
    count:0,
  },
  mutations: {
    SET_TOKEN:(state,data)=>{
      state.token = data
      sessionStorage.setItem('token',data)
    },
    SET_USER:(state,data)=>{
      state.user = data
      sessionStorage.setItem('user',data)
    },
    DEL_TOKEN:(state,data)=>{
      state.user = data
      sessionStorage.removeItem('token')
    },
    increment :(state,data)=>{
      state.count++
    },
  },
  actions: {
  },
  modules: {
  }
})
