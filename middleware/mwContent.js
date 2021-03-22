let allType = [
    {
        id: 1,
        slug: 'mitra',
    },
    {
        id: 2,
        slug: 'event',
    },
    {
        id: 3,
        slug: 'article',
    },
    {
        id: 4,
        slug: 'partner',
    },
    {
        id: 5,
        slug: 'news',
    },
    {
        id: 6,
        slug: 'slider',
    },
    {
        id: 7,
        slug: 'consultant',
    },

]


function checkParamPost(params) {
    if (typeof params.id !== typeof undefined ||
        typeof params.slug !== typeof undefined) {
        return true
    }
    return false
}

async function homePost(app, store, param) {
    let getRes = await app.$lib.ajax
        .fetch('GET', `${app.$config.baseUrlApi}/content/list/all-type`, param)
        .then(response => {
            if (response.ok === 1) {
                return response.result
            }
        })
        .catch(e => { })
    await store.dispatch('content/post', getRes)
    return
}

async function singlePost(app, store, param) {
    let getRes = await app.$lib.ajax
        .fetch('GET', `${app.$config.baseUrlApi}/content/detail`, param)
        .then(response => {
            if (response.ok === 1) {
                return response.result
            }
        })
        .catch(e => { })
    await store.dispatch('content/post', getRes)
    return
}


async function listPost(app, store, param) {
    let getRes = await app.$lib.ajax
        .fetch('GET', `${app.$config.baseUrlApi}/content/list/by-type`, param)
        .then(response => {
            if (response.ok === 1) {
                return response.result
            }
        })
        .catch(e => { })
    await store.dispatch('content/post', getRes)
    return
}



async function diplayContent(app, route, redirect, store, params) {

}

export default async ({ app, route, redirect, store, params }) => {
    let path = route.path.split('/')
    console.log(path)
    // start router post content
    if (path[1] == '') {
        // ================= HOME ===========================
        let param = {
            limit: 3
        }
        await homePost(app, store, param)
    } else {
        let getTypeArr = allType.map((v) => {
            return v.slug
        })
        if (getTypeArr.includes(path[1])) {
            let slug = allType.filter((v) => {
                return v.slug == path[1]
            })

            if (typeof path[2] === typeof undefined) {

                let param = {
                    type_id: slug[0]['id']
                }
                param.page = route.query.paged
                param.limit = 10
                await listPost(app, store, param)

            } else {
                if (['category'].includes(path[2])) {
                    // category

                    let param = {
                        type_id: slug[0]['id']
                    }
                    await listPost(app, store, param)

                } else {
                    // single
                    if (checkParamPost(params)) {
                        let param = {
                            type_id: slug[0]['id'],
                            id: params.id,
                            slug: params.slug
                        }
                        // await singlePost(app, store, param)

                    } else {
                        return redirect('/404')
                    }
                }
            }
        }
    }

}
