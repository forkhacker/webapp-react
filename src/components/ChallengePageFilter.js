import React from 'react';

class ChallengePageFilter extends React.Component{
//    constructor(props){
//        super(props);
//    }

    render() {
        return(
            <div className="row">
                <div className="large-12 large-centered columns">
                    <div className="filterbar">
                        <div className="input-group">
                            <div className="input-group-label"><i className="fa fa-search" aria-hidden="true"></i></div>
                            <input type="text" className="input-group-field" placeholder="Search"/>
                        </div>
                        <div className="filter-select">
                            <select>
                                <option selected disabled>
                                    Choose
                                </option>
                                <option>
                                    Option 1
                                </option>
                                <option>
                                    Option 2
                                </option>
                                <option>
                                    Option 3
                                </option>
                                <option>
                                    Option 4
                                </option>
                            </select>
                            <select>
                                <option selected disabled>
                                    Choose
                                </option>
                            </select>
                            <select>
                                <option selected disabled>
                                    Choose
                                </option>
                            </select>
                            <select>
                                <option selected disabled>
                                    Choose
                                </option>
                            </select>
                            <select>
                                <option selected disabled>
                                    Choose
                                </option>
                            </select>
                            <select>
                                <option selected disabled>
                                    Choose
                                </option>
                            </select>
                        </div>
                        <div className="filter-select-labels">
                            <div>Language</div>
                            <div>Framework</div>
                            <div>Organisation</div>
                            <div>Difficulty</div>
                            <div>Minimum Stars</div>
                            <div>Time left</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChallengePageFilter;
