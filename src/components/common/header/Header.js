import React from 'react';

import Logo from './Logo';
import SearchBox from './SearchBox';
import UserActions from './UserActions';
import Loader from '../Loader';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as loginActions from '../../../actions/loginActions';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.loginWithGithub= this.loginWithGithub.bind(this);
    }

    loginWithGithub() {
        const actions = this.props.actions;
        window.addEventListener('message', (event) => {
                // TODO: add non expected data handleing
                if (typeof event.data === 'string') {
                    window.console.log('called');
                    actions.loginUser(event.data);
                }
            }
        );
        window.open(`https://github.com/login/oauth/authorize?client_id=30c841ac632b4a6839ae&redirect_uri=http://localhost:3000/auth/github/callback&scope=user%20repo`);
    }

    render() {
        return (
            <header>
                <div className="row align-middle">
                {this.props.loader && <Loader size="full-screen"/>}
                <Logo columnClass="shrink"/>
                <SearchBox columnClass=""/>
                {this.props.user.isLoggedIn && <UserActions user = {this.props.user} columnClass="shrink"/>}
                {!this.props.user.isLoggedIn &&
                <a onClick={this.loginWithGithub} >Loing with Github</a>}
                </div>
            </header>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

function mapStateToProps(state) {
    // debugger
    return {
        user : state.login,
        loader : state.loader
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
