const Product = require('../model/Product')
const Distributor = require('../model/Distributor')

module.exports = {
    list: async (_, res) => {
        const productsList = await Product.findAll()
        const distributorList =  await Distributor.findAll()

        return res.render('supermercado/list', {productsList, distributorList})
    }
}