import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import './Comment.css'

class CommentBox extends Component {

    constructor(props) {
        super(props);
        this.state = { comments: [] };
    }

    loadComments() {
        const data = [
            { author: "JWags", message: "What's up world!",  id: 3}
        ];

        this.setState({ comments: data });
    }

    componentDidMount() {
        this.loadComments();
    }

    render() {
        var commentList = this.state.comments.map( comment => {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.message}
                </Comment>
            );
        });

        return (
            <div className="row comments-container">
                <div className="cell">
                    <h2> Join The Discussion </h2>
                    <div className="comment-box">
                        <CommentForm />
                        <h3 className="comment-count"> {this.state.comments.length} Comments </h3>
                        <div className="comment-list">
                            { commentList }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentBox;