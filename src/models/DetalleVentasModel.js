const {connectToMysql} = require('../dbconnection');

class DetalleVentasModel
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db('detalle_ventas');
        return await query;
    }
    static async consultarPorId(id)
    {
        return await db('detalle_ventas').where('id', id);
    }
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('detalle_ventas').insert(datos).returning('id');
        return result[0];
    }
}

module.exports = DetalleVentasModel;