<template>
  <div class="home-page">
    <vue3-flip-countdown deadline="2023-07-01 08:00:00" />
  </div>
</template>

<script setup>
import { mapGetters } from '@/utils/map-state'

const { getHello } = mapGetters()
</script>

<style lang="scss" scoped>
.home-page {
  .gambar {
    min-height: 50vh;
    width: 15%;
    display: flex;
    align-items: center;
    background-image: url("@/assets/list-kue-lebaran.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    mask-image: linear-gradient(rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0));
  }
}
</style>
