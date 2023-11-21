import { PencilLine } from '@phosphor-icons/react';
import './_Profile.scss';

export const Profile = () => {
    return (
        <aside>
            <img
                className="banner"
                src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className="profile">
                <img src="https://github.com/felipepinha.png" />

                <strong>Felipe Carvalho</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
};
