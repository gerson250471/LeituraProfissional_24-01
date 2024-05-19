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
  res.render('new', { title:"Cadastro de Cliente", result:{}, action:"/new"});
});


/* POST new page. */ 
router.post('/new', async function (req, res) {
  const nome = req.body.nome  
  const idade = !req.body.idade ? null : parseInt(req.body.idade); 
  const uf =  req.body.uf  

  try {  
    await global.db.insertCliente({ nome, idade, uf }); res.redirect('/?new=true');
  } 
  catch (error) {
    res.redirect('/?erro=' + error);
  }
});

/* GET edit page. */ 
router.get('/edit/:id', async function (req, res) { 
  const id = parseInt(req.params.id); 
  try { 
    const result = await global.db.selectCliente(id); 
    res.render('new', { title: 'Edição de Cliente', result, action: '/edit/' + id }); 
  } 
  catch (error) {
     res.redirect('/?erro=' + error); 
    } 
  });



module.exports = router;
