const db = require('../dbconnection');

class ProductosModel
{
    static async consultar()
    {
        let query = db('productos');
        return await query;
    }
    static async consultarPorId(id)
    {
        return await db('productos').where('id_producto', id);
    }
}

module.exports = ProductosModel;