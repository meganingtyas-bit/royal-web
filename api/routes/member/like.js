import Lib from '../../../system/lib/Lib';
import config from '../../../config/config';
const { Router } = require('express')
const router = Router()



router.post('/member/content/like/add', async (req, res) => {
    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.member}/content/like/add`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

module.exports = router
