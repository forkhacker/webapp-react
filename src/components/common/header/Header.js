import React from 'react';

import Logo from './Logo';
import SearchBox from './SearchBox';
import UserActions from './UserActions';
import Loader from '../Loader';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../../actions/loginActions';
import {REDIRECT_URL, GITHUB_CLIENT_ID} from '../../../api/constants.js';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userActionsDisplay: false
        };

        this.loginWithGithub = this.loginWithGithub.bind(this);
        this.logoutUser = this.logoutUser.bind(this);

        this.hideUserActions = this.hideUserActions.bind(this);
        this.showUserActions = this.showUserActions.bind(this);
    }

    loginWithGithub() {
        window.addEventListener('message', (event) => {
                // TODO: add non expected data handleing
                if (typeof event.data === 'string') {
                    window.console.log('called');
                    this.props.actions.loginUser(event.data);
                }
            }
        );
        window.open(`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URL}`);
    }

    logoutUser() {
        this.props.actions.logoutUser();
    }

    hideUserActions() {
        this.setState({
            userActionsDisplay: false
        });
    }

    showUserActions() {
        this.setState({
            userActionsDisplay: true
        });
    }

    render() {
        console.log('Header Rendered');
        return (
            <header>
                <div className="row align-middle">
                    {this.props.loader && <Loader size="full-screen"/>}
                    <Logo columnClass="shrink"/>
                    <SearchBox columnClass=""/>
                    {this.props.user.isLoggedIn &&
                    <UserActions user={this.props.user}
                                 showUserActions={this.showUserActions}
                                 hideUserActions={this.hideUserActions}
                                 userActionsDisplay = {this.state.userActionsDisplay}
                                 initLogout = {this.logoutUser}
                                 columnClass="shrink"/>}
                    {!this.props.user.isLoggedIn &&
                    <a onClick={this.loginWithGithub}>Login with Github</a>}
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
    return {
        user: state.login,
        loader: state.loader
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
