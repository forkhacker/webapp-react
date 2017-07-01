import React from 'react';

import Loader from './common/Loader';

class LoginRedirect extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const code = this.props.location.query.code;
        window.opener.postMessage(code, window.location);
        window.close();
    }

    render() {
        return (
            <div>
                <Loader size="full-screen"/>
            </div>
        );
    }
}

export default LoginRedirect;
