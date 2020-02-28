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
                    <p className='bioCard'>I'm a software engineer specializing in building and designing high-quality websites and applications.
                        I enjoy all forms of design and use multiple creative outlets to express both my ideas and myself.
                         I am constantly gaining knowledge and inspiration in the design world both graphic and web-related. 
                         I enjoy learning and growing in my field and expressing myself through my work. </p>
                         <img src='https://i.imgur.com/EDBgFhC.png' className='portrait'></img>
                    </div>
                    <h1 className='aboutMe'>Technologies I've worked with recently:</h1>


                    <ul className="pictureBio li">
                        <div>
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                            <li>Express</li>
                        </div>
                        <div>
                            <li>Ruby</li>
                            <li>Bootstrap</li>
                            <li>MongoDB</li>
                            <li>Sass</li>
                            <li>AJAX</li>
                        </div>
                    </ul>
                    <h1 className='aboutMe'>Let's Connect</h1>
                    <p className = 'connect'>If you have a project that you want to get started, 
                        think you need my help with something or just want to say hi, then drop me a line and lets connect</p>
                    <Button  className='button' size="lg" style={{width:'80%', backgroundColor: 'white', color:'black', fontWeight: 'bold', display:'grid',margin:'0 auto'}}>EMAIL</Button>
                    <div className="pictureBio">
                    </div>
                </div>
            </div>
        )
    }
}

export default Home