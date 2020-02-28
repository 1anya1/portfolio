import React from 'react'
import './App.css'

class Home extends React.Component {
    render(){
        return (
            <div className="homePage">
                <div className = 'myBio'>
                    <h1 className=" line-1 anim-typewriter">Hi, my name is Anna.</h1>
                    <h3>I'm a software engineer based in San Francisco, California. I have a passion for web design and love to create for mobile devices. </h3>
                    <h2 className='aboutMe'>About Me </h2>
                    <div className="pictureBio">
                    <p className='bioCard'>I'm a software engineer specializing in building and designing high-quality websites and applications.
                        I enjoy all forms of design and use multiple creative outlets to express both my ideas and myself.
                         I am constantly gaining knowledge and inspiration in the design world both graphic and web-related. 
                         I enjoy learning and growing in my field and expressing myself through my work. </p>
                         <img src='https://i.imgur.com/lHcPu8d.png' className='portrait'></img>
                    </div>
                    <h3>Here are a few technologies I've been working with recently:</h3>


                    <ul>
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Ruby</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home