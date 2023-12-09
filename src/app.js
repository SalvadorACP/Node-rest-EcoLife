const express = require('express');
const app = express();
const puerto = 80;

const DetalleVentasController =require('./controllers/DetalleVentasController');
app.use(express.json());
app.get('/detallesventas', DetalleVentasController.indexGet);
app.get('/detallesventas/:id([0-9]+)', DetalleVentasController.itemGet);
app.post('/detallesventas', DetalleVentasController.indexPost);

const VentasController =require('./controllers/VentasController');
app.use(express.json());
app.get('/ventas', VentasController.indexGet);
app.get('/ventas/:id([0-9]+)', VentasController.itemGet);
app.post('/ventas', VentasController.indexPost);

const ProductosController =require('./controllers/ProductosController');
app.use(express.json());
app.get('/productos', ProductosController.indexGet);
app.get('/productos/:id([0-9]+)', ProductosController.itemGet);
app.post('/productos', ProductosController.indexPost);

const UsuariosController =require('./controllers/UsuariosController');
app.use(express.json());
app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
app.post('/usuarios', UsuariosController.indexPost);

app.get('/', function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hola mundo!');

});

app.listen(puerto, function(){
    console.log('servidor iniciado');
});

