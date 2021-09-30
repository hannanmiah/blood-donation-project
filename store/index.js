import useCookie from '@/composables/useCookie'
import Firebase from '@/services/firebase'

const { setCookie, getCookieFromServer, removeCookie,decodeString } = useCookie()

export const state = () => {
  return {
    isAuthenticated: !!Firebase.auth.currentUser,
    user: Firebase.auth.currentUser ?? null,
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
  nuxtServerInit({ commit }, { req }) {
    const userString = getCookieFromServer(req, 'user')
    if (userString) {
      commit('setAuthenticated', true)
      commit('setUser', JSON.parse(decodeString(userString)))
    }
  },
  async login(context, payload) {
    try {
      const res = await Firebase.signIn(payload)
      const user = {
        uid: res.user.uid,
        email: res.user.email,
        emailVerified: res.user.emailVerified,
        displayName: res.user.displayName,
        phoneNumber: res.user.phoneNumber,
        photoURL: res.user.photoURL,
      }
      setCookie('user', JSON.stringify(user))
      context.commit('setUser', res.user.toJSON())
      context.commit('setAuthenticated', true)
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
      this.app.router.push({ name: 'login' })
    } catch (error) {
      console.log(error.code, error.message)
    }
  },
}
