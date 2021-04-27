import React from 'react'
import staticData from '../../data/personalData.json'

import './Skill.css'

export default function Skill() {
    return (
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
    )
}