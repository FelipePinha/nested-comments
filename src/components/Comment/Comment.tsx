import { ThumbsUp, Prohibit } from '@phosphor-icons/react';
import { useState, ChangeEvent, FormEvent } from 'react';
import { CommentField } from '../CommentField/CommentField';
import './_Comment.scss';

interface Comment {
    id: number;
    author: string;
    avatar_url: string;
    content: string;
}

interface CommentProps {
    comment: Comment;
}

export const Comment = ({ comment }: CommentProps) => {
    const [likeCount, setLikeCount] = useState(0);
    const [replyFieldIsVisible, setReplyFieldIsVisible] = useState(false);
    const [newReply, setNewReply] = useState('');
    const [replys, setReplys] = useState<Comment[]>([]);

    const handleOpenReplyField = () => {
        setReplyFieldIsVisible(state => !state);
    };

    const handleChangeNewReply = (e: ChangeEvent<HTMLInputElement>) => {
        setNewReply(e.target.value);
    };

    const handleAddReply = (e: FormEvent) => {
        e.preventDefault();

        setReplys([
            ...replys,
            {
                id: replys.length + 1,
                author: 'Felipe Carvalho',
                avatar_url: 'https://github.com/felipepinha.png',
                content: newReply,
            },
        ]);

        setNewReply('');
        setReplyFieldIsVisible(state => !state);
    };

    const handleLikeComment = () => {
        setLikeCount(state => state + 1);
    };

    return (
        <section className="comment-section">
            <div className="comment">
                <img src={comment.avatar_url} />
                <div className="comment-content">
                    <div className="comment-box">
                        <header>
                            <strong>{comment.author}</strong>
                        </header>

                        <p>{comment.content}</p>
                    </div>

                    <footer>
                        <button className="comment-like-button" onClick={handleLikeComment}>
                            <ThumbsUp />
                            <span>{likeCount}</span>
                        </button>

                        <button onClick={handleOpenReplyField} className="comment-reply-button">
                            Responder
                        </button>
                    </footer>

                    {replyFieldIsVisible && (
                        <div className="reply-content">
                            <form onSubmit={handleAddReply}>
                                <CommentField value={newReply} onChange={handleChangeNewReply} />
                                <footer className="reply-footer">
                                    <button className={newReply ? 'enable' : ''} type="submit">
                                        Responder
                                    </button>
                                    <button className="cancel-reply" onClick={handleOpenReplyField}>
                                        <Prohibit size={20} />
                                    </button>
                                </footer>
                            </form>
                        </div>
                    )}
                </div>
            </div>
            <section className="comment-replys">
                {replys.map((reply: Comment) => (
                    <Comment comment={reply} />
                ))}
            </section>
        </>
    );
};
