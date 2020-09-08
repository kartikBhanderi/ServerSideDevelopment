// var express = require('express');
const router = require('express').Router();
const bodyParser = require('body-parser');
var User = require('../models/users'); 
var passport = require('passport');

// const router = express.Router();

router.use(bodyParser.json());


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/signup' , function(req , res , next) {
  console.log('doing sign up');
  User.register(new User({username : req.body.username}), req.body.password , (err , user) => {

    if(err)
    {
      res.statusCode = 500;
      res.setHeader('Content-Type','application/json');
      res.json({err : err});
    }
    else
    {
      passport.authenticate('local')(req , res , ()=>{
          res.statusCode = 200;
          res.setHeader('Content-Type','application/json');
          res.json({success : true , status : 'registration successful :) '});
      });
    }
  });
});

router.post('/login' , passport.authenticate('local') , (req , res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json({success : true , status : 'LogIn successful '});
});

router.get('/logout' , (req , res , next) => {
  if(req.session)
  {
    console.log('---------------------------Logging out');
    req.session.destroy();
    res.clearCookie('session-id1');
    //req.logOut();
    res.redirect('/');
  }
  else
  {
    console.log('----------------------------not logged in');
    var err = new Error('Not logged in');
    err.status = 403;
    return next(err);
  }
});


module.exports = router;
