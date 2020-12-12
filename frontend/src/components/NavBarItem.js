import React from 'react';

const NavBarItem = ({ text, icon }) => {
    return (
        <li>
            <a className="link">
                {text ? text : <i className={icon}></i>}
            </a>
        </li>
    );
};

export default NavBarItem;
