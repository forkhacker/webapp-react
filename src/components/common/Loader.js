import  React from 'react';

const Loader = ({size}) => {
    return (
        // Temporary Loader for now
        <div className={"loader-wrapper " + size}>
            <div className="row align-middle align-center">
                <div className="columns">
                    <div className="loader"></div>
                    <p>Loading</p>
                </div>
            </div>
        </div>
    );
};


export default Loader;
