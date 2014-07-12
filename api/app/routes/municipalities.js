/**
 * Created by jweir on 30/06/2014.
 */
var mysqlModel      = require('mysql-model');

var MunicipalityModel = mysqlModel.createConnection({
    host     : 'localhost',
    user     : 'govhack',
    password : 'govhack',
    database : 'govhack2014',
});

// get all the bears (accessed at GET http://localhost:8080/api/municipality)
exports.list = function(req, res){
    console.log('list /municipality');
    var Municipality = new MunicipalityModel({tableName: 'Site_Municipality'});
    Municipality.find('all', {}, function(err, rows, fields) {
        if (err) res.send(err);
        res.json(rows);
    });
};

// get a single municipality (accessed at GET http://localhost:8080/api/municipality/:municipality_id)
exports.view = function(req, res) {
    console.log("view /municipality/"+req.params.municipality_id);
    var Municipality = new MunicipalityModel({tableName: 'VBA_DataVic_Building_Permits'});
    var limit   = (typeof req.query.limit !== 'undefined' && typeof n === 'number' && n % 1 == 0) ? req.query.limit : 20;
    var offset  = (typeof req.query.offset !== 'undefined' && typeof n === 'number' && n % 1 == 0) ? req.query.offset : 0;
    Municipality.find('all', {
            where: "site_municipality = "+req.params.municipality_id,
            limit: [offset,limit]},
        function(err, rows, fields) {
        if (err) res.send(err);
        res.json(rows);
    });
};