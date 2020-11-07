var express = require('express');
var morgan = require('morgan');

var dishRouter = require('./router/dishRouter');
var promoRouter = require('./router/promoRouter');
var leaderRouter = require('./router/leaderRouter');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

// app.use('/dishes', dishRouter.router);
app.use('/dishes', dishRouter);

// app.use('/promotions', promoRouter.router);
app.use('/promotions', promoRouter);

// app.use('/leaders', leaderRouter.router);
app.use('/leaders', leaderRouter);




app.listen(port, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});