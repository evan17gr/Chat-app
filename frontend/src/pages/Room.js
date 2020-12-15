import React from 'react';
import '../sass/room.scss';

const Room = () => {
    return (
        <div id="container">
            <div id="tileDiv">
                <h1>Room name</h1>
            </div>
            <div>
                <div id="left">
                    <div id="active-users"></div>
                    <div id="users"></div>
                </div>
                <div id="right">
                    <div id="messages">
                        <div id="message-div">
                            <p id="message"></p>
                        </div>
                        <p id="sent-by"></p>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Send a message"
                        ></input>
                        <button>
                            <i className="fas fa-share"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Room;
