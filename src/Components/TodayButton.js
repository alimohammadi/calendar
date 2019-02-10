import React from 'react';

const TodayButton=({ onClick, children }) => {

    return <button className="btn btn-block btn-primary" onClick={onClick} id="getToday">{children}</button>;
}

export default TodayButton;