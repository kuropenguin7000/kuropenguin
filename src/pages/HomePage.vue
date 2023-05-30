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
}
</style>
