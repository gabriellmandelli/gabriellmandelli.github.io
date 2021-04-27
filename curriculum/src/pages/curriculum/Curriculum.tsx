import React from 'react'
import staticData from '../../data/personalData.json'
import Header from '../../components/header/Header';
import Profile from '../../components/profile/Profile';
import './Curriculum.css';

function Curriculum(){
    return (
        <body>
            <Header/>
            <Profile/>
            <div id="educations">
                <div>
                    {staticData.educations.map( education => {
                        return (
                            <div className="container-fluid bg-2 text-center ftco-section">
                                <h2 className="margin ftco-animate" id="education_section">Education</h2>
                                <div><h2><b>{education.name}</b></h2></div>
                                <div><h3>{education.from}</h3></div>
                                <div>Andress: <b>{education.andress}</b></div>
                                <div>Duration: <b>{education.duration}</b></div>
                                <div>{education.type} at <b>{education.endAt}</b></div>
                                <div>
                                    <h4 id="coursework"><b>Areas of expertise:</b></h4>
                                    <p>{education.details}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
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