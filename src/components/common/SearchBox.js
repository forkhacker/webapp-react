import  React, {PropTypes} from 'react';


const SearchBox = () => {
    return (

        <div className="input-group search-box">
            <img src={require('../../media/search.svg')}/>
            <input type="text"
                   placeholder="Search by Name, Language, Organisation and More"/>
        </div>
    );
};

SearchBox.propTypes = {};

export default SearchBox;
