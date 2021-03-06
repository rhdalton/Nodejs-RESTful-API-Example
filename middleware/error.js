const winston = require('winston');

// Express Error Middleware
module.exports = function(err, req, res, next) {
    // error levels: error, warn, info, verbose, debug, silly
    winston.error(err.message, err);
    res.status(500).send('Internal server error.');
};