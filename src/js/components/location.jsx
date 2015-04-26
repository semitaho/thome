var mongoService = require('./../services/mongoService.js');
var React = require('React');
var Location = React.createClass({

    componentDidMount : function(){
        mongoService.retrieveLastLocations(this.lastLocationsRetrieved);

    },

    lastLocationsRetrieved : function(data){
        console.log('retrieved...:'+data);

    },
    render: function(){
        return (
            <div id="location">
                <p>Sijainti</p>
            </div>
        )

    }


});

module.exports = Location;