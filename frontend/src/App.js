import React, { useState } from 'react';
import './sass/index.scss';
import NavBar from './components/NavBar';
import NavLogo from './components/NavLogo';
import Home from './pages/Home';
import Room from './pages/Room';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

function App() {
    const [theme2, setTheme2] = useState(null);

    return (
        <Router>
            <div
                className={
                    theme2 === 'dark' ? 'dark-theme' : 'light-theme'
                }
                id="main"
            >
                <div className="wholeNav">
                    <NavLogo></NavLogo>
                    <NavBar
                        selectedTheme={(theme) => setTheme2(theme)}
                    ></NavBar>
                </div>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/:roomName" component={Room} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
