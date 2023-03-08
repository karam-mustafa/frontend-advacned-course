import App from "./App.vue";
import { createApp } from "vue";
import { createStore } from "vuex";

const app = createApp(App);

// Create a new store instance.
const store = createStore({
  state() {
    return {
      cards: [],
      filterResults: [],
    };
  },
  mutations: {
    SET_CARDS(state, data) {
      state.cards = data;
    },
    SET_FILTER_CARDS(state, data) {
      state.filterResults = data;
    },
  },
  actions: {
    addCards({ commit }, data) {
      commit("SET_CARDS", data);
      commit("SET_FILTER_CARDS", data);
    },

    applySearch({ commit, state }, searchText) {
      let toSet = state.cards;
      if (!searchText.length) {
        toSet = state.cards;
      } else {
        toSet = toSet.filter((item) => item.title.includes(searchText));
      }
      commit("SET_FILTER_CARDS", toSet);
    },
  },
  getters: {
    getCards(state) {
      return state.cards;
    },
    getCardsFromFilter(state) {
      return state.filterResults;
    },
  },
});
app.use(store);
app.mount("#app");
