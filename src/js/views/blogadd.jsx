var React = require('react'),
    $ = require('jquery'),
    MarkdownTextarea = require('react-markdown-textarea'),
    mongoService = require('../services/mongoService.js'),
    Router = require('react-router');

var Add = React.createClass({

    getInitialState: function () {
        return {
            title: '',
            text: ''
        }

    },

    contextTypes: {
        router: React.PropTypes.func
    },

    mixins: [ Router.Navigation],

    getDefaultProps: function () {
        return {
            displayName: 'Add',
            author: 'taho'
        };
    },

    onSave: function (text) {
        console.log('on save:' + this.props.author);


    },

    componentDidMount: function () {
        var blogId = this.context.router.getCurrentParams().entry;
        if (blogId) {
            mongoService.retrieveBlog(blogId, this.blogLoaded);
        }
    },

    blogLoaded: function (data) {
        this.setState({title: data[0].title, text: data[0].text});

    },

    renderedit: function () {
        if (!this.state.title) {
            return (<div></div>);
        }
        return ( <div className="data">
            <h1>Store blog</h1>
            <hr />
            <div className="titlebox">
                <label for="title" id="titlelabel">Title</label>
                <input type="text" disabled="true" id="title" value={this.state.title} placeholder="write title"
                       onChange={this.handleTextChange}></input>
            </div>
            <MarkdownTextarea onChange={this.handleTextareaChange} onSave={this.handleSubmit}
                              saveButtonText="Store blog" placeholder='Write a new blog' initialValue={this.state.text}
                              rows="20"/>
        </div>)
    },

    render: function () {
        if (this.context.router.getCurrentParams().entry) {
            return this.renderedit();
        }
        return (
            <div className="data">
                <h1>Store blog</h1>
                <hr />
                <div className="titlebox">
                    <label for="title" id="titlelabel">Title</label>
                    <input type="text" id="title" value={this.state.title} placeholder="write title"
                           onChange={this.handleTextChange}></input>
                </div>
                <MarkdownTextarea onChange={this.handleTextareaChange} onSave={this.handleSubmit}
                                  saveButtonText="Store blog" placeholder='Write a new blog'
                                  initialValue={this.state.text} rows="20"/>
            </div>
        )

    },

    handleTextareaChange: function (text) {
        this.setState({text: text});
    },

    handleSubmit: function () {
        if (!this.state.title) {
            alert('title is empty');
            return;
        }

        if (!this.state.text) {
            alert('text is empty');
            return;
        }

        var dbObject = {
            _id: this.state.title.toLowerCase().split(' ').join('_'),
            title: this.state.title,
            author: 'taho',
            text: this.state.text,
            edited: {'$date': new Date().toISOString()}
        };
        mongoService.storeBlog(dbObject, this.onBlogStored);

    },

    onBlogStored: function (success) {
        this.transitionTo('View' ,{entry: 'hei_vaan'});

    },

    handleTextChange: function (event) {
        this.setState({title: event.target.value});
    },

    handleChange: function (event) {
    }
});
module.exports = Add;
