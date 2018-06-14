import React, { Component } from 'react';

class BlogTile extends Component {

    render() {
        return (
            <div>

                <div className="heading">
                    <h2 className="explore">Blog</h2>
                    <img src="img/blog.png" width="30px" height="30px"/>
                </div>

                <p>
                    Read random posts about my life, updates, and current obsessions. Warning:
                    shit may get personal.
                </p>

            </div>
        );
    }

}

export default BlogTile;
