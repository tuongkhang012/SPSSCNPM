import { createStore } from 'vuex';

export default createStore({
  state: {
    isStudent: localStorage.getItem('isStudent') === 'true',
    isAdmin: localStorage.getItem('isAdmin') === 'true',
  },
  mutations: {
    setIsStudent(state, value) {
      state.isStudent = value;
    },
    setIsAdmin(state, value) {
      state.isAdmin = value;
    }
  }
});