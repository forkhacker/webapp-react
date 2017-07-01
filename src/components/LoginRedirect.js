import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import * as url from './urlConstants';

import * as loginActions from '../actions/loginActions';

import Loader from './common/Loader';

class LoginRedirect extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.loginUser(this.props.location.query.code);
    }

    render() {
        return (
            <div>
                <Loader size="full-screen"/>
            </div>
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
        user : state.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginRedirect);
