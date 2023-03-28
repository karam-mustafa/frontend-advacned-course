export default {
  namespaced: true,
  state() {
    return {
      loginInfo:
        localStorage.getItem("loginInfo") != null
          ? JSON.parse(localStorage.getItem("loginInfo"))
          : null,
    };
  },
  mutations: {
    CHANGE_LOGIN_INFO(state, data) {
      state.loginInfo = data;
    },
  },
  actions: {
    login({ commit }, data) {
      const users = JSON.parse(localStorage.getItem("users"));
      const user = users.find(
        (item) => item.email == data.email && item.password == data.password
      );
      if (user) {
        localStorage.setItem("loginInfo", JSON.stringify(user));
        commit("CHANGE_LOGIN_INFO", user);
        return {
          message: "logged in successfully",
        };
      } else {
        return {
          message: "user not valid",
        };
      }
    },
    register({ commit, state }, data) {
      let users = localStorage.getItem("users");
      if (!users) {
        users = [];
      } else {
        users = JSON.parse(users);
      }
      users.push(data)
      localStorage.setItem("users", JSON.stringify(users));
    },
    logout({ commit }, data) {
      localStorage.removeItem("loginInfo");
      commit("CHANGE_LOGIN_INFO", null);
      window.location.replace("/#/");
    },
  },
  
  getters: {
    loginInfo(state) {
      return localStorage.getItem("loginInfo");
    },
  },
  modules: {},
};
