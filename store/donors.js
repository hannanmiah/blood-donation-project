import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
} from '@firebase/firestore'

const firestore = getFirestore()

export const state = () => {
  return {
    donors: [],
    isDonor: false,
  }
}

export const getters = {
  donors(state) {
    return state.donors
  },
  isDonor(state) {
    return state.isDonor
  }
}
export const mutations = {
  ADD_DONOR(state, payload) {
    state.donors.push(payload)
  },
  SET_IS_DONOR(state, payload) {
    state.isDonor = payload
  }
}
export const actions = {
  async fetchDonors(ctx) {
    try {
      const snapshot = await getDocs(collection(firestore, 'donors'))
      snapshot.forEach((doc) => {
        ctx.commit('ADD_DONOR', {
          id: doc.id,
          ...doc.data(),
        })
      })
    } catch (error) {
      console.log(error.code,error.message)
    }
  },
  async fetchIsDonor(ctx) {
    try {
      const docRef = doc(firestore, 'donors', ctx.rootState.user.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        ctx.commit('SET_IS_DONOR',true)
      } else {
        ctx.commit('SET_IS_DONOR',false)
      }
    } catch (error) {
      console.log(error.message,error.code)
    }
  },
  async addDonor({ rootState }, payload) {
    try {
      await setDoc(doc(firestore, 'donors', rootState.user.uid), payload)
    } catch (error) {
      console.log(error.code, error.message)
    }
  },
}
