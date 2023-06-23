export default {
  name: 'Header',
  data() {
    return {
      home: 'home'
    }
  },
  mounted() {
    window.onscroll = function () {
      const header = document.querySelector('header')
      const hamburgerLine = document.querySelectorAll('.hamburger-line')
      const fixedNav = header.offsetTop
      if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed')
        hamburgerLine.forEach(h => {
          h.classList.add('bg-hamburger')
        })
      } else {
        header.classList.remove('navbar-fixed')
        hamburgerLine.forEach(h => {
          h.classList.remove('bg-hamburger')
        })
      }
    }
    const hamburger = document.querySelector('#hamburger')
    const navMenu = document.querySelector('#nav-menu')
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('hamburger-active')
      navMenu.classList.toggle('hidden')
    })
  },
  methods: {
    onClickToHome() {
      this.$router.push({
        name: 'Home Page'
      })
    },
    onClickToSchedule() {
      this.$router.push({
        name: 'Schedule'
      })
    }
  }
}
