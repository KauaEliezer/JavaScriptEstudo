const Product = require('../model/Product')

module.exports = {
    create: async (req, res) => {
        await Product.create(req.body)
        return res.redirect('/products')
    },

    list: async (_, res) => {
        const productsList =  await Product.findAll()
        //carregar os produtos
        return res.render('product/list', {productsList})
    },

    form:(_, res) => res.render('product/form'),
}