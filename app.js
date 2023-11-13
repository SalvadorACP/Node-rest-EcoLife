const express = require('express');
const app = express();
const puerto = 80;

const MenusController =require('./controllers/MenusController');

app.use(express.json());
app.get('/menus', MenusController.indexGet);
app.get('/', function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hola mundo!');

});

app.listen(puerto, function(){
    console.log('servidor iniciado');
});

