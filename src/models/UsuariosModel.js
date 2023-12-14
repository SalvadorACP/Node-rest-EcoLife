const {connectToMysql} = require('../dbconnection');

class UsuariosModel
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db('usuarios');
        return await query;
    }
    static async consultarPorId(id)
    {
        let db = await connectToMysql();
        return await db('usuarios').where('id', id);
    }
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('usuarios').insert(datos).returning('id');
        return result[0];
    }
}

module.exports = UsuariosModel;