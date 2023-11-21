import { ChangeEvent, useState } from 'react';
import { CommentField } from '../CommentField/CommentField';
import { Comment } from '../Comment/Comment';
import TeriTeri from '../../assets/teri-teri.webp';
import NahidaTeri from '../../assets/nahida-teri.webp';
import './_Post.scss';

export const Post = () => {
    const [commnets, setComments] = useState([
        {
            id: 1,
            author: 'Josephine Balsamo',
            avatar_url: NahidaTeri,
            content: 'Prefiro requeijão.',
        },
    ]);
    const [newComment, setNewComment] = useState('');

    const handleChangeNewComment = (e: ChangeEvent<HTMLInputElement>) => {
        setNewComment(e.target.value);
    };

    const handleNewCommentInvalid = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.setCustomValidity('Esse campo é obrigatório!');
    };

    return (
        <article className="post">
            <header>
                <div className="author">
                    <img src={TeriTeri} />
                    <div className="author-info">
                        <strong>Clarisse d'Étigues</strong>
                        <span className="role">CEO Agile Express</span>
                    </div>
                </div>
            </header>

            <div className="content">
                <p>Hmm... Manteiguinha, minha manteiguinha.</p>
                <p>Sem manteiga nem vale a pena comer pão.</p>

                <span>#Manteiga</span>
            </div>

            <form>
                <CommentField
                    onChange={handleChangeNewComment}
                    value={newComment}
                    onInvalid={handleNewCommentInvalid}
                />
                <button
                    className={newComment ? 'enable' : ''}
                    disabled={!newComment ? true : false}
                    type="submit"
                >
                    Comentar
                </button>
            </form>

            {commnets.map(comment => (
                <Comment comment={comment} />
            ))}
        </article>
    );
};
