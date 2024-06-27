import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  mutations: {
    loadProducts(state, products){
      state.products =  products;
    },
    addToBag(state, product){
      console.log('Mutation addToBag', product);
      state.productsInBag.push(product);      
    },
    removeFromBag(state, productId){
      const updatedBag = state.productsInBag.filter(item => item.id != productId);
      state.productsInBag = updatedBag;
    }
  },
  actions: {

    loadProducts({commit}) {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          commit('loadProducts', response.data);
        });
    },

    addToBag({commit}, product) {
      console.log('Action addToBag', product);
      commit('addToBag', product);
    },

    removeFromBag({commit}, productId){
      if(confirm('Are you sure you want to remove this item ?')){
        commit('removeFromBag', productId);
      }
    }


  },
  modules: {
  }
})
