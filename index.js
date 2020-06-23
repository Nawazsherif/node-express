const express  = require('express'),
    http = require('http');
const dishRouter = require('./Routes/dishRouter');
const promoRouter = require('./Routes/promoRouter');
const leaderRouter = require('./Routes/leaderRouter');

const app = express();
const body_parser = require('body-parser');
const port = 3000;
const host = 'localhost';

app.use(body_parser.json());

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

app.use((req,res,next) => {
    console.log(req.body);
    res.statusCode = 200;
    res.contentType = 'text/html';
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});


const server = http.createServer(app);

server.listen(port,host, ()=>{
    console.log(`server listening on port ${port}`);
})