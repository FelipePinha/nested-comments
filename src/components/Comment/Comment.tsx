import { Trash, ThumbsUp } from '@phosphor-icons/react';
import { useState } from 'react';
import './_Comment.scss';

interface Comment {
    id: number;
    author: string;
    avatar_url: string;
    content: string;
}

interface CommentProps {
    comment: Comment;
    deleteComment: (id: number) => void;
}

export const Comment = ({ comment, deleteComment }: CommentProps) => {
    const [likeCount, setLikeCount] = useState(0);

    const handleLikeComment = () => {
        setLikeCount(state => state + 1);
    };

    const handleDeleteComment = () => {
        deleteComment(comment.id);
    };

    return (
        <div className="comment">
            <img src={comment.avatar_url} />
            <div className="comment-content">
                <div className="comment-box">
                    <header>
                        <strong>{comment.author}</strong>
                        <span onClick={handleDeleteComment}>
                            <Trash size={18} />
                        </span>
                    </header>

                    <p>{comment.content}</p>
                </div>

                <footer>
                    <button className="comment-like-button" onClick={handleLikeComment}>
                        <ThumbsUp />
                        <span>{likeCount}</span>
                    </button>

                    <button className="comment-reply-button">Responder</button>
                </footer>
            </div>
        </div>
    );
};
