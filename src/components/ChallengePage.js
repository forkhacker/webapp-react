import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as challengeActions from '../actions/challengeActions'

import ChallengeCardTech from './common/challengeCard/ChallengeCard';
import ChallengeComp from './common/challenge/Challenge';
import Comments from './Comments';

// const getChallengeLang = (challenge) => {
//     const tags = [...challenge.languages, ...challenge.frameworks, ...challenge.tags]
//     return tags.map((language,i) => {
//         return (
//             <ChallengeCardTech key={i} language={language} difficulty={challenge.difficulty}/>
//         );
//     });
// };
const getChallengeTags = (tags) => {
    if(!tags) return;
    return tags.map((language, i) => {
        return (
            <ChallengeCardTech key={i} language={language} difficulty={'easy-hollow'}/>
        );
    });
};

class ChallengePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.getChallenge(this.props.params.id);
    }

    render() {

        const challengeTags = getChallengeTags(this.props.challenge.tags);
        // const languangeList = getChallengeLang(challenge);
        return (
            <section className="challenge-page">
                <a className="row align-middle back-to-challenge">
                    <img className="columns shrink" src={require('../media/back-arrow.svg')}/>
                    <h4 className="columns shrink">Back to Challenges</h4>
                </a>

                <div className="row header">
                    <div className="columns">
                        <div className="default-card">
                            <div className="row">
                                <div className="columns small-12 medium-10">
                                    <h1>A way to cancel app.relaunch</h1>
                                    {challengeTags}
                                </div>
                                <div className="columns small-12 medium-2 text-right">
                                    <button className="easy button-primary">Start</button>
                                    <h4 className="time-head">Ending In</h4>
                                    <h4 className="easy-hollow time">22H : 50M</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="columns large-8 about-challenge">
                        <ChallengeComp challenge={this.props.challenge}/>
                    </div>

                    <div className="columns large-4 about-repo">
                        <div className="default-card">
                            <section>
                                <div className="row">
                                    <div className="columns">
                                        <h2>About Repository</h2>
                                        <span className="separator"/>
                                    </div>
                                </div>

                                <div className="row repo-info">
                                    <div className="columns shrink">
                                        <img src={require('../media/electron.svg')}/>
                                    </div>
                                    <div className="columns">
                                        <h2 className="head">Electron.js</h2>
                                        <p>electron/electron</p>
                                    </div>
                                </div>
                                <div className="row button-set">
                                    <div className="columns shrink">
                                        <img src={require('../media/electron.svg')} style={{opacity: 0}}/>
                                    </div>
                                    <div className="columns">
                                        <button className="button-primary button-hollow">View All</button>
                                        <button className="button-primary button-hollow">Follow</button>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className="row">
                                    <div className="columns">
                                        <h2>About Mentor</h2>
                                        <span className="separator"/>
                                    </div>
                                </div>

                                <div className="row repo-info">
                                    <div className="columns shrink">
                                        <img src={require('../media/man.svg')}/>
                                    </div>
                                    <div className="columns">
                                        <h2 className="head">James Blunt</h2>
                                        <p>@jamesblunt</p>
                                    </div>
                                </div>
                                <div className="row button-set">
                                    <div className="columns shrink">
                                        <img src={require('../media/man.svg')} style={{opacity: 0}}/>
                                    </div>
                                    <div className="columns">
                                        <button className="button-primary button-hollow">View All</button>
                                        <button className="button-primary button-hollow">Follow</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="comments-section">

                    <div className="row comments-head">
                        <div className="columns">
                            <h1>Comments</h1>
                            <h3>+ Add a comment</h3>
                        </div>
                    </div>

                    <Comments/>
                </div>

            </section>
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
        challenge : state.challenge.current,
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ChallengePage);
