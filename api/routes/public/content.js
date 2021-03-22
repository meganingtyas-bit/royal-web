import Lib from '../../../system/lib/Lib';
import config from '../../../config/config';
const { Router } = require('express')
const router = Router()



router.get('/content/list/by-type', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.public}/content/list/by-type`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.get('/content/detail', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.public}/content/detail`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.get('/content/list/all-type', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.public}/content/list/all-type`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

module.exports = router
