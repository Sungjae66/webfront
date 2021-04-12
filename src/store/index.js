import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:sessionStorage.getItem('user'),
    token:sessionStorage.getItem('token'),
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
      state.token = data
      sessionStorage.removeItem('token')
    },

  },
  actions: {
  },
  modules: {
  }
})
