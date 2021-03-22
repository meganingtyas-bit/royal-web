import CommonLib from './CommonLib'

class Template {

    permalink(type, obj) {
        return `${Config.baseUrl}/${type}/${obj.id}/${obj.slug}`
    }

    generateMeta(getMeta) {
        let meta = []
        if (CommonLib.objectIsEmpty(getMeta)) {
            meta = []
        } else {
            meta = [
                { hid: 'description', name: 'description', content: getMeta.description },
                { hid: 'og:title', name: 'og:title', content: getMeta.title },
                { hid: 'twitter:title', name: 'twitter:title', content: getMeta.title },
                { hid: 'og:description', name: 'og:description', content: getMeta.description },
                { hid: 'twitter:description', name: 'twitter:description', content: getMeta.description },
            ]
        }

        return meta
    }

    templateTitle(app, title = '') {
        let path = app.$route.fullPath.split('/')
        let getTitle = ''
        getTitle = title
        if (Array.isArray(title)) {
            if (title.length > 0) {
                getTitle = getTitle.join(' - ')
            }
        }
        if (path[1] == 'dashboard') {
            if (title == '') {
                return 'Dashboard'
            } else {
                return 'Dashboard > ' + getTitle
            }
        } else {
            if (title == '') {
                return process.env.mainTitle
            } else {
                return process.env.mainTitle + ' > ' + getTitle
            }


        }

    }

    dashboardTitle() {
        this.$route
    }

}

export default new Template()