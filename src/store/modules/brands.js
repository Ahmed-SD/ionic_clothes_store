import axios from "axios";

const state = {
  brands: [],
};

const getters = {
  allBrands: (state) => {
    return state.brands;
  },
};

const actions = {
  async fetchBrands({ commit }) {
    const response = await axios.get("https://polar-journey-85906.herokuapp.com/api/brands");
    console.log(response.data);
    commit("setBrands", response.data);
  },
};

const mutations = {
  setBrands: (state, brands) => {
    state.brands = brands;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
