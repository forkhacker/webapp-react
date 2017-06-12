import React from 'react';
import ChallengeCardTech from './ChallengeCardTech';

class ChallengeCard extends React.Component {
    constructor(props) {
        super(props);

    }

//    toggleOptionCard(key) {
//            console.log(this);
////            var el = document.getElementsByClassName('challenge-options-card');
////            el[key].style.display = "inline-block";
//    }

    render() {


        const getTechnologyList = () => {
            return this.props.technologies.map((technology) => {
                return (
                    <ChallengeCardTech technology={technology} level={this.props.level}/>
                );
            });
        }

        const technologyList = getTechnologyList();

        return(
            <div className="small-10 small-offset-1 medium-6 medium-offset-0 large-4 large-offset-0 columns">
                <div className="challenge-card">
                    <div className="challenge-head" id={this.props.level}>
                        {this.props.head}
                        <div className="bug"><img src="src/media/bug.svg"/></div>
                    </div>
                    <div className="issue">
                        <div className="issue-head">
                            {this.props.issue}
                        </div>
                        <div className="issue-desc">
                            {this.props.description}
                        </div>
                    </div>
                    <div className="tech">
                        {technologyList}
                    </div>
                    <div className="challenge-options">
                        <button><i className="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i></button>
                    </div>
                    <div className="challenge-options-card">
                        <a href="#" className="challenge-options-card-el">Option 1</a>
                        <a href="#" className="challenge-options-card-el">Option 2</a>
                        <a href="#" className="challenge-options-card-el">Option 3</a>
                        <a href="#" className="challenge-options-card-el">Option 4</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChallengeCard;
