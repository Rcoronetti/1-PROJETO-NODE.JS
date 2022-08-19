import express from 'express';
import OwnersController from '../controller/OwnersController.js'
const router = express.Router()

router.get('/', OwnersController.showOwners)
router.get('/add', OwnersController.createOwners)
router.post('/add', OwnersController.createOwnersSave)


export default router