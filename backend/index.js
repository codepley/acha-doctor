const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

mongoose.connect('mongodb+srv://kushal:kushal@cluster0.xyqr1px.mongodb.net/')
.then(() => {
   console.log("DB CONNECTED!!!")
})
.catch((error) => {
   console.log("some error in db connection", error);
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
   res.send("Welcome to Acha Doctor")
})

// routes
const userRoute = require('./src/routes/user.routes.js');

app.use('/api/v1/users', userRoute)

app.listen(PORT, function() {
   console.log(`Running on port ${PORT}`)
})