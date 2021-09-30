<template>
  <div class="flex flex-col space-y-2 md:space-y-4 items-center">
    <h1 class="text-xl font-bold text-black">ডোনার নিবন্ধন ফর্ম</h1>
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
      @submit.prevent="register"
    >
      <div class="form-group">
        <label for="email">ইমেইল ঠিকানাঃ </label>
        <input id="email" v-model="form.email" type="email" class="input" />
        <span v-if="formError.email" class="text-red-500">{{
          formError.email
        }}</span>
      </div>
      <div class="form-group">
        <label for="password">পাসওয়ার্ডঃ </label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          class="input"
        />
        <span v-if="formError.password" class="text-red-500">{{
          formError.password
        }}</span>
      </div>
      <div class="form-group">
        <label for="password_confirm">পাসওয়ার্ড নিশ্চিত করুনঃ </label>
        <input
          id="password_confirm"
          v-model="form.password_confirm"
          type="password"
          class="input"
        />
        <span v-if="formError.password_confirm" class="text-red-500">{{
          formError.password_confirm
        }}</span>
      </div>
      <button type="submit" class="btn btn-success">নিবন্ধন</button>
    </form>
  </div>
</template>

<script>
import { reactive, useStore } from '@nuxtjs/composition-api'

export default {
  middleware: 'guest',
  setup() {
    const store = useStore()
    const form = reactive({
      email: '',
      password: '',
      password_confirm: '',
    })

    const formError = reactive({
      email: '',
      password: '',
      password_confirm: '',
    })

    const clearForm = function () {
      form.email = null
      form.password = ''
      form.password_confirm = ''
      formError.password = ''
      formError.email = ''
      formError.password_confirm = ''
    }

    const register = function () {
      if (!form.email) {
        formError.phone = 'Phone number is required!'
      }
      if (!form.password) {
        formError.password = 'Password is required!'
      } else if (form.password.length < 6) {
        formError.password = 'Password must be greater than 6 characters!'
      }

      if (!form.password_confirm) {
        formError.password_confirm = 'Password confirmation is required!'
      } else if (form.password !== form.password_confirm) {
        formError.password_confirm =
          'Password should be matched to the previous one!'
      }

      if (formError.password || formError.email || formError.password_confirm) {
        console.log('you must enter valid email and password')
      } else {
        store.dispatch('register', {
          email: form.email,
          password: form.password,
        })
        clearForm()
      }
    }

    return {
      form,
      formError,
      register,
    }
  },
}
</script>

<style></style>
