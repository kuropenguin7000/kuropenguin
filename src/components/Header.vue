<template>
  <header
    class="absolute left-0 top-0 z-10 flex w-full items-center bg-transparent px-5 py-5"
  >
    <div class="w-full">
      <div
        class="relative flex items-center justify-between lg:flex-col lg:justify-center lg:gap-5"
      >
        <div
          id="header-name"
          class="text-cyan-50 transition duration-300 ease-in-out md:text-3xl lg:text-5xl"
        >
          Karin and Takwa
        </div>
        <div
          id="header-name"
          class="hidden text-cyan-50 lg:flex lg:gap-12 lg:text-xl xl:gap-16"
        >
          <div class="cursor-pointer" @click="onClickToHome">Home</div>
          <div class="cursor-pointer" @click="onClickToSchedule">Schedule</div>
          <div class="cursor-pointer">Travel</div>
          <div class="cursor-pointer">Honeymoon Fund</div>
          <div class="cursor-pointer">Photos</div>
          <div class="cursor-pointer" @click="onClickToLogin">Logout</div>
        </div>
        <div class="flex items-center px-4 lg:hidden">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            class="absolute right-4 block"
          >
            <span
              class="hamburger-line origin-top-left bg-cyan-50 transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line bg-cyan-50 transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line origin-bottom-left bg-cyan-50 transition duration-300 ease-in-out"
            ></span>
          </button>
          <nav
            id="nav-menu"
            class="absolute right-4 top-16 hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg md:max-w-[300px]"
          >
            <ul class="block">
              <li class="group">
                <a class="nav-label" @click="onClickToHome">Home</a>
              </li>
              <li class="group">
                <a class="nav-label" @click="onClickToSchedule">Schedule</a>
              </li>
              <li class="group">
                <a class="nav-label">Travel</a>
              </li>
              <li class="group">
                <a class="nav-label">Honeymoon Fund</a>
              </li>
              <li class="group">
                <a class="nav-label">Photos</a>
              </li>
              <li class="group">
                <a class="nav-label" @click="onClickToLogin">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script src="./js/header.js"></script>
<style scoped lang="scss">
.hamburger-line {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: block;
  height: 2px;
  width: 30px;
  --tw-bg-opacity: 1;
}
.bg-hamburger {
  background: rgb(8 145 178);
}
.hamburger-active > span:nth-child(1) {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hamburger-active > span:nth-child(2) {
  --tw-scale-x: 0;
  --tw-scale-y: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hamburger-active > span:nth-child(3) {
  --tw-rotate: -45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.navbar-fixed {
  position: fixed;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.7;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  #header-name {
    color: rgb(8 145 178);
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }
}
#nav-menu {
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.7;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    z-index: -1;
  }
}
</style>
