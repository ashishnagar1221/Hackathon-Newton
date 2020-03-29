const express = require('express');
const routes = require('./routes/birth')
const mongoose = require('mongoose');

const port = process.env.PORT || 3600;

mongoose.connect('mongodb+srv://user:user@ashish-gupgf.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true })
.then(()=> console.log('Conected to Database...'))
.catch(err =>console.log(err));

var app = express();

app.set('view engine','ejs')
app.use(express.static(__dirname + "/public"));
app.use('/',routes);

app.listen(port , function(){
    console.log(`Listening at port ${port}`);
})
