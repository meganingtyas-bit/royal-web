import Vue from 'vue'
import Dialog from 'vue-dialog-loading'

import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import EsdLoadingData from '~/components/utils/LoadingData';
import BannerPublic from '~/components/lightred/common/BannerPublic';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
Vue.component('esd-loading-data', EsdLoadingData);
Vue.component('banner-public', BannerPublic);

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

Vue.use(Dialog, {
    dialogBtnColor: '#0f0'
})
