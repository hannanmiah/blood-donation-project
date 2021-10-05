<template>
  <div class="card p-1 sm:p-2 md:p-3 lg:p-4">
    <form class="form-control" @submit.prevent="post">
      <div class="multi-form-group">
        <div class="form-group">
          <label for="group">রোগীর রক্তের গ্রুপ</label>
          <input
            id="group"
            v-model="form.bloodGroup"
            type="text"
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="amount">প্রয়োজনীয় রক্তের পরিমাণ (ব্যাগ)</label>
          <input
            id="amount"
            v-model="form.amount"
            type="number"
            class="input"
          />
        </div>
      </div>
      <div class="multi-form-group">
        <div class="form-group">
          <label for="disease">রোগীর সমস্যা বা রোগের ধরনঃ </label>
          <input
            id="disease"
            v-model="form.disease"
            type="text"
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="hemoglobin">রোগীর রক্তে হিমোগ্লোবিনের পরিমাণ</label>
          <input
            id="hemoglobin"
            v-model="form.hemoglobin"
            type="number"
            class="input"
          />
        </div>
      </div>
      <div class="multi-form-group">
        <div class="form-group">
          <label for="location">রোগীর অবস্থান</label>
          <input
            id="location"
            v-model="form.location"
            type="text"
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="number">যোগাযোগের নাম্বার</label>
          <input id="number" v-model="form.phone" type="number" class="input" />
        </div>
      </div>
      <div class="multi-form-group">
        <div class="form-group">
          <label for="date">রক্ত প্রদানের সাম্ভাব্য তারিখ </label>
          <input id="date" v-model="form.date" type="date" class="input" />
        </div>
        <div class="form-group">
          <label for="time">সাম্ভাব্য সময় </label>
          <input id="time" v-model="form.time" type="time" class="input" />
        </div>
      </div>
      <div class="multi-form-group">
        <div class="form-group">
          <span>এক্সচেঞ্জ</span>
          <div class="flex items-center space-x-1 md:space-x-2">
            <label for="yes">
              <input
                id="yes"
                v-model="form.exchange"
                type="radio"
                name="exchange"
                value="true"
                class="mr-1 text-primary focus:ring-1 focus:ring-primary"
              />
              হ্যাঁ
            </label>
            <label for="no">
              <input
                id="no"
                v-model="form.exchange"
                type="radio"
                name="exchange"
                value="false"
                class="mr-1 text-primary focus:ring-1 focus:ring-primary"
              />
              না
            </label>
          </div>
        </div>
        <div v-if="form.exchange" class="form-group">
          <label for="ex_gropup">গ্রুপ</label>
          <input
            id="ex_group"
            v-model="form.exGroup"
            type="text"
            class="input"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="desc"
          >সংক্ষিপ্ত বর্ণনা (রোগীর রোগ,ইমার্জেন্সী, লোকেশন ইত্যদি)</label
        >
        <textarea id="desc" v-model="form.body" class="input"></textarea>
      </div>
      <div class="form-group">
        <label for="request" class="flex items-center">
          <input
            id="request"
            v-model="form.tag"
            type="checkbox"
            name="request"
            class="mr-2 text-primary rounded-sm focus:ring-1 focus:ring-primary"
          />
          পোস্টের সাথে একটি আবেদন যুক্ত করুন
        </label>
      </div>
      <button type="submit" class="btn btn-success">পোস্ট করুন</button>
    </form>
  </div>
</template>

<script>
import { reactive, ref, useStore } from '@nuxtjs/composition-api'
export default {
  setup() {
    const store = useStore()
    const form = reactive({
      bloodGroup: '',
      amount: 0,
      disease: '',
      hemoglobin: 0,
      location: '',
      phone: '',
      date: '',
      time: '',
      exchange: false,
      exGroup: '',
      body: '',
      tag: true,
    })

    const formError = ref([])
    const validateForm = () => {
      if (!form.bloodGroup) {
        pushError('bloodGroup', 'Must given field!')
      }

      if (!form.amount) {
        pushError('amount', 'Must be given')
      }

      if (!form.disease) pushError('disease', 'must be initialised')

      if (!form.hemoglobin) pushError('hemoglobin', 'must be initialized')

      if (!form.location) pushError('location', 'must be given')

      if (!form.phone) pushError('phone', 'must have to be given')

      if (!form.date) pushError('date', 'must have to be initialised')

      if (!form.time) pushError('time', 'must be given')

      if (!form.exchange) pushError('exchange', 'must be given field!')

      if (!form.body) pushError('body', 'must have some words!')
    }

    const pushError = (field, error) => {
      formError.value.push({
        field,
        error,
      })
    }

    const post = () => {
      validateForm()

      if (formError.value.length === 0) {
        store.dispatch('posts/addPost', {
          uid: store.getters.user.uid,
          ...form,
        })

        clearForm()
      }
    }

    const clearForm = () => {
      formError.value = []
      form.bloodGroup = ''
      form.amount = 0
      form.disease = ''
      form.hemoglobin = 0
      form.location = ''
      form.phone = ''
      form.date = ''
      form.time = ''
      form.exchange = false
      form.exGroup = ''
      form.body = ''
      form.tag = true
    }

    return {
      form,
      formError,
      post,
    }
  },
}
</script>

<style></style>
