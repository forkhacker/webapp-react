import React from 'react';
import ChallengeCard from './common/challengeCard/ChallengeCard';


const getChallengeCards = (challenges) => {
    return challenges.map((challenge) => {
        return (
            <ChallengeCard key={challenge._id} challenge={challenge}/>
        );
    });
};

const ChallengeCardList = ({challenges}) => {
    const challengeCard = getChallengeCards(challenges);
    return (
        <div className="row align-center challenge-list ">
            <div className="small-10 large-12 columns">
                <ul className="row">
                    {challengeCard}
                </ul>
            </div>
        </div>
    );
};

export default ChallengeCardList;
