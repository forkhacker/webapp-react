import React from 'react';
import ChallengeCard from './common/challengeCard/ChallengeCard';


const ChallengeCardList = ({challenges}) => {

    const getChallengeCard = () => {
        return challenges.map((challenge) => {
            return (
                <ChallengeCard
                    key={challenge.id}
                    head={challenge.head}
                    issue={challenge.issue}
                    description={challenge.description}
                    technologies={challenge.technologies}
                    level={challenge.level}
                    id={challenge.id}
                />
            );
        });
    };

    const challengeCard = getChallengeCard();

    return (
        <div className="row align-center challenge-list ">
            <div className="small-10 large-12 columns">
                <ul className="row">
                    {challengeCard}
                </ul>
            </div>
        </div>
    );
}

export default ChallengeCardList;
