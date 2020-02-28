import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: 'black', color: 'white'}}>
                <p className='footer'>Designed & Built by Anna Filatova</p>
                <div className='links'>
                    <div><img src='https://i.imgur.com/KTFt7Tu.png' style={{width:30}}></img></div>
                    <div><img src='https://i.imgur.com/uXNXbZs.png' style={{width:30}}></img></div>
                </div>
            </div>
        )
    }
}

export default Footer