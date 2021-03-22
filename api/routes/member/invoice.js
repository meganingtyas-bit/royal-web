import Lib from '../../../system/lib/Lib';
import config from '../../../config/config';
const { Router } = require('express')
const router = Router()

router.get('/member/invoice/list', async (req, res) => {
  await Lib.ajax.fetch(
      'GET',
      `${config.apiUrl.member}/invoice/list`, req.query
  ).then(response => {
      res.json(response)
  }).catch(e => { })
})

router.get('/member/invoice/detail', async (req, res) => {
  await Lib.ajax.fetch(
      'GET',
      `${config.apiUrl.member}/invoice/detail`, req.query
  ).then(response => {
      res.json(response)
  }).catch(e => { })
})

router.post('/member/payment/confirmation', async (req, res) => {
  await Lib.ajax.fetch(
      'POST',
      `${config.apiUrl.member}/payment/confirmation`, req.body
  ).then(response => {
      res.json(response)
  }).catch(e => { })

})


module.exports = router
