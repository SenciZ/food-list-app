const foods = require('./db.json')
let foodId = 3
module.exports = {
    getFoods: (req, res) =>{
        res.status(200).send(foods)
    },

    deleteFood: (req,res) =>{
        const {id} = req.params;
        let index = foods.findIndex(food => +food.id === +id)
        foods.splice(index, 1)
        console.log(index)
        console.log(id)
        console.log(req.params)
        res.status(200).send(foods);
    },

    updateFood: (req, res) =>{

    },

    createFood: (req, res)=>{
        const {name, imageURL, healthRating, caloriesPer100} = req.body
        let newFood = {
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