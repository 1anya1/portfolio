import React from 'react'
import './App.css'
import { Button } from "reactstrap";

class Home extends React.Component {
    render(){
        return (
            <div className="homePage">
                <div className = 'myBio'>
                    <h2 className=" line-1 anim-typewriter">Hi, my name is Anna.</h2>
                    <h3 className='h3'>I'm a software engineer based in San Francisco, California. I have a passion for web design and love to create for mobile devices. </h3>
                    <h1 className='aboutMe'>About Me </h1>
                    <div className="pictureBio">
                    <p className='bioCard'>I am a passionate creator of things on the web who enjoys all forms of
                                            design. I love to plan my ideas thoughtfully, then craft them into
                                            creative, yet user-friendly experiences. My technical background
                                            includes the latest development approaches in programming, including
                                            MVC framework, event-driven applications using AJAX, JSON, and
                                            Object-Oriented JavaScript. I am an agile learner who enjoys problem-solving 
                                            and picking up new skills and tools. 
                    </p>
                         <img  alt= '' src='https://i.imgur.com/EDBgFhC.png' className='portrait'></img>
                    </div>
                    <h1 className='aboutMe'>Technologies I've worked with recently:</h1>


                    <ul className="pictureBio li">
                        <div>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                            <li>Express</li>
                        </div>
                        <div>
                            <li>Ruby on Rails</li>
                            <li>Bootstrap</li>
                            <li>MongoDB</li>
                            <li>HTML5</li>
                            <li>AJAX</li>
                        </div>
                    </ul>
                    <h1 className='aboutMe'>Let's Connect</h1>
                    <p className = 'connect'>If you have a project that you want to get started, 
                        think you need my help with something or just want to say hi, then drop me a line and lets connect</p>
                    <Button  className='button' size="lg" style={{width:'80%', backgroundColor: 'white', color:'black', fontWeight: 'bold', display:'grid',margin:'0 auto'}}> <a  className= "projectButton" href="mailto:filatovaa@yahoo.com">EMAIL</a></Button>
                    <div className="pictureBio">
                    </div>
                </div>
            </div>
        )
    }
}

export default Home