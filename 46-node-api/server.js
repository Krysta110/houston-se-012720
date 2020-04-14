const express = require('express')
const bodyParser = require('body-parser')
const pry = require('pryjs')
const Painting = require("./models/Painting")
const cors = require('cors')


const app = express()
app.use(bodyParser.json()) //take body key of request
app.use(cors())

// Painting.hasOne(Artist)
// Artist.hasMany(Painting)

const port = 8000
app.listen(port, () => console.log("I am listening at "+port))


app.get("/home", (req,res) => {
    res.json("HI!!!")
})

// all the paintings
app.get("/paintings", (req,res) => {
    Painting.findAll()
    .then(paintings => res.json(paintings))
})

//show single painting
// app.get("/paintings/:id", (req,res) => {
//     // eval(pry.it)
//     Painting.findByPk(req.params.id)
//     .then(painting => res.json(painting))
// })

app.get("/paintings/:id", async (req,res) => {
  
    painting = await Painting.findByPk(req.params.id)
    res.json(painting)
})

//create a new painting
app.post("/paintings", async (req,res) => {
//   eval(pry.it)
    painting = await Painting.create(req.body)
    res.json(painting)
})

// updating a paitning
app.patch("/paintings/:id", async (req,res) => {
    painting = await Painting.findByPk(req.params.id)
    await painting.update(req.body)
    res.json(painting)
})

//delete a painting
app.delete("/paintings/:id", async (req,res) => {
    painting = await Painting.findByPk(req.params.id)
    painting.destroy()
    res.json("deleted!!")
})