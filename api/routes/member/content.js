import Lib from '../../../system/lib/Lib';
import config from '../../../config/config';
const { Router } = require('express')
const router = Router()



router.get('/member/content/list/by-type', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.member}/content/list/by-type`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})
router.post('/member/content/add', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/content/add`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.put('/member/content/update', async (req, res) => {
    await Lib.ajax.fetch(
        'PUT',
        `${config.apiUrl.member}/content/update`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.post('/member/content/publish', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/content/publish`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.post('/member/content/unpublish', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/content/unpublish`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.post('/member/content/moderation/approve', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/content/moderation/approve`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.post('/member/content/moderation/reject', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/content/moderation/reject`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.post('/member/content/delete', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/content/delete`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.post('/member/event/join', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/event/join`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})



module.exports = router
