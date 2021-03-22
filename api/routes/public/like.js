import Lib from '../../../system/lib/Lib';
import config from '../../../config/config';
const { Router } = require('express')
const router = Router()



router.get('/content/like/list', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.public}/content/like/list`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

module.exports = router
