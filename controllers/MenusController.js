const MenusModel = require("../models/MenusModel");

class MenusController
{
    static async indexGet(req, res)
    {
        let data = await MenusModel.consultar();
        res.send(data);
    }
}

module.exports = MenusController;