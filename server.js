const express = require('express')
const app = express()
const port = 3000
const methodOverride = require("method-override")
const pokemon = require('./models/pokemon')

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))

app.get("/", (req, res) => {
    res.render("index.ejs", {pokemon:pokemon})
})

app.get("/new", (req, res) => {
    res.render("new.ejs")
})

app.get("/:id/edit", (req, res) => {
    const { stats } = pokemon[req.params.id]
    res.render("edit.ejs", {stats, id: req.params.id})
})

app.get("/:id", (req, res) => {
    const { id, name, img, type, stats, moves, damages, misc } = pokemon[req.params.id];
    res.render("show.ejs", {id,name,img, type, stats, moves, damages, misc, index:req.params.id})
})

app.post("/", (req, res) => {
    pokemon.push(req.body)
    res.redirect("/")
})

app.put("/:id", (req, res) => {
    pokemon[req.params.id].stats = req.body
    res.redirect(`/${req.params.id}`)
})

app.listen(port, () => {
    console.log("Listening on port: " + port)
})