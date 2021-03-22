<template>
  <div>
    <div class="ctm-pagination d-flex justify-content-center">
      <ul
        role="menubar"
        aria-disabled="false"
        aria-label="Pagination"
        class="pagination box-navigation m-auto fs-12 pt-4 d-inline-flex b-pagination justify-content-center"
      >
        <li v-if="pagination.first_page" class="page-item">
          <a href="javascript:;" @click="goToPage(1)" class="page-link">«</a>
        </li>
        <li v-if="pagination.prev != 0" class="page-item">
          <a href="javascript:;" @click="goToPage(pagination.prev)" class="page-link">Sebelumnya</a>
        </li>
        <li
          v-for="page in pagination.detail"
          :key="page"
          v-bind:class="{'active' : page == pagination.current }"
          class="page-item"
        >
          <a v-if="page == pagination.current" href="javascript:;" class="page-link">{{page}}</a>
          <a v-else href="javascript:;" @click="goToPage(page)" class="page-link">{{page}}</a>
        </li>
        <li v-if="pagination.next != 0" class="page-item">
          <a href="javascript:;" @click="goToPage(pagination.next)" class="page-link">Selanjutnya</a>
        </li>
        <li v-if="pagination.last_page" class="page-item">
          <a href="javascript:;" @click="goToPage(pagination.total_page)" class="page-link">»</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'publicPagination',
  layout(e) {
    return ''
  },
  head() {
    return ''
  },
  data() {
    return {
      perpage: '',
      currentPage: 1
    }
  },
  components: {},
  methods: {
    goToPage(page) {
      console.log(page)
      this.currentPage = page
      this.$router.push({ query: { paged: page } })
    }
  },
  props: {
    pagination: Object
  },
  computed: {}
}
</script>
<style>
</style>