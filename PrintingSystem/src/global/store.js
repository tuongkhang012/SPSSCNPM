import { createStore } from 'vuex';

export default createStore({
  state: {
    isStudent: localStorage.getItem('isStudent') === 'true',
    isAdmin: localStorage.getItem('isAdmin') === 'true',
    isHome: localStorage.getItem('isHome') === 'true',
    fileUploaded: localStorage.getItem('fileUploaded') === 'true',
    file: null,
    fileSettings: null,
    cancel: localStorage.getItem('cancel') === 'true',

    printer: localStorage.getItem('printer'),
    fileName: localStorage.getItem('fileName'),
  },
  mutations: {
    setIsStudent(state, value) {
      state.isStudent = value;
    },
    setIsAdmin(state, value) {
      state.isAdmin = value;
    },
    setIsHome(state, value) {
      state.isHome = value;
    },
    setFileUploaded(state, value) {
      state.fileUploaded = value;
    },
    setFile(state, file) {
      state.file = file;
      state.fileName = file.name;
    },
    setFileSettings(state, fileSettings) {
      state.fileSettings = JSON.parse(JSON.stringify(fileSettings));
    },
    setCancel(state, value) {
      state.cancel = value;
    }
  },
  getters: {
    getFileName: state => state.fileName
  }
});

