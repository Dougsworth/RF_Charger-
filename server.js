require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


app.use(express.json())

// const voltagesRouter = require('./routes/voltages')//matches name of route folder
// app.use('/voltages', voltagesRouter)//localhost:3000/voltages

// const currentsRouter = require('./routes/currents')//matches name of route folder
// app.use('/currents', currentsRouter)//localhost:3000/currents


const datasRouter = require('./routes/Datas')//matches name of route folder
app.use('/datas', datasRouter)//localhost:3000/data


app.listen(3000, () => console.log('Server Started'))