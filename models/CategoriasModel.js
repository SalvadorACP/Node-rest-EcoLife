const db = require('../dbconnection');

class CategoriasModel
{
    static async consultar()
    {
        let query = db('categorias');
        return await query;
    }
    static async consultarPorId(id)
    {
        return await db('categorias').where('id_categoria', id);
    }
}

module.exports = CategoriasModel;