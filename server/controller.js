const foods = require('./db.json')
const foodId = 3
module.exports = {
    getFoods: (req, res) =>{
        res.status(200).send(foods)
    },

    deleteFood: (req,res) =>{
        const {id} = req.params
        const index = foods.findIndex(food => +food.id === +id)
        foods.splice(index, 1)
        res.status(200).send(foods);
    },

    updateFood: (req, res) =>{

    },

    createFood: (req, res)=>{
        const {name, imageURL, healthRating, caloriesPer100} = req.body
        const newFood = {
            id: foodId,
            name,
            caloriesPer100,
            imageURL,
            healthRating
        }
        foodId++;
        foods.push(newFood)
        console.log(foods)
        res.status(200).send(foods)
    }
}