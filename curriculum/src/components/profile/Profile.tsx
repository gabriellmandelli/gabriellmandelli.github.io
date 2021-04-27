import React from 'react'
import staticData from '../../data/personalData.json'

import './Profile.css'

export default function Profile() {
    return (
        <div id="profile" className="container-fluid bg-1 text-center">
                <h1 className="margin">{staticData.profile.name}</h1>
                <div className="item1">
                    <img src={staticData.profile.photoURL} className="img-responsive img-circle margin" style={{ display : "inline" }} alt="G" width="350" height="350"/>
                    <p><a href={"mailto:"+staticData.profile.email}>{staticData.profile.email}</a></p>
                    <a href={staticData.profile.linkedinURL} target="blank"><i className="fa fa-linkedin"></i></a>
                    <a href={staticData.profile.githubURL} target="blank"><i className="fa fa-github"></i></a>
                </div>
                <div className="item2">
                    <h2>About myself</h2>
                    <div>
                        <p>
                            <div>
                                {staticData.profile.about}
                            </div>
                            <div>
                                {staticData.profile.working}
                            </div>
                        </p>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <blockquote className="groucho">
                            {staticData.profile.quote}
                            <footer>{staticData.profile.quoteBy}</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
    )
}