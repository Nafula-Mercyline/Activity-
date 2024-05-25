// import modules 
//building rest apis
const express = require("express");
//helps to parse the reques and create the req.body object
const bodyparser = require ("body-parser");

const app = express();
//parse requests of content-type-application/json

app.use(bodyparser.json());


// parse requests of content-type -application/json/x-www-form
app.use(bodyparser.urlencoded({extended: true}));


//simple route
app.get("/", (req, res) => {
    res.json({message:"welcome to student ms"});
});

//setting a port for our backend.
const  port = 8080;


 
app.listen(port, () => {
    console.log(`server has started on port ${port}`);
});

//businee logic sample
app.post("/sum", (req, res) => {
    const number1 = req.body.number_1;
    const number2 = req.body.number_2;
    res.json({result:`sum is ${number1 + number2}`});

     
});


const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Function to perform the calculation
function calculate(firstOperand, secondOperand, operator) {
    if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '+') {
        return firstOperand + secondOperand;
    } else {
        return 'Error: Operator must be either * or +';
    }
}

// POST endpoint to handle the calculation
app.post('/calculate', (req, res) => {
    const { firstOperand, secondOperand, operator } = req.body;

    // Validate input
    if (typeof firstOperand !== 'number' || typeof secondOperand !== 'number' || typeof operator !== 'string') {
        return res.status(400).send('Invalid input');
    }

    const result = calculate(firstOperand, secondOperand, operator);
    
    if (typeof result === 'string' && result.startsWith('Error')) {
        return res.status(400).send(result);
    }

    res.json({ result });
});











