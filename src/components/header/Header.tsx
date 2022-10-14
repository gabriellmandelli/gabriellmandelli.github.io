import React from 'react'
import staticData from '../../data/personalData.json'
import './Header.css'

export default function Header() {
    return (
        <div className="main">
            <nav className="navbar navbar-default" id="">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-brand"><a href="#profile">{staticData.profile.name}</a></div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#educations">EDUCATION</a></li>
                            <li><a href="#skills">TECHNICAL SKILLS</a></li>
                            <li><a href="#experiences">EXPERIENCE</a></li>
                            <li><a href="#projects">PROJECTS</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}