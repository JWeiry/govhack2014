/**
 * Created by jweir on 30/06/2014.
 */
var Bear        = require('../models/bear');

// create a bear (accessed at POST http://localhost:8080/api/bears)
exports.create = function(req, res){
    var bear = new Bear();
    bear.name = req.body.name;
    bear.save(function(err){
        if(err) {
            res.send(err);
        }
        res.json({ message: 'Bear created!' });
    })
}
// get all the bears (accessed at GET http://localhost:8080/api/bears)
exports.list = function(req, res){
    console.log('list /bears');
    Bear.find(function(err, bears){
        if (err)
            res.send(err);
        res.json(bears);
    })
};
// get a single bear (accessed at GET http://localhost:8080/api/bears/:bear_id)
exports.view = function(req, res) {
    console.log("view /bears/"+req.params.bear_id);
    Bear.findById(req.params.bear_id, function(err, bear) {
        if (err)
            res.send(err);
        res.json(bear);
    });
};
// update a single bear (accessed at PUT http://localhost:8080/api/bears/:bear_id)
exports.update = function(req, res){
    console.log("update /bears/"+req.params.bear_id);
    Bear.findById(req.params.bear_id, function(err, bear){
        if (err)
            res.send(err);

        bear.name = req.body.name

        bear.save(function(err){
            if (err)
                res.send(err);

            res.json({ message: 'Bear updated' });
        })
    })
}
// remove a single bear (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
exports.remove = function(req, res){
    Bear.remove({
            _id: req.params.bear_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        }
    )
}
exports.load = function(req, res, next){
    var id = req.params.id;
    req.user = users[id];
    if (req.user) {
        next();
    } else {
        next(new Error('cannot find user ' + id));
    }
};