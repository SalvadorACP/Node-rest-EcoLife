const VentasModel = require("../models/VentasModel");

class VentasController
{
    static async indexGet(req, res)
    {
        let data = await VentasModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res){
        let id = req.params.id;
        let data =await VentasModel.consultarPorId(id);
        if (data.length > 0){
            res.send(data[0]);
            return;
        }
        res.status(404).send({error: 'Not Found'});
    }
    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await VentasModel.insertar(newData);

            res.status(201)
                .header('Location', `/temas/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = VentasController;