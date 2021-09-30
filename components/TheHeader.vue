<template>
  <div class="flex flex-col sticky top-0 z-10">
    <header
      class="
        py-2
        sm:py-3
        md:py-4
        lg:py-5
        px-1
        sm:px-2
        md:px-3
        lg:px-4
        xl:px-5
        shadow-sm
        sm:shadow-md
        md:shadow-lg
        bg-white
        flex
        justify-between
        items-center
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
          @click="toggleModal('request')"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
        <NuxtLink :to="{name: 'index'}"
          ><h1 class="text-xl text-center text-primary">
            জীবন বাঁচান
          </h1></NuxtLink
        >
      </div>
      <div class="relative flex">
        <input
          type="text"
          class="input cursor-pointer w-40 sm:w-60 md:w-80 lg:w-96"
          placeholder="ডোনার খুঁজুন"
          @click="toggleModal('search')"
        />
        <span class="absolute top-3 right-2"
          ><svg
            aria-hidden="true"
            focusable="true"
            data-prefix="fas"
            data-icon="search"
            class="w-4 h-4 text-[#ddd]"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path></svg
        ></span>
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
        <button v-if="!store.getters.isAuthenticated" class="btn btn-primary" @click="login">
          লগিন
        </button>
        <button
          v-if="!store.getters.isAuthenticated"
          class="btn btn-primary"
          @click="register"
        >
          নিবন্ধন
        </button>
        <button v-if="store.getters.isAuthenticated" class="btn btn-primary" @click="toggleModal('post')">
          আবেদন
        </button>
        <button v-if="store.getters.isAuthenticated" class="btn btn-primary" @click="logout">
          লগআউট
        </button>
        <button class="btn md:hidden" @click="toggleModal('notification')">
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
    <transition name="modal">
      <div v-if="activeModal == 'request'" class="modal z-[11] col-span-4 p-10">
        <home-request-card></home-request-card>
        <svg
          aria-hidden="true"
          focusable="true"
          data-prefix="far"
          data-icon="times-circle"
          class="
            w-8
            h-8
            absolute
            top-4
            left-4
            text-primary
            hover:text-secondary
            cursor-pointer
          "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          @click="resetModal"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
          ></path>
        </svg>
      </div>
      <div
        v-else-if="activeModal == 'notification'"
        class="modal z-[12] col-span-4 p-10"
      >
        <home-notification-card></home-notification-card>
        <svg
          aria-hidden="true"
          focusable="true"
          data-prefix="far"
          data-icon="times-circle"
          class="
            w-8
            h-8
            absolute
            top-4
            right-4
            text-primary
            hover:text-secondary
            cursor-pointer
          "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          @click="resetModal"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
          ></path>
        </svg>
      </div>
      <div
        v-else-if="activeModal == 'post'"
        class="
          modal
          z-[12]
          col-span-4
          p-2
          sm:p-4
          md:p-6
          lg:p-8
          xl:p-10
          overflow-y-scroll
        "
      >
        <home-create-post> </home-create-post>
        <svg
          aria-hidden="true"
          focusable="true"
          data-prefix="far"
          data-icon="times-circle"
          class="
            w-8
            h-8
            absolute
            top-4
            right-4
            text-primary
            hover:text-secondary
            cursor-pointer
          "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          @click="resetModal"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
          ></path>
        </svg>
      </div>
      <div
        v-else-if="activeModal == 'search'"
        class="
          modal
          z-[13]
          col-span-4
          p-2
          sm:p-4
          md:p-6
          lg:p-8
          xl:p-10
          overflow-y-scroll
        "
      >
        <home-search-card> </home-search-card>
        <svg
          aria-hidden="true"
          focusable="true"
          data-prefix="far"
          data-icon="times-circle"
          class="
            w-8
            h-8
            absolute
            top-4
            right-[50%]
            left-[50%]
            text-primary
            hover:text-secondary
            cursor-pointer
          "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          @click="resetModal"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
          ></path>
        </svg>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, useRouter, useStore } from '@nuxtjs/composition-api'
export default {
  setup() {
    const store = useStore()
    const activeModal = ref('')
    const router = useRouter()

    function toggleModal(modalName) {
      activeModal.value = modalName
    }

    function resetModal() {
      activeModal.value = ''
    }

    function login() {
      router.push({ name: 'login' })
    }

    function register() {
      router.push({ name: 'register' })
    }

    function logout(){
      store.dispatch('logout')
      router.push('login')
    }

    return {
      store,
      activeModal,
      resetModal,
      toggleModal,
      login,
      register,
      logout
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

.modal-enter,
.modal-leave-to {
  transform: translateY(-100px);
  opacity: 0.5;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease-in;
}
</style>
