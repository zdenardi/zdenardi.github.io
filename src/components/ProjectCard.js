import React from 'react'
import {Card,Badge} from 'react-bootstrap/'
const ProjectCard=({topic})=>{
    return(
        <>
        <Card className="class-info" style={{margin:'0.5rem', width: '15rem' }}>
            <Card.Body>
                <Card.Title>
                        <h5>{topic.title}</h5>
                            <Badge variant="primary">{topic.completeDate}</Badge>
                       </Card.Title>
                <Card.Text>
                {/* Class Blurb */}
                </Card.Text>
                <footer>
                {topic.tags.map(tag=>(
                    <Badge variant="info" style={{margin:'0.1rem'}}>{tag}</Badge>
                ))}
                
                </footer>
            </Card.Body>
            </Card>
        </>
    )
}
export default ProjectCard;