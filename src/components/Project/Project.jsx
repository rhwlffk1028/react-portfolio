import React from 'react';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import workday from '../../images/workday.png';
import weather from '../../images/weather-dashboard.png';
import notes from '../../images/note-taker.png';
import fitness from '../../images/fitness-tracker.png';

import './Project.css';

const Project = () => {
    return (
        <main className="container my-3 rounded" id="main">
            <div className="row">
                <div className="col">
                    {/* <!-- Header row --> */}
                    <div className="row rounded-top" id="projectBanner">
                    </div>
                    <h2 className="font-weight-bold" id="main-header">
                        Project
                    </h2>
                </div>
            </div>
            <div className="row px-3">
                <div className="col text-light paragraphProject mb-4 d-flex flex-wrap">
                    <div className="card">
                        <img src={project1} className="card-img-top card-img" />
                        <div className="card-body card-bg text-light text-center">
                            <h5 className="card-title">Project 1: MTC Deck Builder</h5>
                            <a href="https://github.com/mandrewartha/MTG-deck-builder" target="_blank" className="btn btn-margin">Github Repository</a>
                            <a href="https://mandrewartha.github.io/MTG-deck-builder/" target="_blank" className="btn btn-margin">Deployed Website</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={project2} className="card-img-top card-img" />
                        <div className="card-body card-bg text-light text-center">
                            <h5 className="card-title">Project 2: Recipe Refocused</h5>
                            <a href="https://github.com/TheHebi/recipe-forum-site" target="_blank" className="btn btn-margin">Github Repository</a>
                            <a href="https://recipes-refocused.herokuapp.com/" target="_blank" className="btn btn-margin">Deployed Website</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={workday} className="card-img-top card-img" />
                        <div className="card-body card-bg text-light text-center">
                            <h5 className="card-title">Workday Scheduler</h5>
                            <a href="https://github.com/rhwlffk1028/work-day-scheduler" target="_blank" className="btn btn-margin">Github Repository</a>
                            <a href="https://rhwlffk1028.github.io/work-day-scheduler/" target="_blank" className="btn btn-margin">Deployed Website</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={weather} className="card-img-top card-img" />
                        <div className="card-body card-bg text-light text-center">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <a href="https://github.com/rhwlffk1028/weather-dashboard" target="_blank" className="btn btn-margin">Github Repository</a>
                            <a href="https://rhwlffk1028.github.io/weather-dashboard/" target="_blank" className="btn btn-margin">Deployed Website</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={notes} className="card-img-top card-img" />
                        <div className="card-body card-bg text-light text-center">
                            <h5 className="card-title">Note Taker</h5>
                            <a href="https://github.com/rhwlffk1028/note-taker" target="_blank" className="btn btn-margin">Github Repository</a>
                            <a href="https://kevin-note-taker.herokuapp.com/" target="_blank" className="btn btn-margin">Deployed Website</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={fitness} className="card-img-top card-img" />
                        <div className="card-body card-bg text-light text-center">
                            <h5 className="card-title">Fitness Tracker</h5>
                            <a href="https://github.com/rhwlffk1028/Fitness-Tracker" target="_blank" className="btn btn-margin">Github Repository</a>
                            <a href="https://kc-fitness-tracker.herokuapp.com" target="_blank" className="btn btn-margin">Deployed Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Project;