import React from 'react';
import {Link} from 'react-router';

class ChallengeCardTech extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to={"challenge/" + this.props.technology}>
                <div className="tags" id={this.props.level}>
                    {this.props.technology}
                </div>
            </Link>
        );
    }
}

export default ChallengeCardTech;
