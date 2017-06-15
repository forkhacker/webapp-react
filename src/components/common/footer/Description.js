import  React from 'react';

const Alerts = () => {
    return (
        <div>
            <a href="#">
                <img src={require('../../../media/logo.svg')} />
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
    );
};


export default Alerts;
