const {connectToMysql} = require('../dbconnection');

class PedidosModel
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db('Pedidos');
        return await query;
    }
    static async consultarPorId(id)
    {
        let db = await connectToMysql;
        return await db('Pedidos').where('id_pedido', id);
    }
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Pedidos').insert(datos).returning('id_pedido');
        return result[0];
    }
}

module.exports = PedidosModel;