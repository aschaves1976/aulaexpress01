var express = require('express');
var router = express.Router();

/* GET Products Page. */
router.get('/', function(req, res, next) {
  if(!global.products) global.products = []
  res.render('list-prod', { title: 'Listagem de Produtos', 
                          products: global.products 
                        }
            );
});

module.exports = router;
