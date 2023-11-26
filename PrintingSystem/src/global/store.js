import { createStore } from 'vuex';

export default createStore({
  state: {
    isStudent: localStorage.getItem('isStudent') === 'true',
    isAdmin: localStorage.getItem('isAdmin') === 'true',
    fileUploaded: localStorage.getItem('fileUploaded') === 'true',
    file: null,
  },
  mutations: {
    setIsStudent(state, value) {
      state.isStudent = value;
    },
    setIsAdmin(state, value) {
      state.isAdmin = value;
    },
    setFileUploaded(state, value) {
      state.fileUploaded = value;
    },
    setFile(state, file) {
      state.file = file;
    }
  }
});

