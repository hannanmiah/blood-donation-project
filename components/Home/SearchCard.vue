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
        class="input w-full"
        type="text"
        placeholder="লোকেশন অথবা ডোনারের অবস্থান"
        autofocus
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
