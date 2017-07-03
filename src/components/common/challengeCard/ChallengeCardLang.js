import React from 'react';
import {Link} from 'react-router';

const ChallengeCardTech = ({language, difficulty}) =>
    (
        <Link to={"challenge/" + language}>
            <div className="tags" id={difficulty}>
                {language}
            </div>
        </Link>
    );

export default ChallengeCardTech;
