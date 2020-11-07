var express = require('express');
var bodyParser = require('body-parser');

var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all( (req, res, next) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })

    .get( (req, res, next) => {
        res.end('Will send all the leaders to you!');
    })

    .post( (req, res, next) => {
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .put( (req, res, next) => {
        res.statusCode = 400;
        res.end("Put request Not supported");
    })

    .delete( (req, res, next) => {
        res.end('Deleting all leaders');
    });

leaderRouter.route('/:leaderId')
    .all( (req, res, next) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })

    .get( (req, res, next) => {
        res.end('Will send details of the leader: ' + req.params.leaderId + ' to you!');
    })

    .put( (req, res, next) => {
        res.write('Updating the leader: ' + req.params.leaderId + '\n');
        res.end('Will update the leader: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .post( (req, res, next) => {
        res.write('Posting the leader: ' + req.params.leaderId + '\n');
        res.end('Will Post the leader: ' + req.body.name +
            ' with details: ' + req.body.description);
    })
    

    .delete( (req, res, next) => {
        res.end('Deleting leader: ' + req.params.leaderId);
    });

// exports.router = leaderRouter;
module.exports = leaderRouter;