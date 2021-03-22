<template>
  <div>
    <div class="toogle-container dash-nav-mobile">
      <div v-if="toggleSidebar" class="backdrop" @click="$store.dispatch('nav/toggleSidebar')"></div>
      <transition name="slide-side">
        <div v-if="toggleSidebar" class="toogle nav-toggle-mobile">
          <MenuContent />
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import MenuContent from '~/components/lightred/dashboard/MenuContent'

export default {
  name: 'toogle',
  data() {
    return {}
  },
  components: {
    MenuContent
  },
  methods: {},
  props: {},
  computed: {
    toggleSidebar() {
      return this.$store.getters['nav/toggleSidebar']
    }
  }
}
</script>
<style>
.toogle-container {
  height: 100%;
  width: 100%;
}
.toogle {
  float: right;
  height: 100%;
  width: 300px;
  background-color: #fff;
  z-index: 10000;
  position: fixed;
  top: 0;
  right: 0;
  box-sizing: border-box;
  padding: 30px;
}
.backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>