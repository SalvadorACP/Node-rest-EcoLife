const DetallesPedidosModel = require("../models/DetallesPedidosModel");

class DetallesPedidosController
{
    static async indexGet(req, res)
    {
        let data = await DetallesPedidosModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res){
        let id = req.params.id;
        let data = await DetallesPedidosModel.consultarPorId(id);
        res.send(data);
    }
    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await DetallesPedidosModel.insertar(newData);

            res.status(201)
                .header('Location', `/temas/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = DetallesPedidosController;