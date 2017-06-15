import React from 'react';
import ChallengeCardTech from './ChallengeCardTech';
import {Link} from 'react-router';


class ChallengeCard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        const getTechnologyList = () => {
            return this.props.technologies.map((technology,i) => {
                return (
                    <ChallengeCardTech key={i} technology={technology} level={this.props.level}/>
                );
            });
        }

        const technologyList = getTechnologyList();

        return (
            <li className="small-10 small-offset-1 medium-6 medium-offset-0 large-4 large-offset-0 columns">
                <Link to={'/challenge/' + this.props.id}>
                    <div className="challenge-card">
                        <div className="challenge-head" id={this.props.level}>
                            <h4>{this.props.head}</h4>
                            <div className="category-icon">
                                <img src={require('../../../media/bug.svg')}/>
                            </div>
                        </div>
                        <div className="challenge">
                            <h3 className="title">
                                {this.props.issue}
                            </h3>
                            <p className="description">
                                {this.props.description}
                            </p>
                            <div className="tags-wrapper">
                                {technologyList}
                            </div>
                            <div className="tags-wrapper">
                                {technologyList}
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
    }
}

export default ChallengeCard;
