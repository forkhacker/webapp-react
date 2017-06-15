import React from 'react';

const Trending = ({trending}) => {
    const getTrendingList = () => {
        return trending.map((trending,i) => {
            return(
                <div key={i} className="large-3 columns">
                    {trending}
                </div>
            );
        });
    };

    const trendingList = getTrendingList();

    return(
        <div>
            <h4>Trending</h4>
            <div className="row">
                <div className="large-12 columns">
                    <div className="row trending-list">
                        {trendingList}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Trending;
