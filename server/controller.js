const foods = require('./db.json')

module.exports = {
    getFoods: (req, res) =>{
        res.status(200).send(foods)
    },

    deleteFood: (req,res) =>{

    },

    updateFood: (req, res) =>{

    },

    createFood: (req, res)=>{
        res.status(200).send(foods)
    }
}