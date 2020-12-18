import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Section = ({ title, paragraph, input, button, input2 }) => {
    const [roomName, setRoomName] = useState('');
    // const [displayName, setDisplayName] = useState('');

    let history = useHistory();

    const getRoomName = (e) => {
        setRoomName(e.target.value);
    };

    // const getDisplayName = (e) => {
    //     setDisplayName(e.target.value);
    // };

    const changeRoom = (e) => {
        e.preventDefault();
        history.push(`/${roomName}`);
    };

    return (
        <div className="section">
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <div className="inputs">
                <input
                    // onChange={getDisplayName}
                    type="text"
                    placeholder={input}
                />
                <input
                    onChange={getRoomName}
                    type="text"
                    placeholder={input2}
                />
                <button onClick={changeRoom}>{button}</button>
            </div>
        </div>
    );
};

export default Section;
