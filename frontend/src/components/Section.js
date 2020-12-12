import React from 'react';

const Section = ({ title, paragraph, input, button }) => {
    return (
        <div className="section">
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <input type="text" placeholder={input} />
            <button>{button}</button>
        </div>
    );
};

export default Section;
