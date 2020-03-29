const router = require('express').Router();
const date = require('../models/data');

//Display data
router.get('/', (req, res)=>{
    date.find({},function(err,docs){
        if(err) 
            res.json(err);
            console.log(docs)
        res.render('index');
    });
});

// Add data
router.post('/',(req,res)=>{
    console.log(req.body);
    const data = new date({
        name:req.body.name,
        date:req.body.name
    });
    try{
         data.save();
        res.redirect("/");
    }catch(err){
        res.redirect("/");
    }
});


module.exports = router;