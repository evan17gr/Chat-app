import React from 'react';
import NavBarItem from './NavBarItem';
import '../sass/navbar.scss';
import '../sass/togglebutton.scss';

const NavBar = () => {
    return (
        <div className="navbar">
            <ul className="desktopNav">
                <NavBarItem text="Home"></NavBarItem>
                <NavBarItem text="About"></NavBarItem>
                <NavBarItem text="Contact us"></NavBarItem>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </ul>
            <ul className="mobileNav">
                <NavBarItem icon="fas fa-home"></NavBarItem>
                <NavBarItem icon="fas fa-info-circle"></NavBarItem>
                <NavBarItem icon="fas fa-address-book"></NavBarItem>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </ul>
        </div>
    );
};

export default NavBar;
