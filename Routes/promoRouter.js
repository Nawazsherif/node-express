const express = require('express');
const bodyParser = require('body-parser');

const {checkValid} = require('../checkFinite');
var promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode =200;
    res.contentType = 'text/plain';
    next();
})
.get((req,res,next) => {
    res.end('Will send the promotions to you');
})
.post((req,res,next) => {
     if(req.body.name && req.body.description)
     res.end(`Will post the promotions with ${req.body.name} with details ${req.body.description}`);
     else
     {
        res.statusCode = 404;
        res.end('POST operation is not supported');
     }
})
.put((req,res,next) => {
    if(req.body.name && req.body.description)
    {
        res.write(`Updating the promotions \n`);
        res.end(`Will update the promotions ${req.body.name} with details ${req.body.description}`);
    }
    else
    {
       res.statusCode = 404;
       res.end('PUT operation is not supported');
    }
})
.delete((req,res,next) => {
    res.end(`Deleting the promotions`);
});

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode =200;
    res.contentType = 'text/plain';
    next();
})
.get((req,res,next) => {
    res.end(`Will send the promotions : ${req.params.promoId}`);
})
.post((req,res,next) => {
    if(req.body.name && req.body.description && checkValid(req.params.promoId))
    {
    res.end(`Will post the promotions ${req.params.promoId} with ${req.body.name} with details ${req.body.description}`);
    }
    else
    {
       res.statusCode = 404;
       res.end('POST operation is not supported');
    }    
})
.put((req,res,next) => {
    if(req.body.name && req.body.description && checkValid(req.params.promoId))
    {
        res.write(`Updating the promotions ${req.params.promoId} \n`);
        res.end(`Will update the promotions ${req.body.name} with details ${req.body.description}`);
    }
    else
    {
       res.statusCode = 404;
       res.end('PUT operation is not supported');
    }
})
.delete((req,res,next) => {
    res.end(`Deleting the promotions : ${req.params.promoId}`);
});

module.exports = promoRouter;