import Lib from '../../../system/lib/Lib';
import config from '../../../config/config';
const { Router } = require('express')
const router = Router()



router.get('/bank/list', async (req, res) => {
    await Lib.ajax.fetch(
        'GET',
        `${config.apiUrl.public}/bank/list`, req.query
    ).then(response => {
        res.json(response)
    }).catch(e => { })

})

router.get('/bank/list-destination', async (req, res) => {
  await Lib.ajax.fetch(
      'GET',
      `${config.apiUrl.public}/bank/list-destination`, req.query
  ).then(response => {
      res.json(response)
  }).catch(e => { })

})



module.exports = router
