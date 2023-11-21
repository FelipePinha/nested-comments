import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import './styles/App.scss';

function App() {
    return (
        <>
            <Header />
            <div className="app">
                <Profile />

                <div>Comments</div>
            </div>
        </>
    );
}

export default App;
