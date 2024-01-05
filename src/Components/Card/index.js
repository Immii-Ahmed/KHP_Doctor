import React, { useState } from 'react'
import './style.css'
import { unAuthenticatedRoutes } from '../../Utils';
import { Link } from 'react-router-dom';
function Card(props) {
    const { heading, children } = props;
    const [routesArray, setRoutesArray] = useState(unAuthenticatedRoutes);
     // Find the current route object based on the path
  const currentRoute = routesArray.find(route => route.path === window.location.pathname);
  return (
      <>
          <div className="main" style={{marginTop:'8rem'}}>
              <div className='card'>
                  <div className='card_head'>
                      <h1>{heading}</h1>
                  </div>
                  <div className='card_body'>
                      {children}
                  </div>
                  <div className='footer'>
                      {
                        currentRoute?.path === '/signup' ? <Link className='text-decoration-none text-dark' to='/Login'>Login</Link> :<Link className='text-decoration-none text-dark' to='/signup'>Signup</Link> 
                      }
                  </div>
              </div>
      </div>
      
      </>
  )
}

export default Card