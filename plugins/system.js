import Vue from 'vue'
import Init from '../system/Init'
import VueMq from 'vue-mq'


Init.mixin(Vue)
import Lib from '~/system/lib/Lib'
import Config from '~/config/config'


Vue.use(VueMq, {
    breakpoints: {
        mobile: 450,
        tablet: 900,
        laptop: 1250,
        desktop: Infinity,
    }
})

export default ({ app, store }, inject) => {
    // blah blah blah
    inject('lib', Lib)
    inject('config', Config)
}
