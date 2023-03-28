export default {
  namespaced: true,
  state() {
    return {
      jobs: [
        {
          title: "Frozen Yogurt",
          description: "Lorem Lorem Lorem Lorem Lorem Lorem",
          specialization: "design",
          id: 1,
        },
        {
          title: "Frozen Yogurt",
          description: "Lorem Lorem Lorem Lorem Lorem Lorem",
          specialization: "Web",
          id: 2,
        },
        {
          title: "Frozen Yogurt",
          description: "Lorem Lorem Lorem Lorem Lorem Lorem",
          specialization: "Mobile",
          id: 3,
        },
      ],
    };
  },
  mutations: {
    ADD_NEW_OR_EDIT(state, data) {
      state.jobs = data;
    },
  },
  actions: {
    newOrEdit({ commit, state }, toSet) {
      let data = state.jobs;
      if (toSet.isEdit) {
        const item = state.jobs.find((item) => item.id == toSet.id);
        if (item) {
          data = [
            toSet,
            ...state.jobs.filter((el) => el.id != item.id),
          ];
        }
        console.log('====================================');
        console.log(data);
        console.log('====================================');
      } else {
        data.push(toSet);
      }
      commit("ADD_NEW_OR_EDIT", data);
    },
  },
  getters: {},
  modules: {},
};
