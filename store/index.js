import useCookie from '@/composables/useCookie'
import Firebase from '@/services/firebase'

const { setCookie, getCookieFromServer, removeCookie, decodeString } =
  useCookie()

export const state = () => {
  return {
    isAuthenticated: false,
    user: null,
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated
  },
  user(state) {
    return state.user
  },
}

export const mutations = {
  setAuthenticated(state, payload) {
    state.isAuthenticated = payload
  },
  setUser(state, payload) {
    state.user = payload
  },
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req }) {
    const userString = getCookieFromServer(req, 'user')
    if (userString) {
      commit('setAuthenticated', true)
      commit('setUser', JSON.parse(decodeString(userString)))
    }
    await dispatch('donors/fetchDonors')
    await dispatch('donors/fetchIsDonor')
    await dispatch('posts/fetchPosts')
  },
  async login(context, payload) {
    try {
      const res = await Firebase.signIn(payload)
      setCookie('user', JSON.stringify(res.user.toJSON()))
      context.commit('setUser', res.user.toJSON())
      context.commit('setAuthenticated', true)
      await context.dispatch('donors/fetchIsDonor')
      console.log('Login success!')
      this.app.router.push({ name: 'index' })
    } catch (e) {
      console.log(e.code, e.message)
    }
  },
  async register(context, payload) {
    try {
      const res = await Firebase.signUp(payload)
      setCookie('user', JSON.stringify(res.user.toJSON()))
      context.commit('setUser', res.user.toJSON())
      context.commit('setAuthenticated', true)
      context.dispatch('donors/fetchIsDonor')
      console.log('User successfully registered!')
      this.app.router.push({ name: 'index' })
    } catch (error) {
      console.log(error.code, error.message)
    }
  },
  logout(context) {
    try {
      Firebase.signOut()
      removeCookie('user')
      context.commit('setUser', null)
      context.commit('setAuthenticated', false)
      context.commit('donors/SET_IS_DONOR', false)
      this.app.router.push({ name: 'login' })
    } catch (error) {
      console.log(error.code, error.message)
    }
  },
}
