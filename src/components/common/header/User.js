import  React from 'react';


const User = () => {
    return (
        <div className="user-info">
            <div className="image">
                <img src={require('../../../media/man.svg')}/>
            </div>
            <div className="name hide-for-medium-only">Jhon Smith</div>
            <div className="user-options">
                <img src={require('../../../media/triangle.svg')} />
            </div>
        </div>
    );
};



export default User;
