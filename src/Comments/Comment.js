import React, {Component} from 'react';

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <img role="presentation"/>
                <p className="comment-header">{this.props.author}</p>
                <p className="comment-body">{this.props.children.toString()}</p>
                <div className="comment-actions">
                    actions
                </div>
            </div>
        );
    }
}

export default Comment;