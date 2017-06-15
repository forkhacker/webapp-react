import React from 'react';
import Trending from './Trending';
import Description from './Description';


class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            trending: ["JavaScript", "React.js", "Electron", "Node.js", "JavaScript", "React.js", "Electron", "Node.js"]
        };
    }

    render() {
        return (
            <footer>
                <div className="row">
                    <div className="large-6 columns footer-left">
                        <Description/>
                    </div>
                    <div className="large-6 columns footer-right">
                        <Trending
                            trending={this.state.trending}
                        />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
