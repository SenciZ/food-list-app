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
        const {name, imageURL, healthRating, caloriesPer100} = req.body
        const newFood = {
            name,
            caloriesPer100,
            imageURL,
            healthRating
        }
        foods.push(newFood)
        console.log(foods)
        res.status(200).send(foods)
    }
}