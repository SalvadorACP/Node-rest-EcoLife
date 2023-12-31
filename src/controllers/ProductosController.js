const ProductosModel = require("../models/ProductosModel");

class ProductosController
{
    static async indexGet(req, res)
    {
        let data = await ProductosModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res){
        let id = req.params.id;
        let data = await ProductosModel.consultarPorId(id);
        res.send(data);
    }
    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await ProductosModel.insertar(newData);

            res.status(201)
                .header('Location', `/temas/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = ProductosController;