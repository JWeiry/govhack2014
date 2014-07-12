// server.js

// Base setup
// ==================

// call the packages we need
var express     = require('express');
var router      = express.Router();
var app         = express();
var port        = process.env.PORT || 8080;
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
//    mongoose.connect('mongodb://localhost:27017/api');

// config
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));


// routing requirements
var bears = require('./app/routes/bears');

/*
 router.use(function(req, res, next) {
 console.log('Something is happening at '+req.path);
 next(); // make sure we go to the next routes and don't stop here
 });
 */
// we attach our routes under /api/v1
console.log('Prefixing app to /api');
app.use('/api', router);

router.get('/', function (req, res) {
    console.log("request to subspace /api");
    res.send({ message: "Hi from subspace /api"});
});


// here we have direct, root-level routing
/*
router.get('/bears', bears.list);
router.post('/bears', bears.create);
router.get('/bears/:bear_id', bears.view);
router.put('/bears/:bear_id', bears.update);
router.delete('/bears/:bear_id', bears.remove);
*/

// Start the server
app.listen(port);
console.log('Magic happens on port ' + port);