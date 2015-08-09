import React from 'react';
import mongoService from '../services/mongoService.js';
import marked from 'marked';
import StarRater from 'react-star-rating-input/index';

var Rater = StarRater.Klass;

var messages = {'react-star-rating-input': {
    clear: 'Reset',
    clearHint: 'Reset value to no stars'
}};
export default React.createClass({

    getInitialState(){
      return {};
    },

    contextTypes : {
        router: React.PropTypes.func
    },

    componentDidMount(){
        var blogId = this.context.router.getCurrentParams().entry;
        mongoService.retrieveBlog(blogId, this.blogLoaded);
    },

    blogLoaded(data){
        console.log('blog found: '+JSON.stringify(data));
        this.setState({blog: data[0]});
    },

    formatEdited(){
        var time = this.state.blog.edited;
        var dt = new Date(time.$date);
        return dt.getDate()+'.'+(dt.getMonth()+1)+'.'+dt.getFullYear();

    },

    render(){
        if (!this.state.blog){
            return <article></article>
        }
        var link = '#/blogs/edit/'+this.state.blog._id;

        return <article className="data">
                 <div className="info">
                         <h1>{this.state.blog.title}</h1>
                         <strong>author </strong>
                         <i>{this.state.blog.author}. </i>
                         <i>{this.formatEdited()}</i>
                     <div className="edit">
                        <a href={link}>Muokkaa</a>
                     </div>
                 </div>
                 <section dangerouslySetInnerHTML={{__html: marked(this.state.blog.text)}} />
                 <hr />
                 <div className="footer">Rate this blog: <Rater size={5} value={4} showClear={false}  messages={messages}   /> </div>
                 </article>

    }

});