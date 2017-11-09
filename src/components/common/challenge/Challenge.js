import React from 'react';

// import ChallengeCardTech from '../challengeCard/ChallengeCardTech';

// import {Link} from 'react-router';
//


const ChallengeComp = ({challenge}) => {
    const tags = ['Electron', 'JS'];

    return (
        <div className="default-card">
            <div className="row">
                <div className="columns">
                    <h2>About the challenge</h2>
                    <span className="separator"/>
                </div>
            </div>
            <div className="row">
                <div className="columns">
                    <div className="preview" dangerouslySetInnerHTML={{__html: challenge.markdownPreview}}/>
                </div>
            </div>
        </div>
    );
};

export default ChallengeComp;
