import React from 'react';
import marked from 'marked';

import ChallengeCardTech from './common/challengeCard/ChallengeCardTech';

class ChallengePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '# React Markdown Editor\n\n* A list\n\nSome **bold** and _italic_ text\n\n> A quote...\n\nBy [Jed Watson](https://github.com/JedWatson) and [Joss Mackison](https://github.com/jossmac)'
        };
    }


    render() {
        //for markdown
        var preview = marked(this.state.code);


        const tags = ['Electron', 'JS'];
        const getChallengeTags = () => {
            return tags.map((language, i) => {
                return (
                    <ChallengeCardTech key={i} language={language} difficulty={'easy-hollow'}/>
                );
            });
        };

        const challengeTags = getChallengeTags();

        return (
            <div className="challenge-page">
                <a className="row align-middle back-to-challenge">
                    <img className="columns shrink" src={require('../media/back-arrow.svg')}/>
                    <h4 className="columns shrink">Back to Challenges</h4>
                </a>

                <div className="row header">
                    <div className="columns">
                        <div className="default-card">
                            <div className="row">
                                <div className="columns small-12 medium-10">
                                    <h1>A way to cancel app.relaunch</h1>
                                    {challengeTags}
                                </div>
                                <div className="columns small-12 medium-2 text-right">
                                    <button className="easy button-primary">Start</button>
                                    <h4 className="time-head">Ending In</h4>
                                    <h4 className="easy-hollow time">22H : 50M</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="columns large-8 about-challenge">
                        <div className="default-card">
                            <div className="row">
                                <div className="columns">
                                    <h2>About the challenge</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="columns">
                                    <hr/>
                                    <div className="preview" dangerouslySetInnerHTML={{__html: preview}} />
                                    <hr/>
                                    <p>
                                        Electron version: 1.6.2<br/>
                                        Operating system:Win 10<br/>
                                        Expected behavior<br/><br/>

                                        After calling app.relaunch a way to cancel it.<br/><br/>

                                        Actual behavior<br/>
                                        After calling app.relaunch there is no way to cancel it. Or i didn't find
                                        anything in the documentation.<br/><br/>

                                        Creator can use Markup to Create Content here as much as he want.<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="columns large-4 about-repo">
                        <div className="default-card">
                            <section>
                                <div className="row">
                                    <div className="columns">
                                        <h2>About Repository</h2>
                                        <span className="separator"/>
                                    </div>
                                </div>

                                <div className="row repo-info">
                                    <div className="columns shrink">
                                        <img src={require('../media/electron.svg')}/>
                                    </div>
                                    <div className="columns">
                                        <h2>Electron.js</h2>
                                        <p>electron/electron</p>
                                    </div>
                                </div>
                                <div className="row button-set">
                                    <div className="columns shrink">
                                        <img src={require('../media/electron.svg')} style={{opacity: 0}}/>
                                    </div>
                                    <div className="columns">
                                        <button className="button-primary button-hollow">View All</button>
                                        <button className="button-primary button-hollow">Follow</button>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <div className="row">
                                    <div className="columns">
                                        <h2>About Mentor</h2>
                                        <span className="separator"/>
                                    </div>
                                </div>

                                <div className="row repo-info">
                                    <div className="columns shrink">
                                        <img src={require('../media/man.svg')}/>
                                    </div>
                                    <div className="columns">
                                        <h2>James Blunt</h2>
                                        <p>@jamesblunt</p>
                                    </div>
                                </div>
                                <div className="row button-set">
                                    <div className="columns shrink">
                                        <img src={require('../media/man.svg')} style={{opacity: 0}}/>
                                    </div>
                                    <div className="columns">
                                        <button className="button-primary button-hollow">View All</button>
                                        <button className="button-primary button-hollow">Follow</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChallengePage;
