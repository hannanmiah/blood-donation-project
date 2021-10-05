<template>
  <div class="flex flex-col items-center space-y-2 md:space-y-4">
    <h1 class="text-xl font-bold text-black">ডোনার প্রোফাইল ফর্ম</h1>
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
      @submit.prevent="addDonor"
    >
      <div class="form-group">
        <label for="fullName">সম্পুর্ণ নামঃ </label>
        <input
          id="fullName"
          v-model="form.fullName"
          type="text"
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="phone">যোগাযোগের নাম্বারঃ </label>
        <input
          id="phone"
          v-model="form.phoneNumber"
          type="number"
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="group">রক্তের গ্রুপ</label>
        <select id="group" v-model="form.bloodGroup" class="input">
          <option value="A+" selected>A+</option>
          <option value="O+">O+</option>
          <option value="B+">B+</option>
          <option value="AB+">AB+</option>
          <option value="A-">A-</option>
          <option value="B-">B-</option>
        </select>
      </div>
      <div class="form-group">
        <label for="last_donation_date"
          >সর্বশেষ রক্ত প্রদানের আনুমানিক তারিখঃ
        </label>
        <input
          id="last_donation_date"
          v-model="form.lastDonation"
          type="date"
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="fixed_address">স্থায়ী ঠিকানাঃ </label>
        <input
          id="fixed_address"
          v-model="form.permenentAddress"
          type="text"
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="present_address">বর্তমান ঠিকানাঃ</label>
        <input
          id="present_address"
          v-model="form.presentAddress"
          type="text"
          class="input"
        />
      </div>
      <div class="form-group">
        <span>আপনার প্রোফাইল কি রক্তদানের জন্যে উন্মুক্ত?</span>
        <div class="flex items-center space-x-2 md:space-x-4">
          <label for="yes" class="flex items-center">
            <input
              id="yes"
              v-model="form.isOpen"
              type="radio"
              name="proposal"
              value="true"
              class="text-primary focus:ring-1 focus:ring-primary mr-2"
            />
            হ্যাঁ
          </label>
          <label for="no" class="flex items-center">
            <input
              id="no"
              v-model="form.isOpen"
              type="radio"
              name="proposal"
              value="false"
              class="text-primary foucus:ring-1 focus:ring-primary mr-2"
            />
            না
          </label>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <label for="accept" class="flex">
          <input
            id="accept"
            type="checkbox"
            name="accept"
            class="
              text-primary
              mr-2
              focus:ring-1 focus:ring-primary
              border-[#ddd]
              rounded-md
            "
          />
          আমি যাবতীয় শর্তাবলী ও নিয়ম কানুন মেনে স্বেচ্ছায় রক্তদানে অংশগ্রহণ
          করিলাম
        </label>
      </div>
      <button type="submit" class="btn btn-success">
        ডোনার প্রোফাইল তৈরি করুন
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, useStore } from '@nuxtjs/composition-api'
export default {
  setup() {
    const store = useStore()
    const form = reactive({
      fullName: '',
      phoneNumber: '',
      bloodGroup: '',
      lastDonation: '',
      presentAddress: '',
      permenentAddress: '',
      isOpen: true,
    })

    const formError = reactive({
      fullName: '',
      phoneNumber: '',
      bloodGroup: '',
      lastDonation: '',
      presentAddress: '',
      permenentAddress: '',
      isOpen: '',
    })

    const validateForm = () => {
      if (!form.fullName) formError.fullName = 'Must be given'
      if (!form.phoneNumber) {
        formError.phoneNumber = 'Must be given field!'
      }
      if (!form.bloodGroup) {
        formError.bloodGroup = 'Must be given'
      }
      if (!form.lastDonation) {
        formError.lastDonation = 'Must be given'
      }
      if (!form.presentAddress) {
        formError.presentAddress = 'Must be given'
      }
      if (!form.permenentAddress) {
        formError.permenentAddress = 'Must be given'
      }
    }

    function clearForm() {
      form.fullName = ''
      form.phoneNumber = ''
      form.bloodGroup = ''
      form.presentAddress = ''
      form.permenentAddress = ''
      form.lastDonation = null
      form.isOpen = null

      formError.fullName = ''
      formError.phoneNumber = ''
      formError.bloodGroup = ''
      formError.presentAddress = ''
      formError.permenentAddress = ''
      formError.lastDonation = ''
    }

    const addDonor = function () {
      validateForm()
      if (
        !formError.bloodGroup &&
        !formError.phoneNumber &&
        !formError.presentAddress &&
        !formError.permenentAddress &&
        !formError.lastDonation
      ) {
        store.dispatch('donors/addDonor', form)
        clearForm()
      } else {
        console.log('filed must not be empty!')
      }
    }

    return {
      form,
      addDonor,
    }
  },
}
</script>

<style></style>
