import Lib from '../../../system/lib/Lib';
import config from '../../../config/config';
const { Router } = require('express')
const router = Router()



router.get('/member/content/category/list', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.member}/content/category/list`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.put('/member/content/category/update', async (req, res) => {
    await Lib.ajax.fetch(
        'PUT',
        `${config.apiUrl.member}/content/category/update`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.put('/member/content/category/active', async (req, res) => {
    await Lib.ajax.fetch(
        'PUT',
        `${config.apiUrl.member}/content/category/active`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.put('/member/content/category/nonactive', async (req, res) => {
    await Lib.ajax.fetch(
        'PUT',
        `${config.apiUrl.member}/content/category/nonactive`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.post('/member/content/category/add', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/content/category/add`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.post('/member/content/category/delete', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/content/category/delete`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

module.exports = router
