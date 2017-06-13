import React from 'react';
import SearchBox from './SearchBox';
import Alerts from './Alerts';
import User from './User';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: "John Smith",
                img: ""
            }
        };
    }

    render() {
        return (
            <header>
                <div className="row align-middle">
                    <div className="column shrink">
                        <a href="#"><img src={require('../../media/logo.svg')}/></a>
                    </div>
                    <div className="column">
                        <SearchBox />
                    </div>
                    <div className="columns">
                        <div className="row align-right">
                            <div className="columns">
                                <Alerts />
                            </div>
                            <div className="columns">
                                <User />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
