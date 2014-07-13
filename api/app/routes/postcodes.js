/**
 * Created by jweir on 30/06/2014.
 */
var mysqlModel      = require('mysql-model');

var PostcodeModel = mysqlModel.createConnection({
    host     : 'localhost',
    user     : 'govhack',
    password : 'govhack',
    database : 'govhack2014',
});

// get a single Postcode (accessed at GET http://localhost:8080/api/postcode/:postcode)
exports.view = function(req, res) {
    console.log("view /postcode/"+req.params.postcode);
    console.log(typeof req.query.limit);

    /**
     * Parse values as integers for evaluation
     * @type {Number}
     */
    var nYear       = parseInt(req.query.year);
    var nMonth      = parseInt(req.query.month);
    var nLimit      = parseInt(req.query.limit);
    var nOffset     = parseInt(req.query.offset);

    var limit   = (typeof req.query.limit !== 'undefined' && typeof nLimit === 'number' && nLimit % 1 == 0) ? req.query.limit : 20;
    var offset  = (typeof req.query.offset !== 'undefined' && typeof nOffset === 'number' && nOffset % 1 == 0) ? req.query.offset : 0;

    /**
     * Define the intial MySQL Where statement
     * @type {string}
     */
    var SWhere = "site_pcode = '"+req.params.postcode+"'";

    /**
     * Now we build onto the where statement for extra fields.
     */
    // YEAR - check
    if (typeof req.query.year !== 'undefined' && typeof nYear === 'number' && nYear % 1 == 0)
        SWhere += " and Levy_return_year = '"+req.query.year+"'";

    // MONTH - check
    if (typeof req.query.month !== 'undefined' && typeof nMonth === 'number' && nMonth % 1 == 0)
        SWhere += " and Levy_return_month = '"+req.query.month+"'";

    var Postcode = new PostcodeModel({tableName: 'VBA_DataVic_Building_Permits'});
    Postcode.find('all', {
            where: SWhere,
            limit: [offset,limit]},
        function(err, rows, fields) {
        if (err) res.send(err);
        res.json(rows);
    });
};