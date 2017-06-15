import  React from 'react';
import {Link} from 'react-router';

const Logo = ({columnClass}) => {
    return (
        <div className={"column " + columnClass}>
            <Link to="/">
                <img src={require('../../../media/logo.svg')}/>
            </Link>
        </div>
    );
};



export default Logo;
