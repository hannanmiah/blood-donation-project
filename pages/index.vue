<template>
  <div
    class="
      flex flex-col
      space-y-2
      sm:space-y-4
      md:space-y-6
      lg:space-y-8
      relative
    "
  >
    <the-header
      @toggleRequestModal="toggleRequest"
      @toggleNotificationModal="toggleNotification"
    ></the-header>
    <the-main></the-main>
    <the-footer></the-footer>
    <div v-if="requestModalIsVisible" class="modal z-[11] col-span-4 p-10">
      <home-request-card></home-request-card>
      <svg
        aria-hidden="true"
        focusable="true"
        data-prefix="far"
        data-icon="times-circle"
        class="w-8 h-8 absolute top-4 left-4 text-primary hover:text-secondary cursor-pointer"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        @click="requestModalIsVisible = false"
      >
        <path
          fill="currentColor"
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
        ></path>
      </svg>
    </div>
    <div v-if="notificationModalIsVisible" class="modal z-[12] col-span-4 p-10">
      <home-notification-card></home-notification-card>
      <svg
        aria-hidden="true"
        focusable="true"
        data-prefix="far"
        data-icon="times-circle"
        class="w-8 h-8 absolute top-4 right-4 text-primary hover:text-secondary cursor-pointer"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        @click="notificationModalIsVisible = false"
      >
        <path
          fill="currentColor"
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  setup() {
    const notificationModalIsVisible = ref(false)
    const requestModalIsVisible = ref(false)
    const toggleNotification = function () {
      notificationModalIsVisible.value = !notificationModalIsVisible.value
    }
    const toggleRequest = function () {
      requestModalIsVisible.value = !requestModalIsVisible.value
    }

    return {
      notificationModalIsVisible,
      requestModalIsVisible,
      toggleNotification,
      toggleRequest,
    }
  },
}
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
