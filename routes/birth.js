const router = require('express').Router();
const birthday = require('../models/data');

//Display data
router.get('/', (req, res)=>{
    birthday.find({},function(err,docs){
        if(err) 
            res.json(err);
        console.log(docs)
        res.render('index',{birthday:docs});
    });
});

// Add data
router.post('/',(req,res)=>{
    console.log(req.body);
    const data = new birthday({
        name:req.body.name,
        day:req.body.day
    });
    console.log(data)
    try{
         data.save();
        res.redirect("/");
    }catch(err){
        res.redirect("/");
    }
});


module.exports = router;