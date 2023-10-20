var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hola mundo:c', nombre: 'Andrea', apellido: 'Gómez', cedula: '30589661', seccion: '3' });
});

module.exports = router;