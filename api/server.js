// server.js

// Base setup
// ==================

// call the packages we need
var express     = require('express');
var router      = express.Router();
var app         = express();
var port        = process.env.PORT || 8000;
var bodyParser  = require('body-parser');

// config
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));




// routing requirements
var municipalities = require('./app/routes/municipalities');

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

router.get('/municipality', municipalities.list);
//router.get('/suburb',       suburbs.list);
//router.get('/postcode',     postcodes.list);

router.get('/municipality/:municipality_id', municipalities.view);
//router.get('/suburb/:suburb',                suburbs.view);
//router.get('/postcode/:postcode',            postcodes.view);


// Start the server
app.listen(port);
console.log('Magic happens on port ' + port);