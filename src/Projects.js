import React from 'react'
import ProjectCarousel from './Carousel'

class Projects extends React.Component {
    render(){
        return (
            <div className='resume'>
            <h1>What i've been up to</h1>
            <h3>Here is a selection of some of my recent work</h3>
            <h3>For more work visit me on GitHub </h3>
            <ProjectCarousel />
            </div>
        )
    }
}

export default Projects