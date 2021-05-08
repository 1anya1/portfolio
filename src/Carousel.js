import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Button } from "reactstrap";


 
class ProjectCarousel extends Component {
  render() {
      return (
          <Carousel  style={{backgroundColor:'black',interval:10000, }}>
              <Carousel.Item>
                  <img className='carousel'
                      src="https://i.imgur.com/cQkcfLW.png"
                          alt="First slide"
                            style={{ width: '100%', maxWidth: '600px', padding: 50, display:'grid', margin: ' 5px auto', filter:'grayscale(50%)'}}
 
                    />
                      <Carousel.Caption style={{position:'static'}}>
                        <h3 style={{paddingTop: 50}}>FOODIE</h3>
                          <p>ReactJS, MongoDB, Express, HTML, CSS, Javascript, Heroku</p>
                          <p> The Foodie app allows users to create shopping lists tied to a user account. Lists can be shared between users.</p>
                         
                          <Button className='button' size="lg" style={{width:'60%', backgroundColor: 'white', color:'black', fontWeight: 'bold', display:'grid',margin:'0 auto 50px'}}> <a  className='projectButton' href='https://foodie-list-app.herokuapp.com/' target="_blank" rel="noopener noreferrer">Visit Site </a></Button>
                         
                      </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className='carousel'
                   src="https://i.imgur.com/naHFEWX.png"
                    alt="First slide"
                      style={{ width: '100%', maxWidth: '600px', padding: 50, display:'grid', margin: ' 5px auto', filter:'grayscale(50%)'}}
 
              />
                  <Carousel.Caption style={{position:'static'}}>
                    <h3 style={{paddingTop: 50}}>PLANTLY</h3>
                      <p> React, Ruby on Rails, ReactStrap, PostgreSQL, AJAX, JavaScript</p>
                      <p> Plantly is an app all about houseplants. Search for common names, learn how to recognize problems and track progress of your plants.</p>

              <Button  className='button' size="lg" style={{width:'60%', backgroundColor: 'white', color:'black', fontWeight: 'bold', display:'grid',margin:'0 auto 50px'}}><a className='projectButton' href='http://plantly112.herokuapp.com/' target="_blank" rel="noopener noreferrer">Visit Site </a></Button>

                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>
        );
    }
}

export default ProjectCarousel;



