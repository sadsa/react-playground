import React, {Component} from 'react';

class CommentForm extends Component {
    render() {
        return (
            <form className="comment-form" >
                <label>New comment</label>
                <div className="comment-form-fields">
                    <input placeholder="Name:" />
                    <textarea placeholder="Comment:"></textarea>
                </div>
                <p>x characters</p>
                <div className="comment-form-actions">
                    <button type="submit">
                        Post comment
                    </button>
                </div>
            </form>
        );
    }
}

export default CommentForm;