import React from 'react';
import './sass/index.scss';
import NavBar from './components/NavBar';
import NavLogo from './components/NavLogo';
import Home from './pages/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="wholeNav">
                <NavLogo></NavLogo>
                <NavBar></NavBar>
            </div>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
