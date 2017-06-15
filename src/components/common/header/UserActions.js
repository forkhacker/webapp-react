import  React from 'react';
import {Link} from 'react-router';

import Alerts from './Alerts';
import User from './User';

const UserActions = ({columnClass}) => {
    return (
        <div className={"columns " + columnClass}>
            <div className="row align-right">
                <div className="columns shrink">
                    <Alerts />
                </div>
                <div className="columns">
                    <User />
                </div>
            </div>
        </div>
    );
};



export default UserActions;
