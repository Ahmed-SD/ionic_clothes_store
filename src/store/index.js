import { createStore } from 'vuex'
import products from './modules/products'
import brands from './modules/brands'
import types from './modules/types'
import cart from './modules/cart'

export default createStore({
  state: {
    selectedType: '',
    selectedCat: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    brands,
    types,
    cart
  }
})
