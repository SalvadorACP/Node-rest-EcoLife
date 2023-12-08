const {connectToMysql} = require('../dbconnection');

class DetallesPedidosModel
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db('Detalles_Pedido');
        return await query;
    }
    static async consultarPorId(id)
    {
        return await db('Detalles_Pedido').where('id_detalle', id);
    }
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Detalles_Pedido').insert(datos).returning('id_detalle');
        return result[0];
    }
}

module.exports = DetallesPedidosModel;