//declare variables
const express = require("express")
const app = express()
const PORT = 8500;
const mongoose = require("mongoose");
const connectDB = require('./config/database')
require('dotenv').config({path: './config/.env'})
const TodoTask = require("./models/todotask")
const homeRoutes = require("./routes/home")
const editRoutes = require("./routes/edit")
connectDB()

//set middleware
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//Set ROUTES
app.use('/', homeRoutes)
app.use('/edit', editRoutes)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

