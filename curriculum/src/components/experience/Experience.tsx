import React from 'react'
import staticData from '../../data/personalData.json'

import './Experience.css'

export default function Experience() {
    return (
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
    )
}