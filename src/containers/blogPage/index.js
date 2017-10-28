import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getPosts } from '../../config/actions.js';

class BlogPage extends Component {
    //
    // componentDidMount() {
    //     this.props.getPosts();
    // }

    render() {
        return (
            <div>
                <h1>Blog</h1>

                {/* {this.props.posts.map((post, i) => {
                    return (
                        <article key={post.sys.id}>
                            <h3>{post.fields.title}</h3>
                            <p>{post.fields.featuredImage}</p>
                            <p>{post.fields.description}</p>
                        </article>
                    )
                })} */}
            </div>
        )
    }
}

export default BlogPage;
//
// function mapStateToProps(state) {
//     return {
//         posts: state.posts.all
//     };
// }
//
//
// export default connect(mapStateToProps, { getPosts })(BlogPage);
