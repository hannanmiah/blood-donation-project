<template>
  <header
    class="
      py-4
      px-2
      sm:px-4
      md:px-6
      lg:px-8
      shadow-sm
      sm:shadow-md
      md:shadow-lg
      bg-white
      flex
      justify-between
      items-center
      sticky
      top-0
      z-10
    "
  >
    <div class="flex justify-center space-x-1 sm:space-x-0 items-center">
      <svg
        aria-hidden="true"
        focusable="true"
        data-prefix="fas"
        data-icon="bars"
        class="h-8 w-8 text-primary sm:hidden cursor-pointer"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        @click="toggleRequest"
      >
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        ></path>
      </svg>
      <h1 class="text-xl text-center text-primary">জীবন বাঁচান</h1>
    </div>
    <nav
      class="
        inline-flex
        items-center
        space-x-1
        sm:space-x-2
        md:space-x-3
        lg:space-x-4
      "
    >
      <button class="btn btn-primary hidden md:inline-block">লগিন</button>
      <button class="btn btn-primary hidden md:inline-block">নিবন্ধন</button>
      <button class="btn btn-primary">রক্তের আবেদন</button>
      <button class="btn md:hidden" @click="toggleNotification">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="bell"
          class="h-8 w-8 text-primary"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"
          ></path>
        </svg>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  emits: ['toggleNotificationModal', 'toggleRequestModal'],
  setup(_, ctx) {
    function toggleNotification() {
      ctx.emit('toggleNotificationModal')
    }

    function toggleRequest() {
      ctx.emit('toggleRequestModal')
    }
    return {
      toggleNotification,
      toggleRequest,
    }
  },
}
</script>

<style></style>
