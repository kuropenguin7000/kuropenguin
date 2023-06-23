<template>
  <div class="home-page">
    <Header></Header>
    <section class="mb-16 md:mb-28">
      <div
        class="mt-16 flex h-64 w-full items-center justify-center bg-home bg-cover bg-no-repeat md:h-128 lg:mt-36 lg:h-42rem xl:h-60rem"
      >
        <div
          class="text-center text-xl tracking-widest text-amber-200 md:text-5xl md:tracking-[0.5em]"
        >
          <div>WE'RE</div>
          <div>GETTING</div>
          <div>MARRIED!</div>
        </div>
      </div>
    </section>
    <section
      class="md:mx-16 md:border-2 md:border-gold-lock-100 md:p-10 md:outline md:outline-2 md:outline-offset-16 md:outline-gold-lock-200 lg:pt-20 xl:mx-36"
    >
      <div
        class="mx-7 flex flex-col items-center justify-center gap-5 border-b-2 pb-16 text-cyan-50 md:mx-0 md:gap-10 lg:flex-row lg:gap-16 lg:pb-28"
      >
        <div class="text-center text-2xl md:text-4xl lg:hidden">
          <div>Karina</div>
          <div>Dwi</div>
          <div>Pujiani</div>
        </div>
        <div
          class="hidden lg:flex lg:flex-col lg:gap-5 lg:text-center lg:text-4xl xl:text-5xl"
        >
          <div>Karina Dwi</div>
          <div>Pujiani</div>
        </div>
        <div class="text-9xl lg:text-[15rem]">&</div>
        <div
          class="text-center text-2xl md:text-4xl lg:flex lg:flex-col lg:gap-5 xl:text-5xl"
        >
          <div>Takwa</div>
          <div>Hardika</div>
        </div>
      </div>
    </section>

    <div class="mt-96">test</div>
    <div class="mt-96">test</div>
  </div>
</template>

<script src="./js/home-page.js"></script>

<style lang="scss" scoped>
.home-page {
  .bg-home {
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 5%,
      rgba(0, 0, 0, 1) 95%,
      rgba(0, 0, 0, 0) 100%
    );
  }
}
</style>
