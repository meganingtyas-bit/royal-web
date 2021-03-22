import Lib from '../../../system/lib/Lib';
import config from '../../../config/config';
const { Router } = require('express')
const router = Router()


router.post('/login', async (req, res, next) => {

    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.public}/login`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.post('/login-sso', async (req, res, next) => {

    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.public}/login-sso`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.post('/register', async (req, res) => {

    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.public}/register`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.get('/account-verification', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.public}/account-verification`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.post('/forgot-password', async (req, res) => {

    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.public}/forgot-password`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.post('/forgot-password-reset', async (req, res) => {

    await Lib.ajax.fetch(
        'POST',
        `${config.apiUrl.public}/forgot-password-reset`, req.body
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})


router.get('/forgot-password-reset', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.public}/forgot-password-reset`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.get('/logout', async (req, res) => {
    res.json({ ok: 1 })
})

router.post('/session', async (req, res) => {
    if (req.universalCookies.get('userData') != '') {
        res.json({ ok: 1, result: req.universalCookies.get('userData') })
    } else {
        res.json({ ok: 0, result: '' })
    }
})

router.get('/sessionx', async (req, res) => {
    res.json(req.universalCookies.get('userData'))
})
module.exports = router