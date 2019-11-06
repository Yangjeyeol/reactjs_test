import React from 'react';
import './AppTemplate.css';

const AppTemplate = ({ counter, todos }) => {
    return (
        <div>
            <div className="half left">
                {counter}
            </div>
            <div className="half right">
                {todos}
            </div>
        </div>
    )
}

export default AppTemplate;