const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

const ctrl = require('./controller.js')

app.get('/api/food', ctrl.getFoods)
app.post('/api/food', ctrl.createFood)



app.listen(4000, ()=>{console.log("Listening on port 4000...")})