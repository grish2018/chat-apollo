export default {
  state: {
    currentUser: {},
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
  },
  mutations: {
    editedUser(state, data) {
      state.currentUser = data.data.updateCurrentUser;
    },
  },
};
