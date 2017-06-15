import  React from 'react';

const Alerts = () => {
    return (
        <div className="user-alert">
            <div className="notification">
                <img src={require('../../../media/notification.svg')}/>
            </div>
            <div className="message">
                <img src={require('../../../media/messages.svg')}/>
            </div>
        </div>
    );
};


export default Alerts;
