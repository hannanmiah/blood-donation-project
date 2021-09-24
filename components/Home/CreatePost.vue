<template>
  <div class="card p-1 sm:p-2 md:p-3 lg:p-4">
    <form action="#" method="post" class="form-control">
      <div class="form-group">
        <label for="group">রোগীর রক্তের গ্রুপ</label>
        <input id="group" type="text" class="input" />
      </div>
      <div class="form-group">
        <label for="amount">রোগীর রক্তের পরিমাণ (ব্যাগ)</label>
        <input id="amount" type="number" class="input" />
      </div>
      <div class="form-group">
        <label for="disease">রোগীর সমস্যা বা রোগের ধরনঃ </label>
        <input id="disease" type="text" class="input" />
      </div>
      <div class="form-group">
        <label for="hemoglobin">রোগীর রক্তে হিমোগ্লোবিনের পরিমাণ</label>
        <input id="hemoglobin" type="number" class="input" />
      </div>
      <div class="form-group">
        <label for="location">রোগীর অবস্থান</label>
        <input id="location" type="text" class="input" />
      </div>
      <div class="form-group">
        <label for="number">যোগাযোগের নাম্বার</label>
        <input id="number" type="number" class="input" />
      </div>
      <div class="multi-form-group">
        <div class="form-group">
          <label for="date">রক্ত প্রদানের সাম্ভাব্য তারিখ </label>
          <input id="date" type="date" class="input" />
        </div>
        <div class="form-group">
          <label for="time">সাম্ভাব্য সময় </label>
          <input id="time" type="time" class="input" />
        </div>
      </div>
      <div class="multi-form-group">
        <div class="form-group">
          <span>এক্সচেঞ্জ</span>
          <div class="flex items-center space-x-1 md:space-x-2">
            <label for="yes">
              <input id="yes" type="radio" name="exchange" value="1" class="mr-1 text-primary focus:ring-1 focus:ring-primary" /> Yes
            </label>
            <label for="no">
              <input id="no" type="radio" name="exchange" class="mr-1 text-primary focus:ring-1 focus:ring-primary" /> No
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="ex_gropup">গ্রুপ</label>
          <input id="ex_group" type="text" class="input" />
        </div>
      </div>
      <div class="form-group">
        <label for="desc"
          >সংক্ষিপ্ত বর্ণনা (রোগীর রোগ,ইমার্জেন্সী, লোকেশন ইত্যদি)</label
        >
        <textarea id="desc" class="input"></textarea>
      </div>
      <div class="form-group">
        <label for="request" class="flex items-center">
          <input id="request" type="checkbox" name="request" class="mr-2 text-primary rounded-sm focus:ring-1 focus:ring-primary"/> পোস্টের সাথে
          একটি আবেদন যুক্ত করুন
        </label>
      </div>
      <button type="submit" class="btn btn-success">পোস্ট করুন</button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
