<template>
  <div>
  	<b-container>
	    <b-row>
        <div class="col-lg-2 col-md-3 col-sm-12">
  	    	<!-- <template v-slot:aside> -->
            <img :src="$store.state.auth.authUser.image" class="img-user-dashboard" alt="">
          <!-- </template> -->
        </div>
        <div class="col-lg-6 col-md-7 col-sm-12 box-profil">
  				<span>
            <h5 class="mt-0">{{$store.state.auth.authUser.name.substring(0, 20)}} <nuxt-link to="/dashboard/profile/user/edit" class="badge btn-danger-lightred"><i class="fa fa-pencil"></i></nuxt-link></h5>
          </span>
  	      <div>
            <div class="label-type danger">UMKM</div>
          </div>
          <table class="ft-gray mt-2">
          	<tr>
          		<td>Tanggal Bergabung</td>
          		<td></td>
          		<td>: {{$moment($store.state.auth.authUser.join_datetime).format('LL')}}</td>
          	</tr>
          	<tr>
          		<td>Nomor Telp/HP</td>
          		<td></td>
          		<td>: {{$store.state.auth.authUser.mobilephone}}</td>
          	</tr>
          	<tr>
          		<td>Alamat Rumah</td>
          		<td></td>
          		<td>: {{$store.state.auth.authUser.address}}</td>
          	</tr>
          </table>
        </div>
	    </b-row>
	  </b-container>
  </div>
</template>
<script>
export default {
  name: 'BlokProfil',
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