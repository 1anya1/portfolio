import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
 
class ProjectCarousel extends Component {
    render() {
        return (
          <Carousel style={{backgroundColor:'black'}}>
  <Carousel.Item>
    <img className='carousel'
      className="d-block w-60"
      src="https://i.imgur.com/naHFEWX.png"
      alt="First slide"
      style={{ width: '60%', padding: 30, display: 'grid', margin: ' 5px auto', filter:'grayscale(50%)'}}
    />
    <Carousel.Caption style={{position:'static'}}>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img className='carousel'
      // className="d-block w-70"
      src="https://i.imgur.com/cQkcfLW.png"
      alt="Third slide"
      style={{width:400, padding: 50, display: 'grid', margin: ' 5px auto', filter:'grayscale(50%)'}}
    />

    <Carousel.Caption style={{position:'static'}}>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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