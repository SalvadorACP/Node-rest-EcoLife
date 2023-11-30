const db = require('../dbconnection');

class ProductosTiposModel
{
    static async consultar()
    {
        let query = db('productos_tipos');
        return await query;
    }
    static async consultarPorId(id)
    {
        return await db('productos_tipos').where('id_tipo', id);
    }
}

module.exports = ProductosTiposModel;