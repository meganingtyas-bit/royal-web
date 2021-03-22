// import config from '~/config/config.js'
// import Lib from '~/system/lib/Lib'

// function checkParamPost(params) {
//     if (typeof params.id !== typeof undefined ||
//         typeof params.slug !== typeof undefined) {
//         return true
//     }
//     return false
// }

// async function singlePost(store, param) {
//     return await Lib.ajax
//         .fetch('GET', `${config.baseUrlApi}/content/detail`, param)
//         .then(response => {
//             if (response.ok === 1) {
//                 store.commit('content/post', response.result)
//                 store.commit('content/meta', Lib.template.generateMeta(response.result.meta))
//             }
//         })
//         .catch(e => { })

// }


export default async ({ route, redirect, store, params }) => {
    // let path = route.fullPath.split('/')

    // console.log(path)

    // // start router post content
    // if (path[1] == '') {
    //     // ================= HOME ===========================

    // } else {


    //     // ================= POST ===========================
    //     if (path[1] == 'article') {

    //         if (typeof path[2] === typeof undefined) {
    //             // article

    //             let param = {
    //                 type_id: 3
    //             }
    //             await Lib.ajax
    //                 .fetch('GET', `${config.baseUrlApi}/content/list/by-type`, param)
    //                 .then(response => {
    //                     if (response.ok === 1) {
    //                         store.commit('content/post', response.result.data)

    //                     }
    //                 })
    //                 .catch(e => { })
    //         } else {
    //             if (['category'].includes(path[2])) {
    //                 // category

    //             } else {
    //                 // single
    //                 if (checkParamPost(params)) {
    //                     let param = {
    //                         type_id: 3,
    //                         id: params.id,
    //                         slug: params.slug
    //                     }
    //                     await singlePost(store, param)
    //                 } else {
    //                     return redirect('/404')
    //                 }
    //             }
    //         }

    //     }


    //     // ================= NEWS ===========================
    //     if (path[1] == 'news') {

    //         if (typeof path[2] === typeof undefined) {
    //             // article

    //             let param = {
    //                 type_id: 5
    //             }
    //             await Lib.ajax
    //                 .fetch('GET', `${config.baseUrlApi}/content/list/by-type`, param)
    //                 .then(response => {
    //                     if (response.ok === 1) {
    //                         store.commit('content/post', response.result.data)
    //                     }
    //                 })
    //                 .catch(e => { })
    //         } else {
    //             if (['category'].includes(path[2])) {
    //                 // category

    //             } else {
    //                 // single
    //                 if (checkParamPost(params)) {
    //                     let param = {
    //                         type_id: 5,
    //                         id: params.id,
    //                         slug: params.slug
    //                     }
    //                     await singlePost(store, param)
    //                 } else {
    //                     return redirect('/404')
    //                 }
    //             }
    //         }

    //     }

    //     // ================= EVENT ===========================
    //     if (path[1] == 'event') {
    //         if (typeof path[2] === typeof undefined) {
    //             // article

    //             let param = {
    //                 type_id: 2
    //             }
    //             await Lib.ajax
    //                 .fetch('GET', `${config.baseUrlApi}/content/list/by-type`, param)
    //                 .then(response => {
    //                     if (response.ok === 1) {
    //                         store.commit('content/post', response.result.data)
    //                     }
    //                 })
    //                 .catch(e => { })
    //         } else {
    //             if (['category'].includes(path[2])) {
    //                 // category

    //             } else {
    //                 // single
    //                 if (checkParamPost(params)) {
    //                     let param = {
    //                         type_id: 2,
    //                         id: params.id,
    //                         slug: params.slug
    //                     }
    //                     await singlePost(store, param)
    //                 } else {
    //                     return redirect('/404')
    //                 }
    //             }
    //         }
    //     }



    //     // ================= MITRA ===========================
    //     if (path[1] == 'mitra') {

    //         if (typeof path[2] === typeof undefined) {
    //             // article

    //             let param = {
    //                 type_id: 1
    //             }
    //             await Lib.ajax
    //                 .fetch('GET', `${config.baseUrlApi}/content/list/by-type`, param)
    //                 .then(response => {
    //                     if (response.ok === 1) {
    //                         store.commit('content/post', response.result.data)
    //                     }
    //                 })
    //                 .catch(e => { })
    //         } else {
    //             if (['category'].includes(path[2])) {
    //                 // category

    //             } else {
    //                 // single
    //                 if (checkParamPost(params)) {
    //                     let param = {
    //                         type_id: 1,
    //                         id: params.id,
    //                         slug: params.slug
    //                     }
    //                     await singlePost(store, param)
    //                 } else {
    //                     return redirect('/404')
    //                 }
    //             }
    //         }

    //     }

    //     // ================= CONSULTANT ===========================
    //     if (path[1] == 'consultant') {
    //         if (typeof path[2] === typeof undefined) {
    //             // article

    //             let param = {
    //                 type_id: 7
    //             }
    //             await Lib.ajax
    //                 .fetch('GET', `${config.baseUrlApi}/content/list/by-type`, param)
    //                 .then(response => {
    //                     if (response.ok === 1) {
    //                         store.commit('content/post', response.result.data)
    //                     }
    //                 })
    //                 .catch(e => { })
    //         } else {
    //             if (['category'].includes(path[2])) {
    //                 // category

    //             } else {
    //                 // single
    //                 if (checkParamPost(params)) {

    //                     let param = {
    //                         type_id: 7,
    //                         id: params.id,
    //                         slug: params.slug
    //                     }
    //                     await singlePost(store, param)
    //                 } else {
    //                     return redirect('/404')
    //                 }
    //             }
    //         }
    //     }
    // }


}
