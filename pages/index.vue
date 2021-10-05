<template>
  <main class="">
    <div class="">
      <div
        v-if="posts"
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
          v-for="post in posts"
          :key="post.uid"
          :post="post"
        ></home-post-card>
        <home-post-card
          v-for="post in posts"
          :key="post.uid"
          :post="post"
        ></home-post-card>
        <home-post-card
          v-for="post in posts"
          :key="post.uid"
          :post="post"
        ></home-post-card>
        <home-post-card
          v-for="post in posts"
          :key="post.uid"
          :post="post"
        ></home-post-card>
      </div>
      <div v-else>
        <p>No posts available!</p>
      </div>
    </div>
  </main>
</template>

<script>
import { useStore, computed } from '@nuxtjs/composition-api'
export default {
  middleware: 'auth',
  setup() {
    const store = useStore()
    const posts = computed(() => store.state.posts.posts)

    return {
      posts,
    }
  },
}
</script>

<style scoped></style>
