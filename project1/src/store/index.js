import { createStore } from "vuex";
import main from "./../modules/main/store/index.js";
import companies from "./../modules/companies/store/index.js";
// Create a new store instance.
const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    main,
    companies,
  },
});

export default store;
