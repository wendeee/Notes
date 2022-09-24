const express = require('express');
require('dotenv').config()
const dbConnection = require('./config/dbConfig');
const noteRouter = require('./router/notes')
const PORT = process.env.PORT

const app = express();



//db instances
dbConnection()
app.use(express.json())
app.use('/notes', noteRouter )

app.get('/', (req, res) => {
    console.log('App is running on port ')
})

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`)
})