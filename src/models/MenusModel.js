const db = require('../dbconnection');

class MenusModel
{
    static async consultar()
    {
        let query = db('menus');
        return await query;
    }
    static async consultarPorId(id)
    {
        return await db('menus').where('id_menu', id);
    }
    static async insertar(menu)
    {
        return await db('menus').insert(menu)
    }
}

module.exports = MenusModel;