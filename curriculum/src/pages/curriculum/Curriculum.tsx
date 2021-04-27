import React from 'react'
import Header from '../../components/header/Header';
import Profile from '../../components/profile/Profile';
import Education from '../../components/education/Education';
import Skill from '../../components/skill/Skill';
import Experience from '../../components/experience/Experience';
import Project from '../../components/project/Project';

import './Curriculum.css';

function Curriculum(){
    return (
        <body>
            <Header/>
            <Profile/>
            <Education/>
            <Skill/>
            <Experience/>
            <Project/>
        </body>
    );
}

export default Curriculum