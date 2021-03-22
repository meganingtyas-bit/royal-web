<template>
  <div></div>
</template>
<script>
export default {
  name: 'Auth',
  data() {
    return {}
  },
  mounted() {
    if (this.$store.state.auth.authUser === null) {
      this.$router.go({ path: '/login' })
    }
  },
  components: {},
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>