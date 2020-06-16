var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('aula03', { title: 'Nova tela para a aula' , numero: '03' });
});

module.exports = router;
