import React from 'react';


class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {

        return (
            <div className="row header">
                <div className="columns">
                    <div className="default-card">
                        <div className="row author">
                            <div className="columns shrink">
                                <img src={require('../media/oval.svg')}/>
                            </div>
                            <div className="columns user">
                                <p className="name">James ka Bhai</p>
                                <p className="date">Yesterday • 8:41 PM</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="columns">
                                <p className="comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                    suscipit viverra
                                    luctus. Quisque pulvinar lorem est, eu vehicula risus porttitor vitae. Etiam
                                    eget nisl viverra, blandit nulla vitae, consequat quam. Aliquam quis massa id mi
                                    laoreet lobortis.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="columns">
                                <button>Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;
