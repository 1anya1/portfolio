import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Button } from "reactstrap";

 
class ProjectCarousel extends Component {
  render() {
      return (
          <Carousel className='carousel slide'  style={{backgroundColor:'black',interval:10000, }}>
              <Carousel.Item>
                  <img className='carousel'
                      src="https://i.imgur.com/naHFEWX.png"
                          alt="First slide"
                            style={{ width: '100%', maxWidth: '600px', padding: 50, display:'grid', margin: ' 5px auto', filter:'grayscale(50%)'}}
 
                    />
                      <Carousel.Caption style={{position:'static', paddingBottom: 50}}>
                        <h3 style={{paddingTop: 50}}>Name of Project</h3>
                          <p>Technologies used</p>
                          <p> a quick bio</p>
                          <Button  className='button' size="lg" style={{width:'60%', backgroundColor: 'white', color:'black', fontWeight: 'bold', display:'grid',margin:'0 auto 100px'}}>Visit Site</Button>
                      </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className='carousel'
                  src="https://i.imgur.com/cQkcfLW.png"
                    alt="First slide"
                      style={{ width: '100%', maxWidth: '600px', padding: 50, display:'grid', margin: ' 5px auto', filter:'grayscale(50%)'}}
 
              />
                  <Carousel.Caption style={{position:'static', paddingBottom: 50}}>
                    <h3 style={{paddingTop: 50}}>Name of Project</h3>
                      <p>Technologies used</p>
                      <p> a quick bio</p>
                      <Button  className='button' size="lg" style={{width:'60%', backgroundColor: 'white', color:'black', fontWeight: 'bold', display:'grid',margin:'0 auto 100px'}}>Visit Site</Button>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>
        );
    }
}

export default ProjectCarousel;



