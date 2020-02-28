import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: 'black', color: 'white'}}>
                <p className='footer'>Designed & Built by Anna Filatova</p>
                <div className='links'>
                    <div> <a href="https://github.com/1anya1"><  img src='https://i.imgur.com/KTFt7Tu.png'  alt= '' style={{width:30}}></img> </a></div>
                    <div><a href="https://www.linkedin.com/in/anna-filatova/"><img src='https://i.imgur.com/uXNXbZs.png' alt= '' style={{width:30}}></img></a></div>
                </div>
            </div>
        )
    }
}

export default Footer