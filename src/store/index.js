import { createStore } from 'vuex'

import state from './state'
import getters from './getters'
import  mutations from './mutations.js'
import  actions from './actions.js'
import panier from './panier'



const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    panier
  },
})

export default store;