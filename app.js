const express = require('express');
require('dotenv').config()
const dbConnection = require('./config/dbConfig');
const noteRouter = require('./router/notes')
const noteController = require('./controller/notes')
const bodyParser = require('body-parser')
const Notes = require('./model/note');
const viewsRouter = require('./router/viewsRoute')
// const note = require('./model/note');
const PORT = process.env.PORT
let newNote = ""

// let content = []
const app = express();
app.use((req, res, next) => {
    console.log(req.method + ":" + req.url)
    next()
})
app.set('views', 'views')
app.set('view engine', 'ejs')


//db instances
dbConnection()
app.use(express.json())
app.use(express.static('public'))
app.use('/api/v1/notes', noteRouter )
app.use(bodyParser.urlencoded({extended: true}))
// app.use('/', viewsRouter)


// app.get('/', (req, res) => {
//     res.render('home')
// })

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
})