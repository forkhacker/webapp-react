import React from 'react';
import {Link} from 'react-router';

import Logo from './Logo';
import SearchBox from './SearchBox';
import UserActions from './UserActions';


class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                isLoggedIn : false,
                name: "",
                img: ""
            }
        };

        this.loginWithGithub= this.loginWithGithub.bind(this);
    }

    loginWithGithub() {
        window.addEventListener('message', (event) => {
                if (typeof event.data === 'string') {
                    window.console.log('called');
                    // auth.login(this, event.data);
                }
            }
        );
        window.open(`https://github.com/login/oauth/authorize?client_id=30c841ac632b4a6839ae&redirect_uri=http://localhost:3000/auth/github/callback&scope=user%20repo`);
    }

    render() {
        return (
            <header>
                <div className="row align-middle">

                    <Logo columnClass="shrink"/>
                    <SearchBox columnClass=""/>
                    {this.state.user.isLoggedIn && <UserActions columnClass="shrink"/>}
                    {!this.state.user.isLoggedIn &&
                    <a onClick={this.loginWithGithub} >Loing with Github</a>}

                </div>
            </header>
        );
    }
}

export default Header;
