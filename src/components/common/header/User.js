import  React from 'react';


const User = ({user}) => {
    return (
        <div className="user-info">
            <div className="image">
                <img src={user.pictureUrl}/>
            </div>
            <div className="name hide-for-medium-only">{user.name}</div>
            <div className="user-options">
                <img src={require('../../../media/triangle.svg')} />
            </div>
        </div>
    );
};



export default User;
