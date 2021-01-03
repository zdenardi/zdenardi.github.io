import react from 'react'
import {Carousel,Button} from 'react-bootstrap'
import FourthwallImage from '../img/Fourthwall.png'
import zdenardiImage from '../img/zdenardiThumb.png'
import githubimage from '../img/githubthumb.png'

const Carousels = ({projects}) =>{
    console.log(projects)
    return(
        <>
        <div className="main-content container">
        <h1 className="divider">Live Projects</h1>
        <Carousel> 
        <Carousel.Item>
            <img
            className=" d-block mx-auto"
            src={FourthwallImage}
            alt="Fourth Wall"
            />
            <Carousel.Caption style={{
                color:"black",
                backgroundColor:"#cb7e75"
                }}>
            <div className="container pb-2">
            <Button
            onClick={()=> window.open('https://fourthwallreviews.com/')}>Check it out</Button>
            <h3>FourthWall Reviews</h3>
            <p>React Frontend, Node/Express backend served at AWS</p>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{maxHeight:"40vh"}}>
            <img
            className=" d-block mx-auto"
            src={zdenardiImage}
            alt="zdenardi.com thumb"
            />
            <Carousel.Caption style={{
                color:"black",
                backgroundColor:"#cb7e75"
                }}>
            <div className="container pb-2">
            <Button
             onClick={()=> window.open('http://www.zdenardi.com')}>Check it out</Button>
            <h3>Actor Website</h3>
            <p>React Frontend, Node/Express backend connected to MongoDB</p>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{maxHeight:"40vh"}}>
            <img
            className=" d-block mx-auto"
            src={githubimage}
            alt="github blurred image"
            />
            <Carousel.Caption style={{
                color:"black",
                backgroundColor:"#cb7e75"
                }}>
            <div className="container pb-2">
            <Button
            onClick={()=> window.open('https://github.com/zdenardi')}>Check it out</Button>
            <h3>See more at my github</h3>
            <p>React Frontend, Node/Express backend connected to MongoDB</p>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
        </>
    )
}

export default Carousels