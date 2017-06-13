import React from 'react';

class ChallengeCardTech extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="tags" id={this.props.level}>
                {this.props.technology}
            </div>
        );
    }
}

export default ChallengeCardTech;
