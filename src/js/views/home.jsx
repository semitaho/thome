var React = require('react');

var Home = React.createClass({
    render: function () {
        return (
            <div className="data">
                <img className="profile img-rounded img-responsive"
                     src="https://scontent-ams3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11010565_10153296844829481_7409414946741271402_n.jpg?oh=1d2dab934e0c3f1574e7e0314addd0aa&oe=56093FF8"/>
                <acticle className="introduction">Hi, I'm Toni and welcome to my home page. Yea, just like a home page
                    in the late of 1990's. I'm IT professional as you can see from my page.
                </acticle>
                <footer className="follow">
                    <a href="http://www.facebook.com/semitaho">
                        <img src="http://static.viewbook.com/images/social_icons/facebook_32.png"/>
                    </a>
                    <a href="http://link_to_your_linkedin_page">
                        <img src="http://static.viewbook.com/images/social_icons/linkedin_32.png"/>
                    </a>
                </footer>
            </div>
        )
    }

});

module.exports = Home;