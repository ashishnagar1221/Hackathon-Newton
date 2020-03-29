const router = require('express').Router();
const birthday = require('../models/data');

//Display data
router.get('/', (req, res)=>{
    birthday.find({},function(err,docs){
        if(err) 
            res.json(err);
        console.log(docs)
        res.render('index');
    });
});

// Add data
router.post('/',(req,res)=>{
    console.log(req.body);
    const data = new bithday({
        name:req.body.name,
        day:req.body.name
    });
    try{
         data.save();
        res.redirect("/");
    }catch(err){
        res.redirect("/");
    }
});


module.exports = router;