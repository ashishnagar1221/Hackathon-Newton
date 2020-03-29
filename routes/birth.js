const router = require('express').Router();


router.get('/', (req, res)=>{
    res.Render('index');
 });


module.exports = router;