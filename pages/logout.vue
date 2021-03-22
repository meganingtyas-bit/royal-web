<template>
  <div></div>
</template>
<script>
export default {
  name: 'logout',
  layout(e) {},
  async mounted() {
    this.$cookies.remove('userData')
    this.$lib.store.remove('logedIn')
    return this.$router.replace('/')
  },
  data() {
    return {}
  },
  components: {}
}
</script>

<style lang="css" scoped>
</style>