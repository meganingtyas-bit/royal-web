import Lib from '../../../system/lib/Lib';
import config from '../../../config/config';
const { Router } = require('express')
const router = Router()

router.get('/content/category/list', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.public}/content/category/list`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.get('/content/category/option', async (req, res) => {
    console.log(req.body)
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.public}/content/category/option`, req.query
    ).then(response => {
        console.log(response)
        res.json(response)
    }).catch(e => { })

})



module.exports = router
