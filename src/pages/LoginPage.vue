<template>
  <div>
    <div
      class="mx-3 my-10 rounded-sm border-2 border-gold-lock-100 px-2 py-5 md:mx-20 md:my-36 md:rounded-none md:px-10 md:pt-10 md:outline md:outline-2 md:outline-offset-16 md:outline-gold-lock-200 xl:mx-36"
    >
      <div
        class="flex flex-col items-center justify-center text-cyan-50 xl:flex-row xl:gap-10"
      >
        <div class="text-center text-5xl lg:text-7xl">
          <div>Karina</div>
          <div>Dwi</div>
          <div>Pujiani</div>
        </div>
        <div class="text-9xl text-cyan-950 xl:text-[20rem]">&</div>
        <div class="text-center text-5xl lg:text-7xl">
          <div>Takwa</div>
          <div>Hardika</div>
        </div>
      </div>
      <div class="login-input">
        <form @submit.prevent="onSubmit">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            pattern="01072023"
            placeholder="Enter your password"
            title="01072023"
            required
            autocomplete="on"
            class="w-11/12 md:w-full"
          />
          <input id="login" type="checkbox" />
          <label
            class="login-button w-11/12 md:w-full"
            for="login"
            @click="onRouteToHomePage"
          >
            <span>Enter</span>
            <svg>
              <path
                d="M10,17V14H3V10H10V7L15,12L10,17M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16H7V20H17V4H7V8H5V4A2,2 0 0,1 7,2Z"
              ></path>
            </svg>
          </label>
          <div class="padlock">
            <div class="padlock__hook">
              <div class="padlock__hook-body"></div>
              <div class="padlock__hook-body"></div>
            </div>
            <div class="padlock__body">
              <div class="padlock__face">
                <div class="padlock__eye padlock__eye--left"></div>
                <div class="padlock__eye padlock__eye--right"></div>
                <div class="padlock__mouth padlock__mouth--one"></div>
                <div class="padlock__mouth padlock__mouth--two"></div>
                <div class="padlock__mouth padlock__mouth--three"></div>
              </div>
            </div>
          </div>
        </form>
        <div
          class="text-center text-cyan-100 md:text-2xl lg:text-3xl xl:text-4xl"
        >
          Pspspsps! The password is the day, month, & year of our wedding!
          (ddmmyyyy)
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import musicFile from '@/assets/sound/jvke-golden-hour.mp3'
export default {
  name: 'LoginPage',
  data() {
    return {
      password: ''
    }
  },
  methods: {
    onSubmit() {
      return false
    },
    onRouteToHomePage() {
      this.$router.push({
        name: 'Home Page'
      })
      this.playMusic()
    },
    playMusic() {
      const audio = new Audio(musicFile)
      audio.play()
    }
  }
}
</script>

<style lang="scss" scoped>
.login-input {
  align-items: center;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
}

form {
  display: grid;
  grid-template-columns: auto;
  grid-gap: 0.5rem 1rem;
  justify-items: center;
  position: relative;
}

[type='password'] {
  padding: 12px 20px;
  font-size: 1rem;
  border-width: calc(var(--border-width) * 1px);
  border-style: solid;
  border-color: var(--accent);
  border-radius: calc(var(--border-radius) * 1px);
  text-align: center;
  outline: transparent;
  transition: border-color calc(var(--transition, 0.2s) * 1s) ease;

  &:valid {
    --accent: hsla(100, 100%, 50%, 1);
  }

  &:invalid {
    --accent: hsla(10, 100%, 50%, 0.5);
  }

  &:placeholder-shown {
    --accent: hsl(0, 0%, 100%);
  }
}

.app {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: hsla(0, 0%, 95%, 1);
  transform: scale(var(--scale));
  transition: transform calc(var(--transition, 0.2s) * 1s) ease;
}

[for='password'],
#login {
  height: 0;
  width: 0;
  transform: scale(0);
  position: absolute;
}

.logout-button {
  --size: 52;
  --lightness: 45;
  height: calc(var(--size) * 1px);
  padding: 12px 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  background: hsl(10, 80%, calc(var(--lightness) * 1%));
  border: 0;
  border-radius: calc(var(--border-radius) * 1px);
  cursor: pointer;

  &:hover {
    --lightness: 30;
  }

  &:active {
    --lightness: 20;
  }
}

.login-button {
  --size: 52;
  --lightness: 45;
  align-items: center;
  background: hsl(100, 80%, calc(var(--lightness) * 1%));
  border-radius: calc(var(--border-radius) * 1px);
  cursor: pointer;
  display: flex;
  height: calc(var(--size) * 1px);
  justify-content: center;
  padding: 12px 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  transition: background calc(var(--transition, 0.2s) * 1s) ease;

  svg {
    transform: translate(50%, 0);
  }

  * {
    cursor: pointer;
  }

  &:hover {
    --lightness: 30;
  }

  &:active {
    --lightness: 20;
  }

  svg {
    height: 24px;
    width: 24px;

    path {
      fill: white;
    }
  }
}

