import React, { Component } from 'react';

class PostContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* <h5>{this.props.entry.fields.datePublished}</h5>
                <h1 className="post-title">{this.props.entry.fields.title}</h1>
                <div className="blog-card">
                    <p><img src={this.props.entry.fields.featuredImage.fields.file.url} /></p>
                    <p>{this.props.entry.fields.mainContent}</p>
                </div> */}
                Hello!
            </div>
        );
    }

}

export default PostContent;
