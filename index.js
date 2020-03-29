const express = require('express');
const routes = require('./routes/birth')

const port = process.env.PORT || 3600;

var app = express();

app.use('/',routes);

app.listen(port , function(){
    console.log(`Listening at port ${port}`);
})
