import React from 'react';
import queens from "../img/queens.jpg"


const CoachHome = () => {
    return (
        <div>
            <h1>Welcome Coach </h1>
            <img alt="queens" src={queens} className="queens"/>
        </div>
    );
}

export default CoachHome;
