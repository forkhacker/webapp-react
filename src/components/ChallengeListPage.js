import React from 'react';
import ChallengeCardList from './ChallengeCardList';
import ChallengePageFilter from './ChallengePageFilter';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as challengeActions from '../actions/challengeActions'

class ChallengeListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.listChallenges();
    }

    render() {

        return (
            <div>
                <ChallengePageFilter/>
                <ChallengeCardList challenges={this.props.challenges}/>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(challengeActions, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        challenges : state.challenges,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeListPage);
