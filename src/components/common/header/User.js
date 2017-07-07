import  React from 'react';
import Proptypes from 'prop-types';

const User = ({user, showUserActions, hideUserActions, userActionsDisplay, initLogout}) => {
    return (
        <div className="user-info">
            <div className="image">
                <img src={user.pictureUrl}/>
            </div>
            <div className="name hide-for-medium-only">{user.name}</div>
            <div className="user-options" onMouseLeave={hideUserActions}>
                <img src={require('../../../media/triangle.svg')} onMouseEnter={showUserActions}/>
                {userActionsDisplay &&
                <div className="menu-card text-right">
                    <p onClick={initLogout}>Logout</p>
                </div>}
            </div>
        </div>
    );
};

User.proptypes = {
    user: Proptypes.object.isRequired,
    initLogout : Proptypes.func.isRequired,
    showUserActions: Proptypes.func.isRequired,
    hideUserActions: Proptypes.func.isRequired,
    userActionsDisplay : Proptypes.bool.isRequired
}


export default User;
