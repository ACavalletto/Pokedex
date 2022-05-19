const express = require('express')
const app = express()
const port = 3000

const pokemon = require('./models/pokemon')

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))

app.get("/", (req, res) => {
    res.render("index.ejs", {pokemon:pokemon})
})

app.get("/:id", (req, res) => {
    res.render("show.ejs")
})



app.listen(port, () => {
    console.log("Listening on port: " + port)
})