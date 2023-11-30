const express = require('express');
const app = express();
const puerto = 80;

const MenusController =require('./controllers/MenusController');
app.use(express.json());
app.get('/menus', MenusController.indexGet);
app.get('/menus/:id([0-9]+)', MenusController.itemGet);

const CategoriasController =require('./controllers/CategoriasController');
app.use(express.json());
app.get('/categorias', CategoriasController.indexGet);
app.get('/categorias/:id([0-9]+)', CategoriasController.itemGet);

const ProductosController =require('./controllers/ProductosController');
app.use(express.json());
app.get('/productos', ProductosController.indexGet);
app.get('/productos/:id([0-9]+)', ProductosController.itemGet);

const ProductosTiposController =require('./controllers/ProductosTiposController');
app.use(express.json());
app.get('/productos_tipos', ProductosTiposController.indexGet);
app.get('/productos_tipos/:id([0-9]+)', ProductosTiposController.itemGet);

app.get('/', function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hola mundo!');

});

app.listen(puerto, function(){
    console.log('servidor iniciado');
});

