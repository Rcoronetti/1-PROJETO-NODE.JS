import express from 'express';
import PropertiesController from '../controller/PropertiesController.js'
const router = express.Router()

//rota de adição de informações das propriedades
router.get('/add', PropertiesController.createProperties)
router.get('/', PropertiesController.showProperties)

// rotas para informações passarem ao banco de dados
router.post('/add', PropertiesController.createPropertiesSave)



export default router
