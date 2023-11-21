import './_CommentField.scss';

export const CommentField = ({ ...props }) => {
    return (
        <textarea {...props} className="comment-area" placeholder="Deixe um comentário" required />
    );
};
