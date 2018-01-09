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
  SET_MEMBERS: 'SET_MEMBERS',
  SET_USER_REMOTE: 'SET_USER_REMOTE',
  SET_USER_DISTURB: 'SET_USER_DISTURB',
  ADD_BADGE_TO_ME: 'ADD_BADGE_TO_ME',
  ADD_BADGE_TO_MEMBER: 'ADD_BADGE_TO_MEMBER',
  ADD_BADGE_TO_TEAM: 'ADD_BADGE_TO_TEAM',
  REMOVE_BADGE_FROM_ME: 'REMOVE_BADGE_FROM_ME',
  REMOVE_BADGE_FROM_MEMBER: 'REMOVE_BADGE_FROM_MEMBER',
  REMOVE_BADGE_FROM_TEAM: 'REMOVE_BADGE_FROM_TEAM',
  UPDATE_NEXTIN: 'UPDATE_NEXTIN',
  UPDATE_NEXTOUT: 'UPDATE_NEXTOUT',
  UPDATE_REMOTE: 'UPDATE_REMOTE',
  UPDATE_DISTURB: 'UPDATE_DISTURB',
  UPDATE_MEMBER_STATUS_ME: 'UPDATE_MEMBER_STATUS_ME',
  UPDATE_MEMBER_STATUS_MEMBER: 'UPDATE_MEMBER_STATUS_MEMBER',
  UPDATE_TEAM: 'UPDATE_TEAM'
}

const getHeader = () => {
  const Cookie = require('js-cookie')
  const token = Cookie.get('token')
  return { authorization: token }
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
    },
    [types.ADD_BADGE_TO_ME] (state, badge) {
      state.user.badges.push(badge)
    },
    [types.ADD_BADGE_TO_MEMBER] (state, badge) {
      const index = state.user.team.members.findIndex(m => m._id === badge.creator)
      state.user.team.members[index].badges.push(badge)
    },
    [types.ADD_BADGE_TO_TEAM] (state, badge) {
      state.user.team.badges.push(badge)
    },
    [types.REMOVE_BADGE_FROM_ME] (state, badge) {
      const index = state.user.badges.findIndex(b => b._id === badge._id)
      state.user.badges.splice(index, 1)
    },
    [types.REMOVE_BADGE_FROM_MEMBER] (state, badge) {
      const memberIndex = state.user.team.members.findIndex(m => m._id === badge.creator)
      const badgeIndex = state.user.team.members[memberIndex].badges.findIndex(b => b._id === badge._id)
      state.user.team.members[memberIndex].badges.splice(badgeIndex, 1)
    },
    [types.REMOVE_BADGE_FROM_TEAM] (state, badge) {
      const index = state.user.team.badges.findIndex(b => b._id === badge._id)
      state.user.team.badges.splice(index, 1)
    },
    [types.UPDATE_MEMBER_STATUS_ME] (state, status) {
      Object.keys(status).forEach(key => {
        if (key !== 'memberId') {
          state.user[key] = status[key]
        }
      })
    },
    [types.UPDATE_MEMBER_STATUS_MEMBER] (state, status) {
      const userIndex = state.user.team.members.findIndex(m => m._id === status.memberId)
      Object.keys(status).forEach(key => {
        if (key !== 'memberId') {
          state.user.team.members[userIndex][key] = status[key]
        }
      })
    },
    [types.UPDATE_TEAM] (state, teamInfo) {
      Object.keys(teamInfo).forEach(key => {
        if (state.user.team[key]) {
          state.user.team[key] = teamInfo[key]
        }
      })
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
      try {
        const { data } = await axios({ method: 'GET', url: '/api/me', headers: getHeader() })
        commit(types.SET_USER, data)
      } catch (error) {
        console.log(error)
      }
    },
    logout ({ commit }) {
      commit(types.SET_USER, null)
    },
    addBadgeToStore ({ commit }, payload) {
      if (payload.owner === 'team') {

      } else {

      }
    },
    async removeBadge ({ commit }, payload) {
      try {
        await axios({
          method: 'DELETE',
          url: `/api/badges/${payload._id}`,
          headers: getHeader()
        })
      } catch (error) {
        console.log(error)
      }
    },
    async updateStatus ({ commit, getters }, payload) {
      try {
        await axios({
          method: 'PUT',
          url: `/api/members/${getters.currentUser._id}/status`,
          headers: getHeader(),
          data: payload
        })
      } catch (error) {
        console.log(error)
      }
    },
    async updateTeamInfomation ({ commit, getters }, payload) {
      console.log('updaetTeamInfomation')
      const teamId = getters.currentUser.team._id
      await axios({
        method: 'PUT',
        url: `/api/teams/${teamId}`,
        headers: getHeader(),
        data: payload
      })

      console.log(teamId)
      console.log(payload)
    },
    addBadgeByPush ({ commit, getters }, payload) {
      if (payload.owner === 'team') {
        console.log('팀 뱃지')
        commit(types.ADD_BADGE_TO_TEAM, payload)
      } else if (payload.owner === 'member') {
        if (payload.creator === getters.currentUser._id) {
          console.log('내가 만든 뱃지')
          commit(types.ADD_BADGE_TO_ME, payload)
        }
        commit(types.ADD_BADGE_TO_MEMBER, payload)
      }
    },
    removeBadgeByPush ({ commit, getters }, payload) {
      if (payload.owner === 'team') {
        console.log('팀 뱃지')
        commit(types.REMOVE_BADGE_FROM_TEAM, payload)
      } else if (payload.owner === 'member') {
        if (payload.creator === getters.currentUser._id) {
          console.log('내가 만든 뱃지')
          commit(types.REMOVE_BADGE_FROM_ME, payload)
        }
        commit(types.REMOVE_BADGE_FROM_MEMBER, payload)
      }
    },
    updateStatusByPush ({ commit, getters }, payload) {
      if (getters.currentUser._id === payload.memberId) {
        commit(types.UPDATE_MEMBER_STATUS_ME, payload)
      }
      commit(types.UPDATE_MEMBER_STATUS_MEMBER, payload)
    },
    updateTeamInfomationByPush ({ commit, getters }, payload) {
      // const teamId = getters.currentUser.team._id
      commit(types.UPDATE_TEAM, payload)
    },
    getInvitations ({ commit, getters }) {
      const teamId = getters.currentUser.team._id
      return axios({
        method: 'GET',
        url: `/api/teams/${teamId}/invitations`,
        headers: getHeader()
      })
    },
    createInvitation ({ commit, getters }, payload) {
      const teamId = getters.currentUser.team._id
      return axios({
        method: 'POST',
        url: `/api/teams/${teamId}/invitations`,
        headers: getHeader(),
        data: payload
      })
    },
    deleteInvitation ({ commit, getters }, targetId) {
      const teamId = getters.currentUser.team._id
      return axios({
        method: 'DELETE',
        url: `/api/teams/${teamId}/invitations/${targetId}`,
        headers: getHeader()
      })
    }
  },
  getters: {
    currentUser: state => state.user,
    loadedTeam: state => state.user.team,
    loading: state => state.loading
  }
})
