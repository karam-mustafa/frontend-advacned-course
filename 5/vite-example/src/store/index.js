import { createStore } from "vuex";

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
    createCard({ dispatch, state }, data) {
      const toSet = [data, ...state.cards];
      dispatch("addCards", toSet);
    },
    editCard({ dispatch, state }, data) {
      const card = state.cards.find((item) => item.id == data.id);

      const cardToSet = {
        ...card,
        ...data,
      };
      const toSet = [cardToSet, ...state.cards.filter((item) => item.id != data.id)];

      dispatch("addCards", toSet);
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

export default store;
