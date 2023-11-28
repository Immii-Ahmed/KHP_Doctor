import React from 'react'
import './style.css'
function Card(props) {
    const { heading, children } = props;
  return (
      <>
          <div className="main">
              <div className='card'>
                  <div className='card_head'>
                      <h1>{heading}</h1>
                  </div>
                  <div className='card_body'>
                      {children}
                  </div>
                  <div className='footer'>
                      SignUp?
                  </div>
              </div>
      </div>
      
      </>
  )
}

export default Card