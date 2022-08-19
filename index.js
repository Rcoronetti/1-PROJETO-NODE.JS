import express from 'express'
import exphbs from 'express-handlebars'
import Owners from './models/Owners.js'
import Properties from './models/Properties.js'
import propertiesRoutes from './routes/propertiesRoutes.js'
import ownersRoutes from './routes/ownersRoutes.js'

const app = express()
import conn from './db/conn.js'

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())
app.use(express.static('public'))

app.use('/properties', propertiesRoutes)
app.use('/owners', ownersRoutes)

//conexão
conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err));
