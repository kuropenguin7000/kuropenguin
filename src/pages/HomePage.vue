<template>
  <div class="home-page bg-gradient-to-r from-cyan-500 to-blue-500">
    <div class="mb-16 invisible">invisible</div>
    <Header></Header>
    <section class="mb-16 md:mb-28">
      <div
        class="flex h-64 w-full items-center justify-center bg-home bg-cover bg-no-repeat md:h-128 lg:mt-36 lg:h-42rem xl:h-60rem"
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
        class="mx-7 mb-16 border-b-2 pb-16 text-cyan-50 md:mx-0 md:gap-10 lg:flex-row lg:gap-16 lg:pb-28"
      >
        <div
          class="flex flex-col items-center gap-5 rounded-lg p-5 lg:flex-row lg:justify-center"
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
          <div class="text-9xl text-cyan-950 lg:text-[15rem]">&</div>
          <div
            class="text-center text-2xl md:text-4xl lg:flex lg:flex-col lg:gap-5 xl:text-5xl"
          >
            <div>Takwa</div>
            <div>Hardika</div>
          </div>
        </div>
      </div>

      <div class="mx-7 mb-16 border-b-2 pb-16 text-cyan-50 md:mx-0">
        <div
          class="flex flex-col items-center gap-8 rounded-lg p-5"
        >
          <div class="xl:text-xl">#karintakwawedding</div>
          <div class="text-3xl xl:text-5xl">July 1, 2023</div>
          <div class="xl:text-xl">Kota Banjar, GBI</div>
        </div>
      </div>
      <div class="mx-7 pb-16 text-cyan-50 md:mx-0">
        <div
          class="flex flex-col items-center gap-5 rounded-lg p-5 lg:px-44 xl:px-64"
        >
          <div class="text-center text-2xl lg:text-3xl xl:text-4xl">How We Met</div>
          <div class="text-center xl:text-xl">
            <p>
              Us meeting was going to happen one way or another. We both started
              working at the same place in the beginning of 2019, and once done
              with our separate trainings, our desks ended up being side by
              side. We did not hit it off right away, but after about a month of
              just being around each other 8 hours a day, 5 days a week… we
              became best friends. We did everything together, but it was just a
              beautiful friendship. Then eventually our feelings grew and once
              we both expressed our love for each other, we officially began
              dating in August of 2019.
              <br />
              <br />
              <br />
              Fun fact: We actually both worked at the same store, at the same
              time prior to our current job where we met. We just never crossed
              paths because he worked in the back of the store and I worked up
              front!
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="md:mt-12 flex h-64 w-full items-center justify-center bg-home-bottom bg-cover bg-no-repeat md:h-128 lg:mt-36 lg:h-42rem xl:h-60rem"
      ></div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script src="./js/home-page.js"></script>

<style lang="scss" scoped>
.home-page {
  .bg-home, .bg-home-bottom {
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
