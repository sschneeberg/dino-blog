//to use Class components props are this.props
import React, { Component } from 'react';
import './App.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { body: this.props.body, show: 'show' };
    }

    edit(evt) {
        let newBody = evt.target[0].value;
        this.setState({ body: newBody });
    }

    show() {
        if (this.state.show === '') {
            this.setState({ show: 'show' });
        } else {
            this.setState({ show: '' });
        }
    }

    render() {
        const comments = this.props.comments.map((comment) => {
            return <p className="comments">{comment}</p>;
        });
        return (
            <div className="Post">
                <article className="post">
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.author}</h3>
                    <p>{this.state.body}</p>
                    <button
                        onClick={() => {
                            this.show();
                        }}>
                        edit
                    </button>
                    <form
                        className={this.state.show}
                        onSubmit={(e) => {
                            e.preventDefault();
                            this.edit(e);
                            this.show();
                        }}>
                        <input type="text" />
                        <button type="submit">SAVE</button>
                    </form>
                </article>
                <hr />
                <h3>Comments:</h3>
                {comments}
            </div>
        );
    }
}

export default Post;
