var React = require('react');
var Home = require('./views/home.jsx')
var About = require('./views/about.jsx')

var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Link = Router.Link;
var DefaultRoute = Router.DefaultRoute;

var MyView = React.createClass({
    render: function () {
        return (
            <div>
                Example
            </div>
        );
    }
});


var App = React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    <nav>
                        <Link to="blogs">Blogs</Link>
                        <Link to="about">About Me</Link>
                    </nav>
                </header>
                <div className="content">
                    <RouteHandler />
                </div>
                <footer></footer>

            </div>
        )

    }

});
var routes = (
    <Route handler={App} path="/">
        <Route name="blogs" />
        <Route name="about" handler={About}/>
        <DefaultRoute handler={Home}/>
    </Route>
)

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});

module.exports = App;