import Lib from '../../../system/lib/Lib';
import config from '../../../config/config';
const { Router } = require('express')
const router = Router()



router.get('/member/user/profile/data', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.member}/user/profile/data`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.put('/member/user/profile/update', async (req, res) => {
    await Lib.ajax.fetch(
        'PUT',
        `${config.apiUrl.member}/user/profile/update`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })
})


router.get('/member/user/profile/business/data', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.member}/user/profile/business/data`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.post('/member/user/profile/business/create', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/user/profile/business/create`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.post('/member/user/profile/verification/create', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/user/profile/verification/create`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.get('/member/user/profile/verification/detail', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.member}/user/profile/verification/detail`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.put('/member/user/profile/change-password', async (req, res) => {
    await Lib.ajax.fetch(
        'PUT',
        `${config.apiUrl.member}/user/profile/change-password`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })
})


router.put('/member/user/profile/change-avatar', async (req, res) => {
    await Lib.ajax.fetch(
        'PUT',
        `${config.apiUrl.member}/user/profile/change-avatar`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })
})

router.get('/member/user/profile/get-profession', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.member}/user/profile/get-profession`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

module.exports = router
