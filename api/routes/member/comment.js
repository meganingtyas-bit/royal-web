import Lib from '../../../system/lib/Lib';
import config from '../../../config/config';
const { Router } = require('express')
const router = Router()



router.put('/member/content/comment/update', async (req, res) => {
    await Lib.ajax.fetch(
        'PUT',
        `${config.apiUrl.member}/content/comment/update`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.post('/member/content/comment/add', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/content/comment/add`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.post('/member/content/comment/delete', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/content/comment/delete`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


module.exports = router
