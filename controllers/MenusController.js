const MenusModel = require("../models/MenusModel");

class MenusController
{
    static async indexGet(req, res)
    {
        let data = await MenusModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res){
        let id = req.params.id;
        let data =await MenusModel.consultarPorId(id);
        if (data.length > 0){
            res.send(data[0]);
            return;
        }
        res.status(404).send({error: 'Not Found'});
    }
    static async indexPost(req, res)
    {
        let data = {
            'nombre': req.body.nombre
        };
        await MenusModel.insertar(data);
    }
}

module.exports = MenusController;