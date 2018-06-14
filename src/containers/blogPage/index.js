import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PostContent from './components/postContent.js';

const contentful = require('contentful')
const client = contentful.createClient({
    space: '9b8utgjydzp6',
    accessToken: 'dea0eef068c5f0fbfdfcd4ff955a3850e10603aba539250d2b1b332dac8f6d66'
})

class BlogPage extends Component {
    constructor() {
        super();
        this.state = {
            entries: []
        }
        this.createPermalink = this.createPermalink.bind(this);
    }

    createPermalink(entry) {
    }

    render() {
        return(
            <div className="main-content">
                {Object.keys(this.state.entries).map((item, i) => {
                    var paragraphs =  this.state.entries[item].fields.mainContent.split("\n").join('\n');
                    // this.createPermalink(this.state.entries[item]);
                    return (
                        <div key={i}>
                            <h5>{this.state.entries[item].fields.datePublished}</h5>
                            <h1 className="post-title"><a href={'/blog/post/' + this.state.entries[item].sys.id}>{this.state.entries[item].fields.title}</a></h1>
                            <div className="blog-card">
                                <p><img src={this.state.entries[item].fields.featuredImage.fields.file.url} /></p>
                                <p>{this.state.entries[item].fields.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BlogPage;
