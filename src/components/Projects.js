import React from 'react';
import Carousels from './Carousels'

const Projects = ()=>{

    const projects=[
        { imgSrc:'../img/Fourthwall.png',
        title:'Fourthwall Reviews',
        blurb:'React Frontend, Node/Express backend served at AWS<'
        },
        { imgSrc:'../img/Fourthwall.png',
        title:'Fourthwall Reviews',
        blurb:'React Frontend, Node/Express backend served at AWS<'
        },
        { imgSrc:'../img/Fourthwall.png',
        title:'Fourthwall Reviews',
        blurb:'React Frontend, Node/Express backend served at AWS<'
        },
        { imgSrc:'../img/Fourthwall.png',
        title:'Fourthwall Reviews',
        blurb:'React Frontend, Node/Express backend served at AWS<'
        },
    ]

    return(
        <>
        {console.log(projects)}
        <div className="container main-content">
            <h3 className="retro-title">Live Projects</h3>
            <Carousels projects={projects}/>
        </div>
        </>
    )
}

export default Projects;