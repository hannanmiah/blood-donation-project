<template>
  <button type="button" class="p-2 bg-green-500 rounded-md text-white" @click="clickHandler">
      <slot>BaseButton</slot>
  </button>
</template>

<script>
    
export default {
    name: 'BaseButton',
    emits: ['clicked'],
    setup(_,ctx){
      const clickHandler = function(){
        ctx.emit('clicked','success')
      }

      return {
        clickHandler
      }
    },
}
</script>

<style>

</style>