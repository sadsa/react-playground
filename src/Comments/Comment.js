import React, {Component} from 'react';

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <img />
                <p className="comment-header">Author</p>
                <p className="comment-body">Message</p>
                <div className="comment-actions">
                    actions
                </div>
            </div>
        );
    }
}

export default Comment;