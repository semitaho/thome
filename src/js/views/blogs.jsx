var React = require('react');
var BlogEntry = require('../components/blogentry.jsx'),
    mongoService = require('../services/mongoService.js'),
    Link = require('react-router').Link;

export default React.createClass({

    getInitialState(){
        return {blogs: []};
    },

    componentDidMount(){
        mongoService.retrieveBlogs(this.onBlogsRetrieved);

    },

    onBlogsRetrieved(data){
        console.log('data: '+data);
        this.setState({blogs: data});

    },

    render(){
        return (
            <div className="data">{
                this.state.blogs.map(blog => {
                    var link = '#/blogs/view/'+blog._id;
                    return <p><a href={link}>{blog.title}</a> - <i><small>author {blog.author}</small></i></p>
                })
            }
            </div>
        )

    }
});
