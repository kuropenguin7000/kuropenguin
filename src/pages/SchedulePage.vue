<template>
  <div class="bg-gradient-to-r from-cyan-500 to-blue-500">
    <div class="invisible mb-16">invisible</div>
    <Header></Header>
    <div
      class="mx-5 text-cyan-50 md:mx-12 md:mb-16 md:mt-28 md:border-2 md:border-gold-lock-100 md:px-20 md:pt-16 md:outline md:outline-2 md:outline-offset-16 md:outline-gold-lock-200 lg:mt-56"
    >
      <div class="mb-40">
        <div class="mb-10 text-center text-4xl md:tracking-widest lg:text-5xl">
          Schedule
        </div>
        <div
          class="mb-10 h-64 w-full bg-schedule bg-cover bg-no-repeat md:h-128 lg:mb-20 lg:h-42rem xl:h-60rem"
        ></div>
        <vue3-flip-countdown
          deadline="2023-07-01 08:00:00"
          mainColor="#06b6d4"
          secondFlipColor="#3b82f6"
          mainFlipBackgroundColor="black"
          secondFlipBackgroundColor="black"
          labelColor="rgb(236 254 255 / var(--tw-text-opacity))"
        />
      </div>
      <div class="block lg:mb-20 lg:flex lg:items-center lg:gap-10">
        <div class="block lg:w-1/2 lg:flex-1">
          <div class="mb-10 text-center text-2xl xl:text-4xl">Wedding</div>
          <div class="text-center xl:text-xl">
            Sat, July 1, 2023, 8:00 am - 2:00 pm
          </div>
        </div>
        <div class="hidden lg:block lg:h-128 lg:w-0.5 lg:bg-cyan-50"></div>
        <div class="block lg:w-1/2 lg:flex-1">
          <div
            class="h-32 w-full bg-double-heart bg-contain bg-center bg-no-repeat"
          ></div>
          <div class="mb-16 px-10 text-center xl:px-32 xl:text-xl">
            Jl. Tentara Pelajar No.16, Mekarsari, Kec. Banjar, Kota Banjar, Jawa
            Barat 46321
          </div>
          <div class="mb-20 flex justify-center">
            <div
              class="w-60 cursor-pointer rounded-lg border-2 border-cyan-50 bg-gradient-to-l from-cyan-500 via-emerald-500 to-blue-500 p-5 text-center tracking-[0.5rem] hover:bg-gradient-to-r xl:w-80"
              @click="openGoogleMaps"
            >
              MAP
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script src="./js/schedule-page.js"></script>
<style scoped lang="scss"></style>
