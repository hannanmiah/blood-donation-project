import firestore from '@/services/firestore'

export const state = () => {
    return {
        posts: []
    }
}

export const getters = {
    posts(state) {
        return state.posts
    }
}

export const mutations = {
    SET_POSTS(state, payload) {
        state.posts = payload
    }
}

export const actions = {
    async addPost(ctx,payload) {
        try {
            await firestore.addData('posts', payload)
            ctx.dispatch('fetchPosts')
        } catch (error) {
            console.log(error.code,error.message)
        }
    },
    async fetchPosts(ctx) {
        try {
            const data = await firestore.fetchAllData('posts')
            ctx.commit('SET_POSTS',data)
        } catch (error) {
            console.error(error.message)
        }
    }
}