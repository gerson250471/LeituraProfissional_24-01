var express = require('express');
var router = express.Router();

/* GET home page. */ 
router.get('/', async function (req, res) { 
  try {
    const results = await global.db.selectClientes(); 
    console.log(results); 
    res.render('index', { results }); 
  } 
  catch (error) { 
    res.redirect('/?erro=' + error); 
  } 
});

/* Get new page */
router.get('/new',function(req,res,next) {
  res.render('new', { title:"Cadastro de Cliente", action:"/new"});
});

/* POST new page. */
router.post('/new', function(req, res, next) {
   //futuramente vamos salvar o cliente aqui
   res.redirect('/?new=true');
  });

module.exports = router;
