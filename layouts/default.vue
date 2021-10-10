<template>
  <div
    class="
      flex flex-col
      space-y-1
      sm:space-y-2
      md:space-y-3
      lg:space-y-4
      xl:space-y-5
    "
  >
    <div class="w-full sticky top-0 left-0 right-0 z-20">
      <the-header @setModal="setModal"></the-header>
    </div>
    <div class="grid grid-cols-8 gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
      <div
        class="col-span-8 hidden sm:block sm:col-span-3 md:col-span-2"
        :class="{ modal: activeModal == 'donor' }"
      >
        <div
          class="flex flex-col items-center space-y-2"
          :class="{
            'enter-animation': activeModal == 'donor',
          }"
        >
          <button
            v-if="activeModal == 'donor'"
            class="rounded-full border-2 p-2 hover:bg-gray-300"
            @click="activeModal = ''"
          >
            <svg
              aria-hidden="true"
              focusable="true"
              data-prefix="far"
              data-icon="times-circle"
              class="w-8 h-8 text-primary"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
              ></path>
            </svg>
          </button>
          <the-donor-side></the-donor-side>
        </div>
      </div>
      <div class="col-span-8 sm:col-span-5 md:col-span-4">
        <Nuxt />
      </div>
      <div
        class="col-span-8 hidden md:block md:col-span-2"
        :class="{ modal: activeModal == 'notification' }"
      >
        <div
          class="flex flex-col items-center space-y-2"
          :class="{ 'enter-animation': activeModal == 'notification' }"
        >
          <button
            v-if="activeModal == 'notification'"
            class="rounded-full border-2 p-2 hover:bg-gray-300"
            @click="activeModal = ''"
          >
            <svg
              aria-hidden="true"
              focusable="true"
              data-prefix="far"
              data-icon="times-circle"
              class="w-8 h-8 text-primary"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
              ></path>
            </svg>
          </button>
          <the-notification-side></the-notification-side>
        </div>
      </div>
    </div>
    <div class="">
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  emits: ['setModal'],
  setup() {
    const activeModal = ref('')
    const setModal = function (modalName) {
      activeModal.value = modalName
    }

    return {
      setModal,
      activeModal,
    }
  },
}
</script>

<style scoped>
.modal {
  display: block;
  width: 100vw;
  height: 100vw;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 21;
}

.enter-animation {
  animation-name: enter;
  animation-duration: 0.3s;
  animation-timing-function: ease-in;
}

.leave-animation {
  animation-name: leave;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
}

@keyframes enter {
  from {
    transform: translateY(400px);
    transform: scale(0.5);
    opacity: 0.5;
  }

  to {
    transform: translateY(0);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes leave {
  from {
    transform: translateY(0);
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: translateY(80px);
    transform: scale(0.5);
    opacity: 0.5;
  }
}
</style>
