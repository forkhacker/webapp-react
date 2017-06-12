import React from 'react';

class Trending extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="large-3 columns">
                {this.props.trending}
            </div>
        );
    }
}

export default Trending;
