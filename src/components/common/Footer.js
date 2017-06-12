import React from 'react';
import Trending from '../Trending';

class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            trending : ["JavaScript", "React.js", "Electron", "Node.js", "JavaScript", "React.js", "Electron", "Node.js"]
        };
    }

    render() {

        const getTrendingList = () => {
            return this.state.trending.map((trending) => {
                return(
                    <Trending trending = {trending} />
                );
            });
        }

        const trendingList = getTrendingList();

        return(
            <footer>
                <div className="row">
                    <div className="large-6 columns footer-left">
                        <a href="#">
                            <img src={require("../../media/logo.svg")} />
                        </a>
                        <div className="footer-desc">
                            This small paragraph should describe little about the issue and what needs to be solved with character limit too.
                        </div>
                        <div className="social-icons">
                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="large-6 columns footer-right">
                        <h4>Trending</h4>
                        <div className="row">
                            <div className="large-12 columns">
                                <div className="row trending-list">
                                    {trendingList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
