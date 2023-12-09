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
        return await db('usuarios').where('id_usuario', id);
    }
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('usuarios').insert(datos).returning('id_usuario');
        return result[0];
    }
}

module.exports = UsuariosModel;