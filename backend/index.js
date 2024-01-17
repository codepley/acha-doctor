const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function(req, res) {
   res.send("Welcome to Acha Doctor")
})

app.post('/api/v1/u/login', (req, res) => {
   const {email, password} = req.body;
   // check if valid email password

   
})

app.listen(PORT, function() {
   console.log(`Running on port ${PORT}`)
})