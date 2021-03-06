import React, { useState, useEffect } from 'react';
import NavBarItem from './NavBarItem';
import '../sass/navbar.scss';
import '../sass/togglebutton.scss';

const NavBar = ({ selectedTheme }) => {
    const [theme, setTheme] = useState('dark');

    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    useEffect(() => {
        selectedTheme(theme);
    }, [theme]);

    return (
        <div className="navbar">
            <ul className="desktopNav">
                <NavBarItem text="Home"></NavBarItem>
                <NavBarItem text="About"></NavBarItem>
                <NavBarItem text="Contact us"></NavBarItem>
                <label className="switch">
                    <input type="checkbox" onClick={changeTheme} />
                    <span className="slider round"></span>
                </label>
            </ul>
            <ul className="mobileNav">
                <NavBarItem icon="fas fa-home"></NavBarItem>
                <NavBarItem icon="fas fa-info-circle"></NavBarItem>
                <NavBarItem icon="fas fa-address-book"></NavBarItem>
                <label className="switch">
                    <input type="checkbox" onClick={changeTheme} />
                    <span className="slider round"></span>
                </label>
            </ul>
        </div>
    );
};

export default NavBar;
