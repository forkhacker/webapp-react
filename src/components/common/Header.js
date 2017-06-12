import React from 'react';

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
            <div className="nav-wrap row">
                <div className="small-12 small-centered columns nav-col">
                    <a href="#"><img src={require('../../media/logo.svg')}/></a>
                    <div className="input-group search-group">
                        <div className="input-group-label search-label"><i className="fa fa-search"
                                                                           aria-hidden="true"></i></div>
                        <input type="text" className="input-group-field search-input"
                               placeholder="Search by Name, Language, Organisation and More"/>
                    </div>
                    <div className="user-action">
                        <button className="notifs">
                            <img src={require('../../media/notification.svg')}/>
                        </button>
                        <button className="msgs">
                            <img src={require('../../media/chat.svg')}/>
                        </button>
                    </div>
                    <div className="user-nav">
                        <div className="user-image">
                            <img src={this.state.user.img}/>
                        </div>
                        <div className="user-name">{this.state.user.name}</div>
                        <button className="user-options">
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
