import React from 'react';
import Proptypes from 'prop-types';

import Alerts from './Alerts';
import User from './User';

const UserActions = ({columnClass, user, showUserActions, hideUserActions, userActionsDisplay, initLogout}) => {
    return (
        <div className={"columns " + columnClass}>
            <div className="row align-right">
                <div className="columns shrink">
                    <Alerts />
                </div>
                <div className="columns">
                    <User user={user}
                          showUserActions={showUserActions}
                          hideUserActions={hideUserActions}
                          userActionsDisplay={userActionsDisplay}
                          initLogout={initLogout}
                    />
                </div>
            </div>
        </div>
    );
};

UserActions.proptypes = {
    columnClass: Proptypes.string.isRequired,
    user: Proptypes.object.isRequired,
    showUserActions: Proptypes.func.isRequired,
    hideUserActions: Proptypes.func.isRequired,
    userActionsDisplay: Proptypes.bool.isRequired
};


export default UserActions;
