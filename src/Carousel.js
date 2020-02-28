import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Button } from "reactstrap";

 
class ProjectCarousel extends Component {
    render() {
    

        return (
          
          <Carousel style={{backgroundColor:'black',interval:10000}}>
  <Carousel.Item>
    <img className='carousel'
      className="carousel"
      src="https://i.imgur.com/naHFEWX.png"
      alt="First slide"
      style={{ width: '80%', maxWidth: '600px', padding: 50, display:'grid', margin: ' 5px auto', filter:'grayscale(50%)'}}
 
    />
    <Carousel.Caption style={{position:'static', paddingBottom: 50}}>
      <h3>Name of Project</h3>
      <p>Technologies used</p>
      <p> a quick bio</p>
      <Button>Take me to the site </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className='carousel'
      className="carousel"
      src="https://i.imgur.com/cQkcfLW.png"
      alt="First slide"
      style={{ width: '80%', maxWidth: '600px', padding: 50, display:'grid', margin: ' 5px auto', filter:'grayscale(50%)'}}
 
    />
    <Carousel.Caption style={{position:'static', paddingBottom: 50}}>
      <h3>Name of Project</h3>
      <p>Technologies used</p>
      <p> a quick bio</p>
      <Button>Take me to the site </Button>
    </Carousel.Caption>
  </Carousel.Item>


</Carousel>

        );
    }
}

export default ProjectCarousel;



{/* <Carousel style={{backgroundColor: 'black'}}>
           
<Carousel.Item style={{display: 'grid', gridTemplateRows: '1fr .25fr'}}> 
    <img
    // className="d-block w-100"
    src="https://i.imgur.com/OksyLho.png?2"
    alt="First slide"
    style={{width:800, padding: 50, display: 'grid', margin: ' 5px auto', filter:'grayscale(50%)'}}
    />
    <Carousel.Caption style={{display: 'grid', margin: ' 5px auto'}}>
<h3>Third slide label</h3>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</Carousel.Caption>

</Carousel.Item>




</Carousel> */}