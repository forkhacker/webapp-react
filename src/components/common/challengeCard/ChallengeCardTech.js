import React from 'react';
import {Link} from 'react-router';

const ChallengeCardTech = ({language, difficulty}) =>
//Todo: replace Link with onclick handler
    (
        <Link to={"challenge/" + language}>
            <div className={"tags " + difficulty}>
                {language}
            </div>
        </Link>
    );

export default ChallengeCardTech;
