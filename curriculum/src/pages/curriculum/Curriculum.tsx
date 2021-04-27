import React from 'react'
import staticData from '../../data/personalData.json'
import Header from '../../components/header/Header';
import Profile from '../../components/profile/Profile';
import Education from '../../components/education/Education';

import './Curriculum.css';

function Curriculum(){
    return (
        <body>
            <Header/>
            <Profile/>
            <Education/>
            <div id="skills">
                <div className="container-fluid bg-3 text-center">
                    <h3 className="margin" id="skills">TECHNICAL SKILLS</h3>
                    {staticData.skills.map( skill => {
                        return (
                            <div className="column">
                                <h3><b>{skill.title}</b></h3>
                                <ul style={{listStyleType : "circle"}}>
                                    {skill.list.map(tech => {
                                        return (
                                            <li>{tech}</li>
                                        )
                                    })}                                        
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div id="experiences">
                <div className="container-fluid bg-4 text-center">
                    <h3 className="margin" id="experience">EXPERIENCE</h3>
                    <div className="row text-left">                        {staticData.experiences.map( experience => {
                        return (
                                <div className="col-lg-4 inner-w3pvt-wrap">
                                    <h4><b>{experience.position} - {experience.company}</b></h4>
                                    <h6>{experience.startAt} - {experience.endAt}</h6>
                                    <p>{experience.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div id="projects">
                <div className="container-fluid bg-5 text-center">
                    <h3 className="margin" id="projects">PROJECTS</h3>
                    {staticData.projects.map( project => {
                        return (
                            <div>
                                <div className="col-50">
                                <h1><b>{project.title}</b></h1>
                                {/* <img src="" style={{width:"90%"}} alt=""/> */}
                                </div>
                                <div className="exper">
                                    <h1> About </h1>
                                    <h3>{project.description}</h3>
                                    <b>Whate we learn:</b>
                                    <ul style={{listStyleType:"circle"}}>
                                        {project.techs.map( tech => {
                                            return (
                                            <li>{tech}</li>
                                            )
                                        })}
                                    </ul>
                                    <b>Repository:</b>
                                    {project.links.map( link => {
                                        return (
                                            <div>
                                                <a href={link.url}>{link.description}</a>
                                            </div>
                                        )
                                    })}                                            
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </body>

    );
}

export default Curriculum