import React from 'react';


class ChallengePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="challenge-page">
                <a className="row align-middle back-to-challenge">
                    <img className="columns shrink" src={require('../media/back-arrow.svg')}/>
                    <h4 className="columns shrink">Back to Challenges</h4>
                </a>

                <div className="row">
                    <div className="columns">
                        <div className="default-card">
                            <h2>Challenge Header</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="columns large-8">
                        <div className="default-card">
                            <h2>Challenge Details</h2>
                        </div>
                    </div>
                    <div className="columns large-4">
                        <div className="default-card">
                            <h2>Challenge Repo</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChallengePage;
