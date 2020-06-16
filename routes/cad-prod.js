var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cad-prod', { title: 'Cadastrar Produtos' } );
});

/* POST Cadastrar Produtos. */
router.post('/', function(req, res, next) {
  global.products.push({item: req.body.item,
                      descricao: req.body.descricao,
                      preco: req.body.preco
})
  res.redirect('/list-prod')
});

module.exports = router;
