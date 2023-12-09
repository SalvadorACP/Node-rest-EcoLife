const {connectToMysql} = require('../dbconnection');

class VentasModel
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db('ventas');
        return await query;
    }
    static async consultarPorId(id)
    {
        let db = await connectToMysql;
        return await db('ventas').where('id', id);
    }
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('ventas').insert(datos).returning('id');
        return result[0];
    }
}

module.exports = VentasModel;