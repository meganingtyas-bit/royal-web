<template>
  <div>
    <StaticVisiMisi />
  </div>
</template>

<script>
import config from '~/config/config.js'

const StaticVisiMisi = () =>
  import('~/components/' + config.theme.public + '/static/StaticVisiMisi.vue')

export default {
  components: {
    StaticVisiMisi
  },
  layout(e) {
    return config.theme.public + '/Secondary'
  },
  data() {
    return {
      title: 'Visi Misi UMKM Nusantara'
    }
  },
  methods: {}
}
</script>

<style>
</style>