.padlock {
  --hue: 65;
  --color: hsl(50, 100%, 50%);
  --color-one: hsl(38, 100%, 50%);
  --color-two: hsl(0, 0%, 100%);
  height: calc(var(--padlock-size) * 1px);
  width: calc(var(--padlock-size) * 1px);
  grid-row: 1;
  position: relative;

  &__body {
    border: 8px solid black;
    border-radius: 20px;
    position: absolute;
    bottom: 10%;
    width: 66%;
    height: 46%;
    left: 50%;
    transform: translate(-50%, 0);
    background: var(--color);
    box-shadow: -30px 0 0px 0px var(--color-one) inset,
      10px 0 0px 0px var(--color-two) inset;
  }

  &__face {
    height: 25%;
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
  }

  &__eye {
    position: absolute;
    height: 15px;
    width: 15px;
    background: hsl(0, 0%, 0%);
    top: 0;
    border-radius: 50%;
    animation: blink 4s infinite linear;

    &:after {
      content: '';
      height: 25%;
      width: 25%;
      background: hsl(0, 0%, 100%);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-100%, -100%);
    }

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
    }
  }

  @keyframes blink {
    0%,
    24%,
    27%,
    100% {
      transform: scaleY(1);
    }
    25%,
    26% {
      transform: scaleY(0);
    }
  }

  &__mouth {
    width: 25%;
    height: 10px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);

    &--one {
      background: black;
      height: 5px;
      width: 40%;
      left: 45%;
      bottom: 25%;
      display: block;
    }

    &--two,
    &--three {
      height: 24px;
      width: 20px;
      border-radius: 50%;
      bottom: 24%;
      $clip: inset(64% 0 0 0);
      background: transparent;
      -webkit-clip-path: $clip;
      clip-path: $clip;
      display: none;
      overflow: hidden;

      &:before {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        border: 4px solid hsl(0, 0%, 0%);
      }
    }

    &--three {
      background: hsl(0, 0%, 0%);

      &:after {
        content: '';
        position: absolute;
        height: 6px;
        width: 10px;
        border-radius: 50%;
        bottom: -2px;
        left: 40%;
        background: red;
      }
    }
  }

  &__hook {
    --delay: 1;
    --clip: 40;
    width: 50%;
    height: 90%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, calc(var(--pos, 40) * -1%));
    $clip: inset(0 0 30% 0);
    -webkit-clip-path: $clip;
    clip-path: $clip;
    transition: transform calc(var(--transition, 0.2s) * 1s)
      calc(((var(--transition, 0.2s) * 1.5) * var(--delay, 0)) * 1s)
      cubic-bezier(0.78, 0.16, 0.64, 1.8);

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(100% - 16px);
      height: calc(100% - 16px);
      border-radius: 50% / 40%;
      transform: translate(-50%, -50%);
      box-shadow: 5px 0 0 0 hsl(0, 0%, 100%) inset,
        -10px 0 0 0 hsl(0, 0%, 40%) inset;
      $clip: polygon(
        0 0,
        100% 0,
        100% calc(40 * 1%),
        50% calc(40 * 1%),
        50% 100%,
        0 100%
      );
      -webkit-clip-path: $clip;
      clip-path: $clip;
    }

    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    & > div:nth-of-type(1) {
      width: 100%;
      height: 100%;
      border: 36px solid #000;
      border-radius: 50% / 40%;
      $clip: polygon(
        0 0,
        100% 0,
        100% calc(calc(40 * 1%) + 8px),
        50% calc(calc(40 * 1%) + 8px),
        50% 100%,
        0 100%
      );
      -webkit-clip-path: $clip;
      clip-path: $clip;
    }

    & > div:nth-of-type(2) {
      width: calc(100% - 16px);
      height: calc(100% - 16px);
      border: 20px solid hsl(0, 0%, 75%);
      border-radius: 50% / 40%;
      $clip: polygon(
        0 0,
        100% 0,
        100% calc(40 * 1%),
        50% calc(40 * 1%),
        50% 100%,
        0 100%
      );
      -webkit-clip-path: $clip;
      clip-path: $clip;
    }
  }
}
.logout-message {
  display: block;
  width: 100%;
  border-radius: calc(var(--border-radius) * 1px);
  padding: 1rem;
  background: white;
  text-align: center;
  font-weight: bold;
}

// Functionality
#login:checked ~ .app {
  --scale: 1;
}

[type='password']:valid {
  & ~ #login,
  & ~ [for='login'] {
    visibility: visible;
  }

  &:hover ~ .padlock {
    .padlock__mouth--one,
    .padlock__mouth--two {
      display: none;
    }

    .padlock__mouth--three {
      display: block;
    }
  }

  & ~ .padlock {
    .padlock__mouth--one {
      display: none;
    }

    .padlock__mouth--two {
      display: block;
    }

    .padlock__hook {
      --pos: 60;
      --delay: 0;
    }
  }
}

[type='password']:placeholder-shown {
  & ~ .app {
    transition: transform 0s 0s ease;
  }
}

.app:focus-within ~ .logout-message {
  visibility: visible;
  grid-row: 3;
}

#login,
[for='login'],
.logout-message {
  visibility: hidden;
}

.app {
  --scale: 0;
}
</style>
