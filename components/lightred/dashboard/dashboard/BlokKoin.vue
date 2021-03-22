<template>
  <div>
  	<div class="box-koin">
  		<b-card>
		    <b-media>
		      <template v-slot:aside>
		        <img src="/assets/themes/lightred/images/dashboard/money.png" alt="">
		      </template>
					<table class="t-koin ft-medium-gray fs-14">
						<tr>
							<td>Sisa Koin Anda</td>
							<td></td>
							<td>133</td>
						</tr>
						<tr>
							<td>Total Coin</td>
							<td></td>
							<td>133</td>
						</tr>
						<tr>
							<td>Saldo/Point Lakupay</td>
							<td></td>
							<td>133</td>
						</tr>
					</table>
		    </b-media>
		    <div class="button-koin m-auto text-center">
		    	<nuxt-link to="/" class="btn btn-danger-lightred btn-portal">REDEEM KOIN</nuxt-link>
		    </div>
		    <div class="content-koin m-auto text-center fs-10 text-muted">
		    	<p class="mb-0 mt-2">Untuk Melihat Rincian Coin Anda</p>
		    	<a href="" class="text-red-portal">Kliknya Di Sini !</a>
		    </div>
		  </b-card>
  	</div>
  </div>
</template>
<script>
export default {
  name: 'BlokKoin',
  data() {
    return {}
  },
  components: {},
  methods: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>