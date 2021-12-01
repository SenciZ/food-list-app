const newFoodForm = document.getElementById('newFoodForm')
newFoodForm.addEventListener('submit', submitHandler);

const foodContainer = document.getElementById('food-container')

const foodCallback = ({data: foods}) => renderFoods(foods);
const errCallback = err => console.log(err)

const createNewFood = body => axios.post('http://localhost:4000/api/food', body).then(foodCallback).catch(errCallback)

function submitHandler(e){
    e.preventDefault();
    let foodName = document.getElementById('foodName');
    let calories = document.getElementById('calories');
    let imageURL = document.getElementById('img')
    let healthRating = document.getElementById('rating')

    let foodObj = {
        name: foodName.value,
        calPerGram: calories.value,
        image: imageURL.value,
        health: healthRating.value,
    }
    console.log(foodObj)

    createNewFood(foodObj)

    foodName.value = '';
    calories.value = '';
    imageURL.value = '';
    healthRating.value = "Choose Health Level";
}

function createFoodCard(food){
    const foodCard = document.createElement('div')
    foodCard.classList.add('foodCard')
    foodCard.innerHTML = `<h1>${food.name}<h1><img alt="Food Image" src=${food.imageURL}`

    foodContainer.appendChild(foodCard)
}



function renderFoods(arr){
    foodContainer.innerHTML = '';
    for(let i =0; i<arr.length; i++){
        createFoodCard(arr[i])
    }

}