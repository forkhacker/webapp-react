import  React from 'react';

import Alerts from './Alerts';
import User from './User';

const UserActions = ({columnClass, user}) => {
    return (
        <div className={"columns " + columnClass}>
            <div className="row align-right">
                <div className="columns shrink">
                    <Alerts />
                </div>
                <div className="columns">
                    <User user={user}/>
                </div>
            </div>
        </div>
    );
};



export default UserActions;
