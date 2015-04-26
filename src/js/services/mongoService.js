
var $ = require('jquery');
var MongoService = (function(){
    var API_KEY = 'eOp9LjtwzApDNb-TbPbCEZ2V74XTSwrV';
    var basePath = 'https://api.mongolab.com/api/1';

    var _retrieveLastLocation = function(success){
        var query= {nick: 'melfstro'};
        var queryUrl = basePath+'/databases/tirc/collections/location?apiKey='+API_KEY+'&q='+JSON.stringify(query);
        $.ajax({type: 'GET', url: queryUrl, success: success});

    };

    return {
        retrieveLastLocations : _retrieveLastLocation
    };
})();

module.exports = MongoService;