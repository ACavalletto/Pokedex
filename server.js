const express = require('express')
const app = express()
const port = 3000
const methodOverride = require("method-override")
const morgan = require('morgan')
const pokemon = require('./models/pokemon')

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
// app.use(morgan('dev'))
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {pokemon:pokemon})
})

app.get("/show", (req, res) => {
    res.send(pokemon)
})

app.get("/new", (req, res) => {
    res.render("new.ejs")
})

app.get("/:id/edit", (req, res) => {
    const { stats} = pokemon[req.params.id]
    res.render("edit.ejs", {stats, id: req.params.id})
})

app.get("/:index", (req, res) => {
    const { id, name, img, type, stats, moves, damages, misc } = pokemon[parseInt(req.params.index)-1];
    res.render("show.ejs", {id, name, img, type, stats, index:req.params.index})
})

app.delete("/:index", (req, res) => {
    pokemon.splice(req.params.index, 1)
    res.redirect('/')
})


app.post("/", (req, res) => {
    const { id, name, img, type, hp, attack, defense, spattack, spdefense, speed } = req.body
    let stats = {hp, attack, defense, spattack, spdefense, speed}
    let newPokemon = {id, name, img, type, stats}
    pokemon.push(newPokemon)
    res.redirect("/")
})

app.put("/:index", (req, res) => {
    const {hp, attack, defense, spattack, spdefense, speed} = req.body
    pokemon[req.params.index-1].stats = {hp, attack, defense, spattack, spdefense, speed}
    res.redirect(`/${req.params.index}`)
})

app.listen(port, () => {
    console.log("Listening on port: " + port)
})

module.exports = app;