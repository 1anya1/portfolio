import React from "react";


class Resume extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div className='homePage'>
        <h1 className='aboutMe'>My Resume</h1>
        <div style={{padding: '30px 0'}}>
        <h4>Click <a id='link' href ='/Resume_Anna_Filatova.pdf' target="_blank">here</a> to view resume in PDF format</h4>
       
        </div>
      < img className ='resumeImg' alt= '' src='https://i.imgur.com/gOwMrEb.png'></img>
      </div>
    )
  }
}

  

export default Resume