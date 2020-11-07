const express = require('express');
const bodyParser = require('body-parser');

var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all( (req, res, next) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })

    .get( (req, res, next) => {
        res.end('Will send all the dishes to you!');
    })

    .put( (req, res, next) => {
        res.statusCode = 400;
        res.end("Put request Not supported");
    })

    .post( (req, res, next) => {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .delete( (req, res, next) => {
        res.end('Deleting all dishes');
    });

dishRouter.route('/:dishId')
    .all( (req, res, next) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })

    .get( (req, res, next) => {
        res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
    })

    .put( (req, res, next) => {
        res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.end('Will update the dish: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .post( (req, res, next) => {
        res.write('Posting the dish: ' + req.params.dishId + '\n');
        res.end('Will Post the dish: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete( (req, res, next) => {
        res.end('Deleting dish: ' + req.params.dishId);
    });

// exports.router = dishRouter;
module.exports = dishRouter;