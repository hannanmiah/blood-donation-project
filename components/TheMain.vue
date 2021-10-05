<template>
  <main
    class="
      px-1
      sm:px-2
      md:px-3
      lg:px-4
      xl:px-5
      relative
      z-0
      grid grid-cols-4
      gap-1
      sm:gap-2
      md:gap-3
      lg:gap-4
    "
  >
    <div class="sm:col-span-1 col-span-4 hidden sm:block">
      <donor-side></donor-side>
    </div>
    <div class="">
      <div
        v-if="posts"
        class="
          col-span-4
          sm:col-span-3
          md:col-span-2
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
      </div>
      <div v-else>
        <p>No posts available!</p>
      </div>
    </div>
    <div class="md:col-span-1 col-span-4 hidden md:block">
      <notification-side></notification-side>
    </div>
  </main>
</template>

<script>
import { useStore, computed } from '@nuxtjs/composition-api'
export default {
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
