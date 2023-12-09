const DetalleVentasModel = require("../models/DetalleVentasModel");

class DetalleVentasController
{
    static async indexGet(req, res)
    {
        let data = await DetalleVentasModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res){
        let id = req.params.id;
        let data = await DetalleVentasModel.consultarPorId(id);
        res.send(data);
    }
    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await DetalleVentasModel.insertar(newData);

            res.status(201)
                .header('Location', `/temas/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = DetalleVentasController;