import Lib from '../../../system/lib/Lib';
import config from '../../../config/config';
const { Router } = require('express')
const router = Router()



router.post('/member/content/review/add', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/content/review/add`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.post('/member/content/review/delete', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/content/review/delete`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})



module.exports = router
