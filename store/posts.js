import firestore from '@/services/firestore'
import algolia from '~/services/algolia'


export const state = () => {
  return {
    posts: [],
  }
}

export const getters = {
  posts(state) {
    return state.posts
  },
}

export const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload
  },
  ADD_POST(state, payload) {
    state.posts.push(payload)
  }
}

export const actions = {
  async addPost(_, payload) {
    try {
      const doc = await firestore.addData('posts', payload)
      algolia.getIndex('posts', true).saveObject({
        objectID: doc.id,
        ...payload
      })
      this.app.router.push({ name: 'index' })
    } catch (error) {
      console.log(error.code, error.message)
    }
  },
  async fetchPosts(ctx) {
    try {
      const posts = await firestore.fetchAllData('posts')
      ctx.commit('SET_POSTS',posts)

    } catch (error) {
      console.error(error.message)
    }
  },
}
