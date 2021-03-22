import Lib from '../system/lib/Lib';
import config from '../config/config';
import express from 'express'

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
    Object.setPrototypeOf(req, app.request)
    Object.setPrototypeOf(res, app.response)
    req.res = res
    res.req = req
    next()
})

router.get('/register', function (req, res) {
    res.json(req.session)
    // res.send(req)
    // res.write('req.session')
    req.end()

    //     try {
    //     req.end()
    // } catch (error) {
    //     res.write(error)
    //     req.end()
    // }

})

// Add POST - /api/login
router.post('/login', async (req, res) => {
    try {


        let postData = {
            email: req.body.email,
            password: req.body.password,
        }
        // res.json(postData)
        await Lib.ajax.fetch(
            'POST',
            `${config.apiBaseUrl}/public/login`, postData
        ).then(response => {
            req.session.authUser = 'sssssssssssssssssss'

            // if (response.ok === 1) {
            //     req.session.authUser.data = response.result.user
            //     req.session.authUser.logedIn = true
            // }

            return res.json(response)

        }).catch(e => {
            req.session.authUser = 'sssssssssssssssssss'
            return res.json(e)
        })
        return res.status(401).json({ message: 'Bad credentials' })
    } catch (error) {
        return res.json(error)

    }
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
    delete req.session.authUser
    res.json({ ok: true })
})

// Export the server middleware
export default {
    path: '/api',
    handler: router
}
