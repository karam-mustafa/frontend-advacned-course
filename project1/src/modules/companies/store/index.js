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
    ADD_NEW(state, data) {
      state.jobs = data;
    },
    UPDATE(state, data) {
      state.jobs = data;
    },
  },
  actions: {
    new({ commit, state }, toSet) {
      let data = state.jobs;
      data.push(toSet);
      commit("ADD_NEW", data);
      return true;
    },

    update({ commit, state }, toSet) {
      let data = state.jobs;
      const newData = [toSet, ...data.filter((item) => item.id != toSet.id)];
      commit("UPDATE", newData);
      return true;
    },

    delete({ commit, state }, id) {
      let data = state.jobs;
      commit(
        "UPDATE",
        data.filter((item) => item.id != id)
      );
      return true;
    },

    apply({ commit, state, dispatch }, info) {
      let data = state.jobs;
      const job = data.find((item) => item.id == info.jobId);
      if (job.users && job.users.length) {
        job.users.push({
          email: info.userEmail,
          isAccepted: false,
        });
      } else {
        job.users = [
          {
            email: info.userEmail,
            isAccepted: false,
          },
        ];
      }

      dispatch("update", job);

      return true;
    },

    accept({ commit, state, dispatch }, info) {
      let data = state.jobs;
      
      const job = data.find((item) => item.id == info.jobId);

      const userToAccept = job.users.find(user => user.email == info.userEmail);

      userToAccept.isAccepted = true;

      job.users = [userToAccept, ...job.users.filter(user => user.email != info.userEmail)];

      dispatch("update", job);

      return true;
    },
  },
  getters: {},
  modules: {},
};
