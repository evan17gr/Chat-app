import React from 'react';
import { useParams } from 'react-router-dom';
import '../sass/room.scss';

const Room = () => {
    let { roomName } = useParams();

    return (
        <div id="container">
            <div id="titleDiv">
                <h1>#{roomName}</h1>
            </div>
            <div id="sides">
                <div id="left">
                    <div id="active-users">
                        <h2>Active users</h2>
                    </div>
                    <div id="users">
                        <div id="user">
                            <i className="fas fa-user"></i>
                            <p>nicolas12</p>
                            <i className="fas fa-circle"></i>
                        </div>
                        <div id="user">
                            <i className="fas fa-user"></i>
                            <p>nicolas12</p>
                            <i className="fas fa-circle"></i>
                        </div>
                        <div id="user">
                            <i className="fas fa-user"></i>
                            <p>nicolas12</p>
                            <i className="fas fa-circle"></i>
                        </div>
                    </div>
                </div>
                <div id="right">
                    <div id="messages">
                        <div id="message-div">
                            <p id="message">
                                Hey how is everyone doing?
                            </p>
                        </div>
                        <p id="sent-by"></p>
                    </div>
                    <div id="send-message">
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
