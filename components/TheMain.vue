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
      <home-request-card></home-request-card>
    </div>
    <div
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
      <home-post-card></home-post-card>
      <home-post-card></home-post-card>
      <home-post-card></home-post-card>
    </div>
    <div class="md:col-span-1 col-span-4 hidden md:block">
      <home-notification-card></home-notification-card>
    </div>
  </main>
</template>

<script>

export default {
  setup() {
    
  },
}
</script>

<style scoped>

</style>
