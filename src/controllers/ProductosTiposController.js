const ProductosTiposModel = require("../models/ProductosTiposModel");

class ProductosTiposController
{
    static async indexGet(req, res)
    {
        let data = await ProductosTiposModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res){
        let id = req.params.id;
        let data = await ProductosTiposModel.consultarPorId(id);
        res.send(data);
    }
}

module.exports = ProductosTiposController;