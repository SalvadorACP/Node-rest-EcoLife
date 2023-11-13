const db = require('../dbconnection');

class MenusModel
{
    static async consultar()
    {
        let query = db('menus');
        return await query;
    }
}

module.exports = MenusModel;