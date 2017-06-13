import React from 'react';
import ChallengeCard from './common/ChallengeCard';

class ChallengeCardList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            challenge : [
                {
                    id : 0,
                    head : "Conversational Form",
                    issue : "Multiple one way data binding values",
                    description : "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies : ["JavaScript", "Python", "Electron", "React"],
                    level : "easy"
                },
                {
                    id : 1,
                    head : "Conversational Form",
                    issue : "Multiple one way data binding values",
                    description : "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies : ["JavaScript", "Python", "Electron", "React"],
                    level : "easy"
                },
                {
                    id : 2,
                    head : "Conversational Form",
                    issue : "Multiple one way data binding values",
                    description : "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies : ["JavaScript", "Python", "Electron", "React"],
                    level : "easy"
                },
                {
                    id : 3,
                    head : "Conversational Form",
                    issue : "Multiple one way data binding values",
                    description : "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies : ["JavaScript", "Python", "Electron", "React"],
                    level : "easy"
                },
                {
                    id : 4,
                    head : "Conversational Form",
                    issue : "Multiple one way data binding values",
                    description : "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies : ["JavaScript", "Python", "Electron", "React"],
                    level : "intermediate"
                },
                {
                    id : 5,
                    head : "Conversational Form",
                    issue : "Multiple one way data binding values",
                    description : "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies : ["JavaScript", "Python", "Electron", "React"],
                    level : "intermediate"
                },
                {
                    id : 6,
                    head : "Conversational Form",
                    issue : "Multiple one way data binding values",
                    description : "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies : ["JavaScript", "Python", "Electron", "React"],
                    level : "intermediate"
                },
                {
                    id : 7,
                    head : "Conversational Form",
                    issue : "Multiple one way data binding values",
                    description : "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies : ["JavaScript", "Python", "Electron", "React"],
                    level : "hard"
                },
                {
                    id : 8,
                    head : "Conversational Form",
                    issue : "Multiple one way data binding values",
                    description : "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies : ["JavaScript", "Python", "Electron", "React"],
                    level : "hard"
                }
            ]
        }
    }

    render() {

        const getChallengeCard = () => {
            return this.state.challenge.map((challenge) => {
                return(
                    <ChallengeCard
                        key={challenge.id}
                        head={challenge.head}
                        issue={challenge.issue}
                        description={challenge.description}
                        technologies={challenge.technologies}
                        level={challenge.level}
                    />
                );
            });
        };

        const challengeCard = getChallengeCard();

        return(
            <div className="row align-center challenge-list ">
                <div className="small-10 large-12 columns">
                    <ul className="row">
                        {challengeCard}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ChallengeCardList;
