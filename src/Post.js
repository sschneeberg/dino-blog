//to use Class components props are this.props
import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { body: this.props.body };
    }

    render(props) {
        const comments = this.props.comments.map((comment) => {
            return <p className="comments">{comment}</p>;
        });
        return (
            <div className="Post">
                <article className="post">
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.author}</h3>
                    <p>{this.state.body}</p>
                </article>
                <hr />
                <h3>Comments:</h3>
                {comments}
            </div>
        );
    }
}

export default Post;
