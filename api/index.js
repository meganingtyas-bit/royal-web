
const authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoiSDZFMllVIiwibmFtZSI6IkNvZmZlZSBSb3lhbCBDb21tdW5pdHkiLCJkZXZpY2UiOiJ3ZWIiLCJpYXQiOjE1NzU4NzM3MzB9.e69j54QISxYrOCj2blzaJj4o-nVZ2dZbkY5wtSMz_wo'
// const authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoiVDhPNVkyIiwibmFtZSI6IlVNS00gTnVzYW50YXJhIiwiZGV2aWNlIjoid2ViIiwiaWF0IjoxNTcxODA1MDcwfQ.6dLJ4aVmZ2HGrch4Vy_cLfYQg-ErkOFf_nGSxuk8UZo'

const config = require('../config/config.js').default
const express = require('express')
const bodyParser = require('body-parser')
const cookiesMiddleware = require('universal-cookie-express');


// Create express router
const router = express.Router()
// Create express instnace
const app = express()


/* REGISTER AUTORIZATION NUXT */
app.use(cookiesMiddleware())
app.use((req, res, next) => {
  config.fetch.headers.authorization = authorization

  if (typeof req.universalCookies.get('userData') != 'undefined') {
    config.fetch.headers.token = req.universalCookies.get('userData').token
  } else {
    config.fetch.headers.token = ''
  }

  next()
})

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// Public
app.use(require('./routes/public/content.js'))
app.use(require('./routes/public/category.js'))
app.use(require('./routes/public/type.js'))

app.use(require('./routes/public/comment.js'))
app.use(require('./routes/public/like.js'))
app.use(require('./routes/public/review.js'))


// address
app.use(require('./routes/public/address.js'))


// auth
app.use(require('./routes/public/auth.js'))

// bank
app.use(require('./routes/public/bank.js'))

// backend
app.use(require('./routes/member/user.js'))
app.use(require('./routes/member/content.js'))
app.use(require('./routes/member/category.js'))
app.use(require('./routes/member/comment.js'))
app.use(require('./routes/member/like.js'))
app.use(require('./routes/member/review.js'))
app.use(require('./routes/member/invoice.js'))
app.use(require('./routes/member/ticket.js'))


export default {
  path: '/api',
  handler: app
}

