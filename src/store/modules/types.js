import axios from "axios";

const state = {
  types: [],
};

const getters = {
  allTypes: (state) => {
    return state.types;
  },
};

const actions = {
  async fetchTypes({ commit }) {
    const response = await axios.get("https://serene-beach-63236.herokuapp.com/api/types");
    console.log(response.data);
    commit("setTypes", response.data);
  },
};

const mutations = {
  setTypes: (state, types) => {
    state.types = types;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
