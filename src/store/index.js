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
      localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag)); 
    },
    removeFromBag(state, productId){
      const updatedBag = state.productsInBag.filter(item => item.id != productId);
      state.productsInBag = updatedBag;
      localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag));
    },
    loadBag (state, products) {
      state.productsInBag = products;
    },
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
    },

    loadBag({commit}){

      // To prevent that the bag is empty if the user use two or more windows
      if(localStorage.getItem('productsInBag')){
        commit('loadBag', JSON.parse(localStorage.getItem('productsInBag')));
      }
    },


  },
  modules: {
  }
})
