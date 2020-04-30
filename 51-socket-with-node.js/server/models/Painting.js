const Sequelize = require('sequelize')
const {STRING, INTEGER} = Sequelize


const seq = new Sequelize({
    dialect: "sqlite", //databse
    storage: "./database.sqlite" //file name
})


const Painting = seq.define("paintings", {
    title: {
        type: STRING
    },
    artist: {
        type: STRING
    },
    url: {
        type: STRING
    }
})

module.exports = Painting
seq.sync()
// seq.sync({ force: false})
