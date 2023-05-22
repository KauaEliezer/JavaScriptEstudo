const Distributor = require('../model/Distributor')

module.exports = {

    create: async (req, res) => {
        await Distributor.create(req.body)
        return res.redirect('/distributors')
    },
   
    list: async (_, res) => {
        const distributorList =  await Distributor.findAll()
        
        return res.render('distributor/list', {distributorList
        })
    },

    form:(_, res) => res.render('distributor/form'),
}