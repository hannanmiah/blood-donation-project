<template>
  <main class="">
    <div class="">
      <div
        v-if="posts.length"
        class="
          flex flex-col
          justify-center
          space-y-2
          sm:space-y-4
          md:space-y-6
          lg:space-y-8
        "
      >
        <home-post-card
          v-for="(post, index) in posts"
          :key="post.uid + index"
          :post="post"
        ></home-post-card>
      </div>
      <div v-else>
        <p class="bg-white text-center rounded-md shadow-md">No posts available!</p>
      </div>
    </div>
  </main>
</template>

<script>
import { useStore, computed } from '@nuxtjs/composition-api'
import firestore from '~/services/firestore'

export default {
  middleware: 'auth',
  setup() {
    const store = useStore()
    const posts = computed(() => store.state.posts.posts)

    firestore.onCreated('posts', (data) => {
      store.dispatch('posts/fetchPosts')
      console.log('fetched: ', data)
    })

    return {
      posts,
    }
  },
}
</script>

<style scoped></style>
