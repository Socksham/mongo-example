require("dotenv").config()
const express = require("express")
const port = process.env.PORT || 5500
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


const app = express()
app.use(cors())
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {})
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

const moviesRouter = require("./routes/movies")

app.use("/movies", moviesRouter)

app.route("/").get((req, res) => {
    res.json("Hello")
})

app.listen(port, () => {
    console.log("Listening on port: " + port)
})