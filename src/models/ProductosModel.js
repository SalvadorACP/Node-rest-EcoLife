const {connectToMysql} = require('../dbconnection');

class ProductosModel
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db('productos');
        return await query;
    }
    static async consultarPorId(id)
    {
        return await db('productos').where('id', id);
    }
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('productos').insert(datos).returning('id');
        return result[0];
    }
}

module.exports = ProductosModel;