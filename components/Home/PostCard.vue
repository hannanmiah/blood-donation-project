<template>
  <article class="card p-1 sm:p-2 md:p-3 lg:p-4">
    <div class="flex items-center justify-between mx-1">
      <div class="flex items-center space-x-2">
        <div class="text-center p-2 md:p-4 border md:border-2 rounded-full">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="user-tie"
            class="
              text-secondary-text
              w-4
              h-4
              sm:w-6 sm:h-6
              md:w-8 md:h-8
              lg:w-10 lg:h-10
            "
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
        <div class="flex flex-col justify-center">
          <h3 class="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            হান্নান মিয়া
          </h3>
          <section class="flex items-center space-x-2">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="map-marker-alt"
              class="w-2 h-2 md:w-4 md:h-4 text-secondary-text"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
              ></path>
            </svg>
            <h5 class="text-sm md:text-base text-secondary-text">
              {{ post.location }}
            </h5>
          </section>
          <section class="flex items-center space-x-2">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="eye-dropper"
              class="w-2 h-2 md:w-4 md:h-4 text-secondary-text"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"
              ></path>
            </svg>
            <h5 class="text-sm md:text-base text-primary">
              {{ post.disease }}
            </h5>
          </section>
        </div>
      </div>
      <section class="flex flex-col space-y-1 md:space-y-2 justify-center">
        <div class="relative">
          <svg
            class="h-8 w-8 md:h-12 md:w-12"
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
            class="absolute top-2 left-2 md:top-4 md:left-4 text-sm text-white"
            >{{ post.bloodGroup }}</span
          >
        </div>
        <span class="text-sm md:text-base text-center text-gray-400">{{
          post.amount
        }}</span>
      </section>
    </div>
    <div class="flex justify-center items-center rounded-md bg-secondary p-4">
      <h3 class="text-primary-text">
        {{ post.body }}
      </h3>
    </div>
    <div class="flex justify-between items-center mx-2">
      <div class="flex justify-between space-x-2 items-center">
        <button
          class="
            group
            hover:bg-gray-300
            rounded-full
            p-2
            md:p-4
            text-center text-secondary-text
            hover:text-primary
          "
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="phone-alt"
            class="
              h-4
              md:h-6
              w-4
              md:w-6
              text-secondary-text
              cursor-pointer
              focus:text-secondary
              group-hover:text-primary
            "
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
        <button
          class="
            group
            hover:bg-gray-300
            rounded-full
            p-2
            md:p-4
            text-center text-secondary-text
            hover:text-primary
          "
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="comment"
            class="
              h-4
              md:h-6
              w-4
              md:w-6
              text-secondary-text
              cursor-pointer
              focus:text-secondary
              group-hover:text-primary
            "
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
        <button
          class="
            group
            hover:bg-gray-300
            rounded-full
            p-2
            md:p-4
            text-center text-secondary-text
            hover:text-primary
          "
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="heart"
            class="
              h-4
              md:h-6
              w-4
              md:w-6
              text-secondary-text
              cursor-pointer
              focus:text-secondary
              group-hover:text-primary
            "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex justify-end items-center">
        <h6 class="text-xs sm:text-sm md:text-base text-secondary-text">
          ৫ মিনিট আগে
        </h6>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup() {},
}
</script>

<style></style>
