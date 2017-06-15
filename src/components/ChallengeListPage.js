import React from 'react';
import ChallengeCardList from './ChallengeCardList';
import ChallengePageFilter from './ChallengePageFilter';


class ChallengeListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            challenge: [
                {
                    id: 0,
                    head: "Conversational Form",
                    issue: "Multiple one way data binding values",
                    description: "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies: ["JavaScript", "Python", "Electron", "React"],
                    level: "easy",
                    category : "bug"
                },
                {
                    id: 1,
                    head: "Conversational Form",
                    issue: "Multiple one way data binding values",
                    description: "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies: ["JavaScript", "Python", "Electron", "React"],
                    level: "easy",
                    category : "bug"
                },
                {
                    id: 2,
                    head: "Conversational Form",
                    issue: "Multiple one way data binding values",
                    description: "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies: ["JavaScript", "Python", "Electron", "React"],
                    level: "easy",
                    category : "bug"
                },
                {
                    id: 3,
                    head: "Conversational Form",
                    issue: "Multiple one way data binding values",
                    description: "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies: ["JavaScript", "Python", "Electron", "React"],
                    level: "easy",
                    category : "enhancement"
                },
                {
                    id: 4,
                    head: "Conversational Form",
                    issue: "Multiple one way data binding values",
                    description: "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies: ["JavaScript", "Python", "Electron", "React"],
                    level: "intermediate",
                    category : "bug"
                },
                {
                    id: 5,
                    head: "Conversational Form",
                    issue: "Multiple one way data binding values",
                    description: "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies: ["JavaScript", "Python", "Electron", "React"],
                    level: "intermediate",
                    category : "bug"
                },
                {
                    id: 6,
                    head: "Conversational Form",
                    issue: "Multiple one way data binding values",
                    description: "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies: ["JavaScript", "Python", "Electron", "React"],
                    level: "intermediate",
                    category : "bug"
                },
                {
                    id: 7,
                    head: "Conversational Form",
                    issue: "Multiple one way data binding values",
                    description: "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies: ["JavaScript", "Python", "Electron", "React"],
                    level: "hard",
                    category : "enhancement"
                },
                {
                    id: 8,
                    head: "Conversational Form",
                    issue: "Multiple one way data binding values",
                    description: "This small paragraph should describe little about the issue and what needs to be solved with character limit too.",
                    technologies: ["JavaScript", "Python", "Electron", "React"],
                    level: "hard",
                    category : "bug"
                }
            ]
        };
    }

    render() {

        return (
            <div>
                <ChallengePageFilter />
                <ChallengeCardList challenges={this.state.challenge}/>
            </div>
        );
    }
}

export default ChallengeListPage;
