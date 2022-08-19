import Properties from "../models/Properties.js";

export default class PropertiesController {
    static async createProperties(req, res) {
        res.render('properties/create')
    }

    static async showProperties(req, res) {
        res.render('properties/all')

    }

    static async createPropertiesSave(req, res) {
        const properties = {
            name: req.body.name,
            descripition: req.body.descripition,
            address: req.body.address,
            availability: req.body.availability,
        }
        await Properties.create(properties)
            .then(res.redirect('/properties'))
            .catch((err) => console.log(err))
    }
}