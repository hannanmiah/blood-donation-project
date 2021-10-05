<template>
  <div class="grid grid-cols-4 gap-1 sm:gap-2 md:gap-3 lg:gap-4">
    <div class="col-span-4 sticky top-0 left-0 right-0 z-20">
      <the-header @setModal="setModal"></the-header>
    </div>
    <div class="col-span-4 hidden sm:block sm:col-span-1" :class="{'modal': activeModal == 'donor'}">
      <donor-side></donor-side>
    </div>
    <div class="col-span-4 sm:col-span-3 md:col-span-2">
      <Nuxt />
    </div>
    <div class="col-span-4 hidden md:block md:col-span-1" :class="{'modal': activeModal == 'notification'}">
      <notification-side></notification-side>
    </div>
    <div class="col-span-4">
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import {ref} from "@nuxtjs/composition-api"
export default {
  emits: ['setModal'],
  setup(){
    const activeModal = ref('')
    const setModal = function (modalName){
      activeModal.value = modalName
    }

    return {
      setModal,
      activeModal
    }
  }
}

</script>

<style scoped>
  .modal {
    display: block;
    width: 100vw;
    height: 100vw;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 21;
  }
</style>
