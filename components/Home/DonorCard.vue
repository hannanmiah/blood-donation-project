<template>
  <div
    class="
      flex flex-col
      space-y-2
      rounded-md
      bg-white
      shadow-md
      py-2
      md:py-4
      px-1
      md:px-2
    "
  >
    <div
      class="
        flex
        justify-between
        items-center
        space-x-1
        sm:space-x-2
        md:space-x-4
      "
    >
      <div class="border rounded-full p-2 overflow-hidden">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="user-tie"
          class="text-secondary-text w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"
          ></path>
        </svg>
      </div>
      <div class="flex flex-col">
        <h2 class="text-sm md:text-base">{{ donor.fullName }}</h2>
        <h3 class="text-xs md:text-sm text-gray-400">
          {{ donor.presentAddress }}
        </h3>
      </div>
      <div class="relative">
        <svg
          class="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:w-10 lg:h-10"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <path
            style="fill: #ff5e5b"
            d="M256,512c-104.509,0-189.535-85.025-189.535-189.535c0-85.316,122.967-251.917,174.646-315.388
	c7.683-9.435,22.104-9.423,29.778,0c51.679,63.471,174.646,229.92,174.646,315.388C445.535,426.975,360.509,512,256,512z"
          />
          <g>
            <path
              style="fill: #ff423d"
              d="M126.982,322.465c0-6.528,1.773-21.673,13.646-49.772c9.875-23.37,45.257-8.448,35.372,14.947
		c-10.483,24.809-10.618,34.728-10.618,34.825C165.348,348.178,126.982,347.814,126.982,322.465z"
            />
            <path
              style="fill: #ff423d"
              d="M270.889,7.077C267.25,2.609,261.788,0,255.996,0v512c0.001,0,0.003,0,0.004,0
		c104.509,0,189.535-85.025,189.535-189.535C445.535,237.149,322.548,70.515,270.889,7.077z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        <span
          class="absolute top-1 left-1 md:top-2 md:left-2 text-sm text-white"
          >{{ donor.bloodGroup }}</span
        >
      </div>
    </div>
    <section class="flex justify-around">
      <button class="group rounded-full hover:bg-gray-300 text-center p-2">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="phone-alt"
          class="text-secondary-text w-4 h-4 group-hover:text-primary"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
          ></path>
        </svg>
      </button>
      <button class="group rounded-full hover:bg-gray-300 text-center p-2">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="comment"
          class="text-secondary-text w-4 h-4 group-hover:text-primary"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
          ></path>
        </svg>
      </button>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    donor: {
      type: Object,
      required: true,
    },
  },
  setup() {},
}
</script>

<style></style>
