var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cad-car', { title: 'Aula03 - Cadastrar Carros' } );
});

/* GET Cadastrar Veiculos. */
router.post('/', function(req, res, next) {
  global.carros.push({marca: req.body.marca,
                      modelo: req.body.modelo,
                      ano: req.body.ano
})
  res.redirect('/list-car')
});

module.exports = router;
