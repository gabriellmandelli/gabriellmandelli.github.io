import React from 'react'
import staticData from '../../data/personalData.json'

import './Project.css'

export default function Project() {
    return (
        <div id="projects">
            <div className="container-fluid bg-5 text-center">
                <h3 className="margin" id="projects">PROJECTS</h3>
                {staticData.projects.map( project => {
                    return (
                        <div>
                            <div className="col-50">
                            <h1><b>{project.title}</b></h1>
                            <img src="" style={{width:"90%"}} alt=""/>
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
    )
}