<template>
  <div class="flex flex-col items-center space-y-2 md:space-y-4">
    <h1 class="text-xl font-bold text-black">ডোনার লগিন ফর্ম</h1>
    <form
      class="
        form-control
        max-w-md
        bg-white
        p-2
        sm:p-4
        md:p-6
        rounded-md
        shadow-md
      "
      @submit.prevent="login"
    >
      <div class="form-group">
        <label for="email">ইমেইল ঠিকানাঃ</label>
        <input id="email" v-model="form.email" type="email" class="input" />
      </div>
      <div class="form-group">
        <label for="password">পাসওয়ার্ডঃ</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          class="input"
        />
      </div>
      <div class="flex items-center">
        <label for="auto_login" class="flex items-center">
          <input
            id="auto_login"
            type="checkbox"
            name="auto_login"
            class="
              text-primary
              mr-2
              focus:ring-1 focus:ring-primary
              border-[#ddd]
              rounded-md
            "
          />
          মনে রাখুন
        </label>
      </div>
      <button type="submit" class="btn btn-success">লগিন</button>
    </form>
  </div>
</template>

<script>
import { reactive, useStore } from '@nuxtjs/composition-api'
import firebase from '@/services/firebase'

export default {
  middleware: 'guest',
  setup() {
    const store = useStore()
    console.log(firebase.auth.currentUser)
    const form = reactive({
      email: '',
      password: '',
    })

    const formError = reactive({
      email: '',
      password: '',
    })

    function login() {
      if (form.email && form.password) {
        store.dispatch('login', { email: form.email, password: form.password })
      } else {
        console.log('filed must not be empty!')
      }

      clearForm()
      clearError()
    }

    function clearForm() {
      form.email = ''
      form.password = ''
    }

    function clearError() {
      formError.email = ''
      formError.password = ''
    }

    return {
      form,
      formError,
      login,
      clearForm,
      clearError,
    }
  },
}
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
