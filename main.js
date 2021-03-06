
const newFoodForm = document.getElementById('newFoodForm')
newFoodForm.addEventListener('submit', submitHandler);

const foodContainer = document.getElementById('food-container')

const getAllFoods = () => axios.get('http://localhost:4000/api/food').then(foodCallback).catch(errCallback);

const baseURL = 'http://localhost:4000/api/food'

const deleteFood = id => axios.delete(`${baseURL}/${id}`).then(foodCallback).catch(errCallback)


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
        caloriesPer100: calories.value,
        imageURL: imageURL.value,
        healthRating: healthRating.value,
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
    foodCard.innerHTML = `<h1>${food.name}</h1><img class="foodImage" alt="Food Image" src="${food.imageURL}"><p>Calories Per 100 Grams ${food.caloriesPer100}kc.</p><h3>${food.healthRating}</h3><button class="deleteBtn" onclick="deleteFood(${food.id})">Delete Food</button>`
    foodContainer.appendChild(foodCard)
}


function renderFoods(arr){
    foodContainer.innerHTML = '';
    for(let i =0; i<arr.length; i++){
        createFoodCard(arr[i])
    }

}

getAllFoods();