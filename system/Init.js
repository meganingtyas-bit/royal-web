import Lib from './lib/Lib'
import Config from '../config/config'

class Init {

    mixin(Vue) {
        Vue.mixin({
            // methods: {
            //     lib() {
            //         return Lib
            //     },
            //     config() {
            //         return Config;
            //     }
            // }

        });

        Vue.prototype.$config = Config
        Vue.prototype.$lib = Lib
    }
}

export default new Init();