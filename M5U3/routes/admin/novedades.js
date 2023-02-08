const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {
  res.render('admin/novedades', { layout: 'admin/layout',usuario: req.session.email,title:"Tu Acuario en Casa" })
})





module.exports = router
