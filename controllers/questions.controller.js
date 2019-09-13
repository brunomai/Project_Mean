var express = require('express');
var router = express.Router();
var questionService = require('services/question.service');
var config = require('config.json');

// router.get('/getAll', function (req, res) {
//     res.render('register');
// });

router.post('/create', registerQuestion);

module.exports = router;

function registerQuestion(req,res){
    questionService.create(req.body)
    .then(function(){

    })
    // .catch(function(err))
    // {
    //         //fsdfsf
    // }
}


