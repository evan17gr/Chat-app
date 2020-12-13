import React from 'react';

const Section = ({ title, paragraph, input, button }) => {
    return (
        <div className="section">
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <div className="inputs">
                <input type="text" placeholder={input} />
                <button>{button}</button>
            </div>
        </div>
    );
};

export default Section;
