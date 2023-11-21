import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';
import { Profile } from './components/Profile/Profile';
import './styles/App.scss';

function App() {
    return (
        <>
            <Header />
            <div className="app">
                <Profile />

                <Post />
            </div>
        </>
    );
}

export default App;
