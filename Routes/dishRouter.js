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
    res.end(`Will update the dish with ${req.body.name}`);
});

module.exports = dishRouter;