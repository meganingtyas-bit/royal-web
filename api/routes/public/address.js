import Lib from '../../../system/lib/Lib';
import config from '../../../config/config';
const { Router } = require('express')
const router = Router()



router.get('/address/province', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.public}/address/province`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.get('/portal/regional/list', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.public}/portal/regional/list`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.get('/address/city', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.public}/address/city`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})



router.get('/address/subdistrict', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.public}/address/subdistrict`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})



router.get('/address/village', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.public}/address/village`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


module.exports = router
