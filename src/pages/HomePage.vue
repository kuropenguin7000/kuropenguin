<template>
  <div class="home-page">
    <div class="kue-lebaran">
      <img src="@/assets/list-kue-lebaran.jpg" alt="list-kue-lebaran" />
    </div>
    <div class="text-container">
      <div class="title">
        <h1>Hubungi: 085161802218</h1>
        <h1>Herli</h1>
        <h1>Herli</h1>
      </div>
      <div class="ghost">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { mapGetters } from '@/utils/map-state'

const { getHello } = mapGetters()
</script>

<style lang="scss" scoped>
.home-page {
  margin: 1rem;
  .kue-lebaran {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      img {
        width: 400px;
      }
    }
  }

  .text-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .title {
      height: 80px;
      position: relative;
      width: 80rem;
      display: flex;
      justify-content: center;
      @media (max-width: 768px) {
        width: 90%;
      }
      h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 50px;
        font-weight: 900;
        position: absolute;
        margin: 0;
        @media (max-width: 768px) {
          font-size: 25px;
        }
        &:nth-child(1) {
          color: #e5cfcf;
          @media (max-width: 768px) {
            right: 1%;
            top: 7%;
          }
        }
        &:nth-child(2) {
          color: transparent;
          -webkit-text-stroke: 2px #2cd0bd;
          top: 3rem;
          @media (max-width: 768px) {
            top: 37px;
          }
        }
        &:nth-child(3) {
          color: #2cd0bd;
          animation: animate 4s ease-in-out infinite;
          top: 3rem;
          @media (max-width: 768px) {
            top: 37px;
          }
        }
      }
    }
    @keyframes animate {
      0%,
      100% {
        clip-path: polygon(
          0% 45%,
          16% 44%,
          33% 50%,
          54% 60%,
          70% 61%,
          84% 59%,
          100% 52%,
          100% 100%,
          0% 100%
        );
      }
      50% {
        clip-path: polygon(
          0% 60%,
          15% 65%,
          34% 66%,
          51% 62%,
          67% 50%,
          84% 45%,
          100% 46%,
          100% 100%,
          0% 100%
        );
      }
    }
    .ghost {
      width: 8vmin;
      height: 12vmin;
      background-color: #e7e6e6;
      background-image: radial-gradient(
          ellipse at 35% 40%,
          #000 8%,
          transparent 0%
        ),
        radial-gradient(ellipse at 65% 40%, #000 8%, transparent 0%),
        radial-gradient(ellipse at 50% 60%, #000 8%, transparent 0%);
      border-radius: 100% / 70% 70% 0% 0%;
      transform: translateX(15em) rotateZ(-90deg);
      position: absolute;
      opacity: 0.9;
      mix-blend-mode: exclusion;
      animation: ghostMove 4s ease-out infinite;
      @media (max-width: 768px) {
        animation: ghostMoveMobile 4s ease-out infinite;
      }
    }
    @keyframes ghostMove {
      0% {
        transform: translateX(40rem) rotateZ(-90deg);
      }
      100% {
        transform: translateX(-40rem) rotateZ(-90deg);
      }
    }
    @keyframes ghostMoveMobile {
      0% {
        transform: translateX(10rem) rotateZ(-90deg);
      }
      100% {
        transform: translateX(-10rem) rotateZ(-90deg);
      }
    }
    .ghost div {
      position: absolute;
      width: 20%;
      background-color: #e7e6e6;
    }
    .ghost div:nth-of-type(1) {
      height: 7vmin;
      left: 0;
      bottom: -6vmin;
      border-radius: 100% / 0% 0% 50% 50%;
    }
    .ghost div:nth-of-type(2),
    .ghost div:nth-of-type(4) {
      height: 4vmin;
      left: 20%;
      bottom: -3vmin;
      border-radius: 100% / 50% 50% 0% 0%;
      background-color: transparent;
    }
    .ghost div:nth-of-type(3) {
      height: 4vmin;
      left: 40%;
      bottom: -3.95vmin;
      border-radius: 100% / 0% 0% 60% 60%;
      background-color: #e7e6e6;
    }
    .ghost div:nth-of-type(4) {
      left: 60%;
    }
    .ghost div:nth-of-type(5) {
      height: 3vmin;
      left: 80%;
      bottom: -2.9vmin;
      border-radius: 100% / 0% 0% 70% 70%;
      background-color: #e7e6e6;
    }
  }
}
</style>
