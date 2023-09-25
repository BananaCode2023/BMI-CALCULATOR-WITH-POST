const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) =>{
  let height = parseFloat(req.body.height);
  let weight = parseFloat(req.body.weight);

  let result = weight/(height ** 2);

  if (result <= 18.5){
    res.send(`You are Under weight, your BMI is ${result}`)
  }
  else if(result >= 18.5 && result <= 24.9){
    res.send(`You are Normal weight, your BMI is ${result}`)
  }
  else if(result >= 25 && result <= 29.9){
    res.send(`You are Over weight, your BMI is ${result}`)
  }
  else if(result >= 30){
    res.send(`You are over weight, your BMI is ${result}`)
  }
  
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});