const express = require('express');
const bodyParser = require('body-parser');

var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode =200;
    res.contentType = 'text/plain';
    next();
})
.get((req,res,next) => {
    res.end('Will send the dishes to you');
})
.post((req,res,next) => {
    res.end(`Will post the dish with ${req.body.name}`);
})
.put((req,res,next) => {
    res.write(`Updating the dish \n`);
    res.end(`Will update the dish ${req.body.name} with details ${req.body.description}`);
})
.delete((req,res,next) => {
    res.end(`Deleting the dish`);
});

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode =200;
    res.contentType = 'text/plain';
    next();
})
.get((req,res,next) => {
    res.end(`Will send the dish : ${req.params.dishId}`);
})
.post((req,res,next) => {
    res.end(`Will post the dish : ${req.params.dishId}`);
})
.put((req,res,next) => {
    res.write(`Updating the dish ${req.params.dishId} \n`);
    res.end(`Will update the dish ${req.body.name} with details ${req.body.description}`);
})
.delete((req,res,next) => {
    res.end(`Deleting the dish : ${req.params.dishId}`);
});

module.exports = dishRouter;