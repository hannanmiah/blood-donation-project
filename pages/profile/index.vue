<template>
<div class="flex flex-col items-center space-y-2 md:space-y-4">
    <h1 class="text-xl font-bold text-black">ডোনার প্রোফাইল ফর্ম</h1>
    <form action="#" method="post" class="form-control max-w-md bg-white p-2 sm:p-4 md:p-6 rounded-md shadow-md">
      <div class="form-group">
        <label for="phone">ফোন নাম্বারঃ </label>
        <input id="phone" type="number" class="input">
      </div>
      <div class="form-group">
        <label for="password">পাসওয়ার্ডঃ </label>
        <input id="password" type="password" class="input">
      </div>
      <div class="form-group">
        <label for="password_confirm">পাসওয়ার্ড নিশ্চিত করুনঃ </label>
        <input id="password_confirm" type="password" class="input">
      </div>
      <div class="flex justify-center items-center">
        <label for="accept" class="flex">
          <input id="accept" type="checkbox" name="accept" class="text-primary mr-2 focus:ring-1 focus:ring-primary border-[#ddd] rounded-md"> আমি যাবতীয় শর্তাবলী ও নিয়ম কানুন মেনে স্বেচ্ছায় রক্তদানে অংশগ্রহণ করিলাম
        </label>
      </div>
      <button type="submit" class="btn btn-success">ডোনার প্রোফাইল তৈরি করুন</button>
    </form>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style>

</style>