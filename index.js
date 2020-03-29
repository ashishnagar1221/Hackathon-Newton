const express = require('express');

const port = process.env.PORT || 3600;

var app = express();

app.get('/', (req, res)=>{
   res.send("Hello world!");
});

app.listen(port , function(){
    console.log(`Listening at port ${port}`);
})
