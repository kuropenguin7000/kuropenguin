import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'SchedulePage',
  components: {
    Header,
    Footer
  },
  methods: {
    openGoogleMaps() {
      window.open('https://goo.gl/maps/3xagX2WrP5nSEWR88', '_blank')
    }
  }
}
