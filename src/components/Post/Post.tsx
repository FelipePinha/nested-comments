import TeriTeri from '../../assets/teri-teri.webp';
import { CommentField } from '../CommentField/CommentField';
import './_Post.scss';

export const Post = () => {
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
                <CommentField />
                <button type="submit">Comentar</button>
            </form>
        </article>
    );
};
