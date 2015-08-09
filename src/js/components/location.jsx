import DateUtil from '../services/dateUtil.js';
import mongoService from '../services/mongoService.js';
import React from 'react';

var Location = React.createClass({

    getInitialState: function () {
        return {selected: 0, locations: []};
    },

    componentDidMount: function () {
        mongoService.retrieveLastLocations(this.lastLocationsRetrieved);

    },

    lastLocationsRetrieved: function (data) {
        console.log('retrieved...:' + data);
        this.setState({locations: data, selected: 0});
        setInterval(this.changeSelected, 2500);
    },

    changeSelected: function () {
        var locLength = this.state.locations.length;
        var currentIndex = this.state.selected;
        currentIndex += 1;
        if (currentIndex >= locLength) {
            currentIndex = 0;
        }
        this.setState({selected: currentIndex});
    },
    render: function () {
        var locations = this.state.locations;
        var selected = this.state.selected;
        var index = 0;
        if (locations.length > 0) {
            return (
                <div id="location">
                    <p>Sijainti</p>
                    {locations.map(function (location) {
                        var keyIndex = index;
                        var nickIndex = keyIndex + '_1';
                        var locationIndex = keyIndex + '_2';
                        var clazz = 'hidden';
                        if (selected === keyIndex) {
                            clazz = 'visible';
                        }

                        index += 1;
                        return ( <p key={keyIndex} className={clazz}>
                            <span key={nickIndex}>{location.nick}</span>
                            <br/>
                            <span key={locationIndex}>{location.place}</span>
                            <br />
                            <span>{DateUtil.formatISODate(location.ts)}</span>
                        </p>
                        )
                    })}


                </div>
            )
        }
        return <div id="location"></div>

    }


});

module.exports = Location;