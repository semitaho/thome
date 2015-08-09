if (!global.Intl) {
    require('intl');
}
var React = require('react');
var insertCss = require('insert-css'),
    mongoService = require('./../services/mongoService.js'),
    Router = require('react-router'),
    Route = Router.Route,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link;

var StarRater = require('react-star-rating-input/index');
var messages = {'react-star-rating-input': {
    clear: 'Tyhjennä',
    clearHint: 'Reset value to no stars'
}};
var Rater = StarRater.Klass;
var BlogEntry = React.createClass({

    getInitialState : function(){
      return {size: 5, points: 0};
    },

    componentDidMount : function(){


    },

    render: function(){
        var id = this.props.id;
        return (
            <div>
                <h1>{id}</h1>
                <hr />
                <div><Link to="Add">Add blog</Link></div>
                <div className="blogcontent">
                <p>No minä kirjoitan ekaa blogiani tässä näin.</p>
                <p>Eikö tämä riitä, vai tarviiikko lisää</p>
                    <p>Eikö tämä riitä, vai tarviiikko lisää</p>
                    <p>Eikö tämä riitä, vai tarviiikko lisää</p>
                    <p>Eikö tämä riitä, vai tarviiikko lisää</p>
                    <p>Eikö tämä riitä, vai tarviiikko lisää</p>
                    <p>Eikö tämä riitä, vai tarviiikko lisää</p>
                    <p>Eikö tämä riitä, vai tarviiikko lisää</p>
                    <p>Eikö tämä riitä, vai tarviiikko lisää</p>
                    <p>Eikö tämä riitä, vai tarviiikko lisää</p>
                    <p>Eikö tämä riitä, vai tarviiikko lisää</p>
                    <p>Eikö tämä riitä, vai tarviiikko lisää</p>

                </div>
                <hr />
                <Rater size={this.state.size} value={this.state.points} showClear={false} onChange={this.changing} messages={messages}  />
            </div>
        )

    },

    changing: function(value){
        console.log('new value:'+value)
        this.setState({points: value});

    }
});
insertCss(StarRater.css);

module.exports = BlogEntry;