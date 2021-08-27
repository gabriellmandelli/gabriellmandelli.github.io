import React from 'react'
import staticData from '../../data/personalData.json'
import './Education.css'

export default function Education() {
    return (
        <div id="educations">
            <div>
                {staticData.educations.map( education => {
                    return (
                        <div className="container-fluid bg-2 text-center ftco-section">
                            <h2 className="margin ftco-animate" id="education_section">EDUCATION</h2>
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
    )
}