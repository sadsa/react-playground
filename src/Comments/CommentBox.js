import React, { Component } from 'react';
import CommentForm from './CommentForm';
import './Comment.css'

class CommentBox extends Component {
    render() {
        return (
            <div className="row comments-container">
                <div className="cell">
                    <h2>Join The Discussion</h2>
                    <div className="comment-box">
                        <CommentForm />
                        <h3 className="comment-count">X Comments</h3>
                        <div className="comment-list">
                            comments_go_here
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentBox;