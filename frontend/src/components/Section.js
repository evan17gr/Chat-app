import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Section = ({ title, paragraph, input, button }) => {
    const [roomName, setRoomName] = useState('');

    let history = useHistory();

    const joinRoom = (e) => {
        setRoomName(e.target.value);
    };

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
                    onChange={joinRoom}
                    type="text"
                    placeholder={input}
                />
                <button onClick={changeRoom}>{button}</button>
            </div>
        </div>
    );
};

export default Section;
