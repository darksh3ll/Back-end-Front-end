var express = require('express');
var router = express.Router();
const user = {
    id:1,
    email:"test@gmail.com",
    password:"1234",
    isAdmin:true,
};

/* GET users listing. */
router.post('/', function (req, res, next) {
    if((req.body.email === user.email) && (req.body.password === user.password)){
        res.json({user})
    }else {
        res.status(401).json({message:"pas authorized"})
    }
});



module.exports = router;
