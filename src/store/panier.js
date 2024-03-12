
// panier.js
// export default {
//   namespaced: true,
//   state: {
//     items: JSON.parse(localStorage.getItem('cart')) || [],
//     alertMessage:'',
//   },
//   mutations: {
//     addToCart(state, payload) {
//       // Vérifier si le produit existe déjà dans le panier
//       const existingItem = state.items.find(item => item.id === payload.id);

//       if (existingItem) {
//         // existingItem.quantity += payload.quantity || 1;
//         console.log('eee');
//         state.alertMessage = 'Cette formation est déjà dans le panier.';
//       } else {
//         state.items.push(payload);
//         // state.alertMessage = null;
//       }

//       localStorage.setItem('cart', JSON.stringify(state.items));
//     },
//     removeFromCart(state, index) {
//       state.items.splice(index, 1);
//       localStorage.setItem('cart', JSON.stringify(state.items));
//     },
//     // Add other mutations like removeItem, clearCart, etc. if needed
//   },
//   actions: {
//     addToCart({ commit }, payload) {
//       commit('addToCart', payload);
//     },
//     removeFromCart({ commit }, index) {
//       commit('removeFromCart', index);
//     },
//     // Add other actions as needed
//   },
//   getters: {
//     cartItems(state) {
//       return state.items;
//     },
//     // Add other getters as needed
//   },
// };


export default {
  namespaced: true,
  state: {
    items: JSON.parse(localStorage.getItem('cart')) || [],
    formationIds: JSON.parse(localStorage.getItem('formationIds')) || [],
    alertMessage: '',
    showModal: false,
    prevCartLength: 0,
  },
  mutations: {
    addToCart(state, payload) {
      // Vérifier si le produit existe déjà dans le panier
      const existingItem = state.items.find(item => item.id === payload.id);

      if (existingItem) {
        state.alertMessage = 'Cette formation est déjà dans le panier.';
      } else {
        console.log('eee')
        state.items.push(payload);
        state.formationIds.push(payload.id);
        state.prevCartLength = state.items.length - 1;

        state.showModal = state.items.length > state.prevCartLength;

        // Stocker les identifiants des formations dans le local storage
        localStorage.setItem('formationIds', JSON.stringify(state.formationIds));
      }

      // Stocker le panier complet dans le local storage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart(state, index) {
      // Retirer l'identifiant de la formation du tableau des identifiants
      const removedItemId = state.items[index].id;
      const formationIdsIndex = state.formationIds.indexOf(removedItemId);
      if (formationIdsIndex !== -1) {
        state.formationIds.splice(formationIdsIndex, 1);

        // Mettre à jour le local storage avec le nouveau tableau d'identifiants
        localStorage.setItem('formationIds', JSON.stringify(state.formationIds));
      }

      // Retirer l'élément du panier
      state.items.splice(index, 1);

      // Mettre à jour le local storage avec le nouveau panier
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart(state) {
      // Effacer les données du local storage
      localStorage.removeItem('cart');
      localStorage.removeItem('formationIds');
  
      // Réinitialiser le state
      state.items = [];
      state.formationIds = [];
    },
    hideModal(state) {
      state.showModal = false;
    }
    // Ajouter d'autres mutations comme removeItem, clearCart, etc. si nécessaire
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('addToCart', payload);
    },
    removeFromCart({ commit }, index) {
      commit('removeFromCart', index);
    },
    clearCart({ commit }) {
      // Appeler la mutation pour effacer le panier
      commit('clearCart');
    },
    // Ajouter d'autres actions au besoin
  },
  getters: {
    cartItems(state) {
      return state.items;
    },
    formationIds(state) {
      return state.formationIds;
    },
    showModal(state) {
      return state.showModal;
    },
    // Ajouter d'autres getters au besoin
  },
};


  