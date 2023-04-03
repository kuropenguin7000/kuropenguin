<template>
  <div>
    <h1>Hello World {{ getHello }}</h1>
  </div>
</template>

<script setup>
import { mapGetters } from '@/utils/map-state'

const { getHello } = mapGetters()
/*export default {
  name: 'HomePage',
  computed: {}
}*/
</script>

<style scoped></style>
