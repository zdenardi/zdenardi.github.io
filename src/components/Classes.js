import React from 'react';
import ProjectCard from './ProjectCard'
const Classes = ()=>{

    const classes = [
        {
            title:'Building Modern Projects with React',
            tags:['React','Redux','Thunk','Testing'],
            completeDate:'12/30/2020'
        },
        {
            title:'React.js; Building an Interface',
            tags:['React'],
            completeDate:'12/18/2020'
        },
        {
            title:'React Ecossystems',
            tags:['React'],
            completeDate:'12/16/2020'
        },
        {
            title:'Bootstrap 4 with SASS',
            tags:['Bootstrap','SASS'],
            completeDate:'6/23/2020'
        },
        {
            title:'Photoshop for Web Design',
            tags:['Photoshop'],
            completeDate:'6/23/2020'
        },
        {
            title:'Become a Web Developer',
            tags:['Web Dev','HTML','JS','CSS','GIT'],
            completeDate:'2/21/2020'
        },
        {
            title:'Become a Full-Stack Developer',
            tags:['HTML','CSS','JS','PHP','Node','Express','REST','AWS'],
            completeDate:'11/1/2019'
        },

    ]
    return(
        <>
        <div class="main-content container">
            <h1 class="divider">Classes</h1>
                <div className="row">
                       {classes.map(topic =>(
                           <div className="col cardcontainer">
                           <ProjectCard topic={topic}/>
                           </div>
                       ))}                   
                </div>
            </div>
        </>
    )
}

export default Classes;