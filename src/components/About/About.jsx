import React from 'react';
import './About.css';

const About = () => {
    return (
        <main className="container my-3 rounded" id="main">
            <div className="row">
                <div className="col">
                    {/* <!-- Header row --> */}
                    <div className="row rounded-top" id="banner">
                    </div>
                    <h2 className="font-weight-bold" id="main-header">
                        About Me
                    </h2>
                </div>
            </div>
            <div className="row px-3">
                <div className="col text-light paragraph">
                    <p>
                        My name is Jun Choi, and I also go by Kevin. I am 26 and currently live in Des Moines, WA. I have quite an interesting educational and a career backgorund. I have obtained my bachelor's of science degree in Aerospace Engineering at the University of Washington in 2017. After my graduation, I worked as an Aerospace Engineer for about 3 years to work on the composite structures of SpaceX's crew dragon spacecraft and also on numerous aircraft design projects.
                    </p>
                    <p>
                        After 3 years of aerospace industry experience, I have decided to switch my career into a software industry to maintain a better work-life-balance. As much as I love aerospace, it was difficult to give up my previous job and many opportunities. However, I would like to thrive in this field as I decided to start a new journey, and I am very excited for this bootcamp. I hope to develop my skills as much as I can and land a job as soon as possible! Please explore my previous projects below. Feel free to reach out to me for further questions! Enjoy!
                    </p>
                </div>
            </div>
        </main>
    );
}

export default About;