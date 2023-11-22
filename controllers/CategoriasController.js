const CategoriasModel = require("../models/CategoriasModel");

class CategoriasController
{
    static async indexGet(req, res)
    {
        let data = await CategoriasModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res){
        let id = req.params.id;
        let data = await CategoriasModel.consultarPorId(id);
        res.send(data);
    }
}

module.exports = CategoriasController;