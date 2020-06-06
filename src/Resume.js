import React from "react";


class Resume extends React.Component{
  render(){
    return(
      <div className='homePage'>
        <h1 className='aboutMe'>My Resume</h1>
        <div style={{padding: '30px 0'}}>
        <h4>Click <a href = 'https://drive.google.com/file/d/1nU4T1BH-Ai9Tm1LXVncrM9gmBZ0z8kVQ/view?usp=sharing' target="_blank">here</a> to view resume in PDF format</h4>
        </div>
      < img className ='resumeImg' alt= '' src='https://i.imgur.com/5cQIrWG.png'></img>
      </div>
    )
  }
}

export default Resume