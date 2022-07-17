const express = require("express")
const http = require("http")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const authRoutes = require('./routes/auth.routes')


const PORT = process.env.PORT || "5000"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/auth", authRoutes)

const server = http.createServer(app)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(PORT, () => {
            console.log("listening on port ", PORT)
        })
    }).catch(err => {
        console.log(err)
        console.log("DB connection failed")
    })