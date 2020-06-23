const express = require('express');
const bodyParser = require('body-parser');
const checkValid = require('../checkFinite');
var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode =200;
    res.contentType = 'text/plain';
    next();
})
.get((req,res,next) => {
    res.end('Will send the leaders to you');
})
.post((req,res,next) => {
    if(req.body.name && req.body.description){
        res.end(`Will post the leaders ${req.body.name} with details ${req.body.description}`);
    }
    else
    {
       res.statusCode = 404;
       res.end('POST operation is not supported');
    }
})
.put((req,res,next) => {
    if(req.body.name && req.body.description){
        res.write(`Updating the leaders \n`);
        res.end(`Will update the leaders ${req.body.name} with details ${req.body.description}`);    
    }
    else
    {
       res.statusCode = 404;
       res.end('PUT operation is not supported');
    }
})
.delete((req,res,next) => {
    res.end(`Deleting the leaders`);
});

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode =200;
    res.contentType = 'text/plain';
    next();
})
.get((req,res,next) => {
    res.end(`Will send the leaders : ${req.params.leaderId}`);
})
.post((req,res,next) => {
    if(req.body.name && req.body.description && checkValid(req.params.leaderId)){
        res.end(`Will post the leaders : ${req.params.leaderId}`);
        res.end(`Will post the leaders ${req.body.name} with details ${req.body.description}`);
    }
    else
    {
       res.statusCode = 404;
       res.end('POST operation is not supported');
    }
})
.put((req,res,next) => {
    if(req.body.name && req.body.description && checkValid(req.params.leaderId)){
        res.write(`Updating the leaders ${req.params.leaderId} \n`);
        res.end(`Will update the leaders ${req.body.name} with details ${req.body.description}`);
    }
    else
    {
       res.statusCode = 404;
       res.end('PUT operation is not supported');
    }
})
.delete((req,res,next) => {
    res.end(`Deleting the leaders : ${req.params.leaderId}`);
});

module.exports = leaderRouter;