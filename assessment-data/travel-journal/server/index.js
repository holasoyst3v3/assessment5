require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed, getCountries, getCities, createCity, deleteCity} = require('./controller')
const path = require('path');
app.use(express.json())
app.use(cors())

app.use(express.static('public'))

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__diirname, '../public/index.html'))
// })
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__diirname, '../public/index.css'))
// })
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__diirname, '../public/index.js'))
// })

// DEV
app.post('/seed', seed)

// COUNTRIES
app.get('/countries', getCountries)

// CITIES
app.post('/cities', createCity)
app.get('/cities', getCities)
app.delete('/cities/:id', deleteCity)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))