const express = require('express')
const router = express.Router()
const routeFunc = require('../controllers/route.controllers')

router.get('/',routeFunc.show)

router.post('/',routeFunc.create)

router.put('/',routeFunc.update)

router.delete('/',routeFunc.delete)

module.exports = router