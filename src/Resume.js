import React from "react";


class Resume extends React.Component{
  render(){
    return(
      <div className='homePage'>
        <h1 className='aboutMe'>My Resume</h1>
        <div style={{padding: '30px 0'}}>
        <h4>Click here to view resume in PDF format</h4>
        </div>
      < img className ='resumeImg' alt= '' src='https://i.imgur.com/gUAa9Cy.png'></img>
      </div>
    )
  }
}

export default Resume