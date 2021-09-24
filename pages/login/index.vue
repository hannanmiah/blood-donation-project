<template>
  <div class="flex justify-center">
    <form action="#" method="post" class="form-control max-w-md bg-white p-2 sm:p-4 md:p-6 rounded-md shadow-md">
      <div class="form-group">
        <label for="phone">ফোন নাম্বার</label>
        <input id="phone" type="number" class="input">
      </div>
      <div class="form-group">
        <label for="password">পাসওয়ার্ড</label>
        <input id="password" type="password" class="input">
      </div>
      <div class="flex items-center">
        <label for="auto_login" class="flex items-center">
          <input id="auto_login" type="checkbox" name="auto_login" class="text-primary mr-2 focus:ring-1 focus:ring-primary border-[#ddd] rounded-md"> মনে রাখুন
        </label>
      </div>
      <button type="submit" class="btn btn-success">লগিন</button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
