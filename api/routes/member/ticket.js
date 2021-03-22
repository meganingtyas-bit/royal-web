import Lib from '../../../system/lib/Lib';
import config from '../../../config/config';
const { Router } = require('express')
const router = Router()

router.get('/member/event/ticket/list', async (req, res) => {
  await Lib.ajax.fetch(
      'GET',
      `${config.apiUrl.member}/event/ticket/list`, req.query
  ).then(response => {
      res.json(response)
  }).catch(e => { })
})

router.get('/member/event/ticket/detail', async (req, res) => {
  await Lib.ajax.fetch(
      'GET',
      `${config.apiUrl.member}/event/ticket/detail`, req.query
  ).then(response => {
      res.json(response)
  }).catch(e => { })
})

router.get('/member/event/ticket-booking/list', async (req, res) => {
  await Lib.ajax.fetch(
      'GET',
      `${config.apiUrl.member}/event/ticket-booking/list`, req.query
  ).then(response => {
      res.json(response)
  }).catch(e => { })
})

router.get('/member/event/ticket-booking/detail', async (req, res) => {
  await Lib.ajax.fetch(
      'GET',
      `${config.apiUrl.member}/event/ticket-booking/detail`, req.query
  ).then(response => {
      res.json(response)
  }).catch(e => { })
})


module.exports = router
