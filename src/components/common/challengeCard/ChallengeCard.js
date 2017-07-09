import React from 'react';
import ChallengeCardLang from './ChallengeCardTech';
import {Link} from 'react-router';

const getChallengeLang = (challenge) => {
    const tags = [...challenge.languages, ...challenge.frameworks, ...challenge.tags]
    return tags.map((language,i) => {
        return (
            <ChallengeCardLang key={i} language={language} difficulty={challenge.difficulty}/>
        );
    });
};

const ChallengeCard = ({challenge}) => {
    const languangeList = getChallengeLang(challenge);
    return (
        <li className="small-10 small-offset-1 medium-6 medium-offset-0 large-4 large-offset-0 columns">
            <Link to={'/challenge/' + challenge._id}>
                <div className="challenge-card">
                    <div className={"challenge-head " + challenge.difficulty}>
                        <h4>{challenge.github.repository_url.split('/')[challenge.github.repository_url.split('/').length - 1]}</h4>
                        <div className="category-icon">
                            <img src={require('../../../media/bug.svg')}/>
                        </div>
                    </div>
                    <div className="challenge">
                        <h3 className="title">
                            {challenge.title}
                        </h3>
                        <p className="description">
                            {challenge.body}
                        </p>
                        <div className="tags-wrapper">
                            {languangeList}
                        </div>
                        <div className="challenge-options">
                            <button><i className="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i></button>
                        </div>
                        <div className="challenge-options-card">
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default ChallengeCard;
