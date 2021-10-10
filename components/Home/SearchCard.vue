<template>
  <div class="card p-4">
    <h1 class="text-center">আপনি কোন গ্রুপের রক্ত খুঁজছেন?</h1>
    <div class="flex justify-between items-center space-x-1 md:space-x-2">
      <select class="input">
        <option value="A+" selected>A+</option>
        <option value="O+">O+</option>
        <option value="B+">B+</option>
        <option value="AB+">AB+</option>
        <option value="A-">A-</option>
        <option value="B-">B-</option>
      </select>
      <input
        v-model="searchString"
        class="input w-full"
        type="text"
        placeholder="লোকেশন অথবা ডোনারের অবস্থান"
        autofocus
      />
    </div>

    <div v-if="searchResult.length" class="bg-gray-200 p-2">
      <ul class="flex flex-col space-y-2 md:space-y-4">
        <li v-for="result in searchResult" :key="result.objectID">
          {{ result.body }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { watch, ref } from '@nuxtjs/composition-api'
import algolia from '~/services/algolia'
export default {
  setup() {
    const searchString = ref('')
    const searchResult = ref([])

    watch(searchString, (current) => {
      algolia
        .getIndex('posts')
        .search(current)
        .then(({ hits }) => {
          searchResult.value = hits
        })
    })

    return { searchString, searchResult }
  },
}
</script>

<style></style>
