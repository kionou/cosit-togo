const state = {
    panier: [],
  }
const  mutations = {
    setPanier(state, nouveauPanier) {
      state.panier = nouveauPanier;
    },
  }

  export default {
    state,
    mutations
   
  }
  