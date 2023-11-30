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
}

module.exports = ProductosController;