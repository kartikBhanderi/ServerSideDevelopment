const express = require('express');
const bodyParser = require('body-parser');

const leadersRouter = express.Router();

leadersRouter.use(bodyParser.json());

leadersRouter.route('/')
.all((req , res , next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.next();
})
.get((req , res , next) => {
    res.end('Will send all leaders to you ... ');
})
.post((req , res , next) => {
    res.end('Will add the leader :');
})
.put((req , res , next) => {
    res.statusCode = 403;
    res.end('PUT operation not defined for /leaders');
})
.delete((req , res , next) => {
    res.end('Will delete all leaders !!!');
});


leadersRouter.route('/:leaderId')
.all((req , res , next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    next();
})
.get((req , res , next) => {
    res.end('Will Give details of leader :' + req.params.leaderId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('Will post details of leader : '+ req.params.leaderId);
})
.put((req, res, next) => {
    res.write('Updating leader : ' + req.params.leaderId);
    res.end('Will update the leader : ' + req.body.name + ' description : ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting leader : ' + req.params.leaderId);
});


module.exports = leadersRouter;