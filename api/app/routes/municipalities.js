/**
 * Created by jweir on 30/06/2014.
 */
var mysqlModel      = require('mysql-model');
var mysql           = require('mysql');

var config = {};
    config.host         = 'localhost';
    config.user         = 'govhack';
    config.password     = 'govhack';
    config.database     = 'govhack2014';

var MunicipalityModel = mysqlModel.createConnection(config);


// get all the bears (accessed at GET http://localhost:8080/api/municipality)
exports.list = function(req, res){
    console.log('list /municipality');
    var Municipality = new MunicipalityModel({tableName: 'Site_Municipality'});
    Municipality.find('all', {}, function(err, rows, fields) {
        if (err) res.send(err);
        res.json(rows);
    });
};

// get a single municipality (accessed at GET http://localhost:8080/api/municipality/list/:municipality_id)
exports.view = function(req, res) {
    console.log("view /municipality/list/"+req.params.municipality_id);

    /**
     * Parse values as integers for evaluation
     * @type {Number}
     */
    var nLimit   = parseInt(req.query.limit);
    var nOffset  = parseInt(req.query.offset);
    var nYear    = parseInt(req.query.year);
    var nMonth   = parseInt(req.query.month);
    var nType    = parseInt(req.query.type);

    var limit    = (typeof req.query.limit !== 'undefined' && typeof nLimit === 'number' && nLimit % 1 == 0) ? req.query.limit : 20;
    var offset   = (typeof req.query.offset !== 'undefined' && typeof nOffset === 'number' && nOffset % 1 == 0) ? req.query.offset : 0;

    /**
     * Define the intial MySQL Where statement
     * @type {string}
     */
    var SWhere = "site_municipality = "+req.params.municipality_id;

    /**
     * Now we build onto the where statement for extra fields.
     */
    // YEAR - check
    if (typeof req.query.year !== 'undefined' && typeof nYear === 'number' && nYear % 1 == 0)
        SWhere += " and Levy_return_year = '"+req.query.year+"'";

    // MONTH - check
    if (typeof req.query.month !== 'undefined' && typeof nMonth === 'number' && nMonth % 1 == 0)
        SWhere += " and Levy_return_month = '"+req.query.month+"'";

    // TYPE - check
    if (typeof req.query.type !== 'undefined' && typeof nType === 'number' && nType % 1 == 0)
        SWhere += " and Nature_of_work = '"+req.query.type+"'";


    var Municipality = new MunicipalityModel({tableName: 'VBA_DataVic_Building_Permits'});
    Municipality.find('all', {
            where: SWhere,
            limit: [offset,limit]},
        function(err, rows, fields) {
        if (err) res.send(err);
        res.json(rows);
    });
};

// get a single municipality (accessed at GET http://localhost:8080/api/municipality/:municipality_id)
exports.summary = function(req, res) {
    console.log("view /municipality/summary/"+req.params.municipality_id);

    config.multipleStatements = true;
    var connection = mysql.createConnection(config);
    /**
     * Parse values as integers for evaluation
     * @type {Number}
     */
    var nYear    = parseInt(req.query.year);
    var nMonth   = parseInt(req.query.month);



    /**
     * Define the intial MySQL Where statement
     * @type {string}
     */
    var SWhere = "site_municipality = "+req.params.municipality_id;

    /**
     * Now we build onto the where statement for extra fields.
     */
    // YEAR - check
    if (typeof req.query.year !== 'undefined' && typeof nYear === 'number' && nYear % 1 == 0)
        SWhere += " and Levy_return_year = '"+req.query.year+"'";

    connection.query(
        "select count(*) as total_permits from VBA_DataVic_Building_Permits where Levy_return_year = "+nYear+";"+
        "select SUM(Reported_Cost_of_works) as cost_reported_total from VBA_DataVic_Building_Permits where Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as owner_private from VBA_DataVic_Building_Permits where Owner_sector = 'P' and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as owner_local from VBA_DataVic_Building_Permits where Owner_sector = 'L' and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as owner_state from VBA_DataVic_Building_Permits where Owner_sector = 'S' and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as owner_commonwealth from VBA_DataVic_Building_Permits where Owner_sector = 'C' and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as nature_new from VBA_DataVic_Building_Permits where Nature_of_work = 1 and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as nature_rebuild from VBA_DataVic_Building_Permits where Nature_of_work = 2 and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as nature_extension from VBA_DataVic_Building_Permits where Nature_of_work = 3 and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as nature_alteration from VBA_DataVic_Building_Permits where Nature_of_work = 4 and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as nature_change from VBA_DataVic_Building_Permits where Nature_of_work = 5 and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as nature_demolition from VBA_DataVic_Building_Permits where Nature_of_work = 6 and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as nature_removal from VBA_DataVic_Building_Permits where Nature_of_work = 7 and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as nature_other from VBA_DataVic_Building_Permits where Nature_of_work = 8 and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as builder_registered from VBA_DataVic_Building_Permits where BASIS_OwnerBuilder = 0 and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as builder_owner from VBA_DataVic_Building_Permits where BASIS_OwnerBuilder = -1 and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as builder_owner_registered from VBA_DataVic_Building_Permits where BASIS_OwnerBuilder = 2 and Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"+
        "select count(*) as total_permits_municipality from VBA_DataVic_Building_Permits where Levy_return_year = "+nYear+" and site_municipality = "+req.params.municipality_id+";"
        ,
        function(err, result){
            if (err) res.send(err);

            var object = {};
            object.totalPermits                 = (result[0][0]).total_permits;
            object.totalPermitsMunicipality     = (result[17][0]).total_permits_municipality;
            object.totalExpenditure             = (result[1][0]).cost_reported_total;
            object.owner = {};
            object.owner.private                = (result[2][0]).owner_private;
            object.owner.local                  = (result[3][0]).owner_local;
            object.owner.state                  = (result[4][0]).owner_state;
            object.owner.commonwealth           = (result[5][0]).owner_commonwealth;
            object.nature = {};
            object.nature.new                   = (result[6][0]).nature_new;
            object.nature.rebuild               = (result[7][0]).nature_rebuild;
            object.nature.extension             = (result[8][0]).nature_extension;
            object.nature.alteration            = (result[9][0]).nature_alteration;
            object.nature.change                = (result[10][0]).nature_change;
            object.nature.demolition            = (result[11][0]).nature_demolition;
            object.nature.removal               = (result[12][0]).nature_removal;
            object.nature.other                 = (result[13][0]).nature_other;
            object.builder = {};
            object.builder.registered           = (result[14][0]).builder_registered;
            object.builder.owner                = (result[15][0]).builder_owner;
            object.builder.owner_registered     = (result[16][0]).builder_owner_registered;
                res.json(object);
    });

}