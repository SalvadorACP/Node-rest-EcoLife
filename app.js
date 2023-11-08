const http = require('http');

const puerto = 80;

//callback
const servidor = http.createServer(function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo!');

});

servidor.listen(puerto, function(){
    console.log('servidor iniciado');
});

