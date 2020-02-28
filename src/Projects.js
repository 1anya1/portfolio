import React from 'react'
import ProjectCarousel from './Carousel'

class Projects extends React.Component {
    render(){
        return (
            <div className='homePage projectHome'>
                <h1 className='aboutMe'>What I've been up to</h1>
                <div style={{padding: '30px 0'}}>
                <h4>Here is a selection of some of my recent work</h4>
                <h4>For more work visit me on GitHub </h4>
                </div>
                <ProjectCarousel />
                
            </div>
        )
    }
}

export default Projects