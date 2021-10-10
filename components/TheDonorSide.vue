<template>
  <aside class="">
    <div v-if="donors" class="grid grid-cols-3 sm:grid-cols-1 gap-4 sm:gap-2">
      <home-donor-card
        v-for="donor in donors"
        :key="donor.fullName"
        :donor="donor"
      ></home-donor-card>
    </div>
    <div v-else>
      <h2>No donors found!</h2>
    </div>
  </aside>
</template>

<script>
import { computed, useStore } from '@nuxtjs/composition-api'
export default {
  setup() {
    const store = useStore()
    const donors = computed(() => store.state.donors.donors)
    return {
      donors,
    }
  },
}
</script>

<style></style>
