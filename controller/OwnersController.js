import Owners from "../models/Owners.js";

export default class OwnersController {
    static async createOwners(req, res) {
        res.render('owners/create')
    }

    static async showOwners(req, res) {
        res.render('owners/all')
    }


    static async createOwnersSave(req, res) {
        const owners = {
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            emai: req.body.emai,
        }
        await Owners.create(owners)
            .then(res.redirect('/owners'))
            .catch((err) => console.log(err))
    }




}