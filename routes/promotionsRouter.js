const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all((req , res , next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    next();
})
.get((req , res , next) => {
    res.end('Will send all promotions to you ... ');
})
.post((req , res , next) => {
    res.end('Will add the promotions :' + req.body.name + ' with description : ' + req.body.description);
})
.put((req , res , next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req , res , next) => {
    res.end('Will delete all promotions !!!');
});

promotionRouter.route('/:promotionId')
.all((req , res , next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    next();
})
.get((req , res , next) => {
    res.end('Will promote the dish :' + req.params.promotionId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('Will post details of promotions for dish : '+ req.params.promotionId);
})
.put((req, res, next) => {
    res.write('Updating promotion : ' + req.params.promotionId);
    res.end('Will update the Promotion : ' + req.body.name + " with description : " + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting promotion : ' + req.params.promotionId);
});

module.exports = promotionRouter;