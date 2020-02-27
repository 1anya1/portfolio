import React from 'react'
import './App.css'

class Home extends React.Component {
    render(){
        return (
            <div className="homePage">
                <div className = 'myBio'>
                    <h1>Hi, my name is Anna.</h1>
                    <h1>I build things for the web.</h1>
                    <h1>I'm a web designer / developer based in San Francisco, California. I have a passion for web design and love to create for web and mobile devices. </h1>
                    <h1>About Me </h1>
                    <p>I'm a software engineer based in specializing in building anddesigning high-quality websites and applications.
                        I enjoy all forms of design and use multiple creative outlets to express both my ideas and myself.
                         I am constantly gaining knowledge and inspiration in the design world both graphic and web-related. 
                         I enjoy learning and growing in my field and expressing myself through my work. </p>
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