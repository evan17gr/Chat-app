import React from 'react';

const LargeText = ({ text, right }) => {
    return (
        <div className="large-text">
            <h1 className={right ? 'right' : 'left'}>{text}</h1>
        </div>
    );
};

export default LargeText;
