import React from 'react'
import Profile from '../../components/profile/Profile';
import Education from '../../components/education/Education';
import Skill from '../../components/skill/Skill';
import Experience from '../../components/experience/Experience';
import Project from '../../components/project/Project';

import './Curriculum.css';

function Curriculum(){
    return (
        <>
            <Profile/>
            <Education/>
            <Skill/>
            <Experience/>
            <Project/>
        </>
    );
}

export default Curriculum