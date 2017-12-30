import { auth } from 'firebase'

const types = {
  SIGN_IN: 'SIGN_IN',
  SET_USER: 'SET_USER'
}

const state = {
  user: null
}

const mutations = {
  [types.SET_USER] (state, user) {
    state.user = user
  }
}

const actions = {
  async signIn ({ commit }, params) {
    const { email, password } = params
    console.log('EMAIL, PASSWORD => ', email, password)
    await auth().setPersistence(auth.Auth.Persistence.SESSION)
    return auth().signInWithEmailAndPassword(email, password)
  },
  setUser: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      commit(types.SET_USER, user)
      resolve()
    })
  },
  removeUser: ({ commit }) => {
    commit(types.SET_USER, null)
  }
}

const getters = {
  currentUser: state => state.user
}

export default {
  state,
  mutations,
  actions,
  getters
}
