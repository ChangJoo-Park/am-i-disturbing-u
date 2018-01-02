import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const types = {
  LOAD_TEAM: 'LOAD_TEAM',
  CREATE_TEAM: 'CREATE_TEAM',
  JOIN_TEAM: 'JOIN_TEAM',
  SET_USER: 'SET_USER',
  SET_LOADING: 'SET_LOADING',
  SET_MEMBERS: 'SET_MEMBERS'
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    loadedTeam: {},
    user: {},
    members: [],
    loading: false
  },
  mutations: {
    [types.SET_LOADING] (state, isLoading) {
      state.loading = isLoading
    },
    [types.SET_USER] (state, user) {
      state.user = user
    }
  },
  actions: {
    async loadMembers ({ commit }, payload) {
      const members = []
      commit(types.SET_MEMBERS, members)
    },
    async loadTeam ({ commit }, payload) {
      commit(types.SET_LOADING, true)
      try {
        commit(types.LOAD_TEAM, {})
      } catch (error) {
        console.log(error)
      } finally {
        commit(types.SET_LOADING, false)
      }
    },
    async createTeam ({ commit, getters }, payload) {
      // creatorId: getters.currentUser.id
      try {
        // const team = {}
        // commit(types.CREATE_TEAM, {})
      } catch (error) {
        console.log(error)
      }
    },
    async joinTeam ({ commit, getters }, payload) {
      commit(types.JOIN_TEAM, {})
    },
    async leaveTeam ({ commit }, payload) {
    },
    async signUserUp ({ commit }, payload) {
      try {
        // const { email, password } = payload
        // const newUser = {}
        // commit(types.SET_USER, newUser)
      } catch (error) {
      }
    },
    async signUserIn ({ commit }, payload) {
      try {
        // const { email, password } = payload
        // const newUser = {}
        // commit(types.SET_USER, newUser)
      } catch (error) {
        console.error(error)
      }
    },
    async autoSignIn ({ commit }) {
      const Cookie = require('js-cookie')
      const token = Cookie.get('token')
      try {
        const { data } = await axios({ method: 'GET', url: '/api/me', headers: { authorization: token } })
        commit(types.SET_USER, data)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchUserData ({ commit, getters }) {
    },
    logout ({ commit }) {
      commit(types.SET_USER, null)
    },
    addBadgeToTeam ({ commit }, payload) {
    },
    addBadgeToUser ({ commit }, payload) {
    }
  },
  getters: {
    loadedTeam: state => state.user.team,
    currentUser: state => state.user,
    teamMembers: state => state.user.team.members,
    loading: state => state.loading
  }
})
