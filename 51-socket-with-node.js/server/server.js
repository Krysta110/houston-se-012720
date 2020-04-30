const express = require('express')
const bodyParser = require('body-parser')
const pry = require('pryjs')
const Painting = require("./models/Painting")
const cors = require('cors')

const http = require('http')
const socket = require("socket.io")

const app = express()
app.use(bodyParser.json())
app.use(cors())

const server = http.Server(app)
const io = socket(server)

io.on('connection', socket => {
    // socket.on('random', payload => {
    //     console.log(payload)
    // })
    io.emit('random', "Hi from server!!!")

    socket.on('message', payload => {
        console.log(payload)
        io.emit('message-response', payload)
    })

    socket.on('chat', payload => {
        console.log(payload.user, payload.message)
        io.emit('chat-message', `Hi from ${payload.user} saying ${payload.message}`)
    })
})














const port = 8000
server.listen(port, () => console.log("I am listening at "+port))


app.get("/", (req,res) => {
    res.json("HI!!!")
})

// all the paintings
app.get("/paintings", (req,res) => {
    Painting.findAll()
    .then(paintings => res.json(paintings))
})

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