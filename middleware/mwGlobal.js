

export default async ({ app, route, redirect, store, params, nuxtState, req, isClient }) => {
    let path = route.path.split('/')
    if (process.server) {

        if (typeof app.$cookies.get('userData') !== 'undefined') {
            await store.dispatch('auth/setUserAuth', app.$cookies.get('userData'))
        }
    }




    if (process.client) {
        if (typeof app.$cookies.get('userData') !== 'undefined') {
            await store.dispatch('auth/setUserAuth', app.$cookies.get('userData'))
        }

        if (app.$lib.store.get('logedIn') == '') {
            await store.dispatch('auth/resetUser')
            if (typeof app.$cookies.get('userData') !== 'undefined') {

                app.$cookies.remove('userData')
            }
        }
    }


    if (store.state.auth.logedIn === false) {
        if (['dashboard'].includes(path[1])) {
            return redirect('/login')
        }
    }

    if (store.state.auth.logedIn === true) {
        if (['login', 'register'].includes(path[1])) {
            return redirect('/dashboard')
        }
    }

    if (process.client) {
        store.dispatch('nav/toggleSidebarReset')
        store.dispatch('nav/toggleTopUserList', false)

        window.scrollTo(0, 0);
    }


}
