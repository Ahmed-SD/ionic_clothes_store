const state = {
  cart: [],
};

const getters = {
    cart: (state) => {
        return state.cart;
      },
};

const actions = {
    addToCart(context, item){
        context.commit("addItem", item)
    }
};

const mutations = {
    addItem(state, item){
        state.cart.push(item)
    }
};
export default {
  state,
  getters,
  actions,
  mutations,
};
