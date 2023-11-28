import React from 'react'

function LoginComponent() {
  return (
    <form action='' method='Post'>
    <div className="mb-3">
      <input type="email" className="form-control" id="exampleInputEmail1" placeholder='E-mail' aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1"/>
    </div>
    <button type="submit" className="btn btn-dark">LOGIN</button>
  </form>
  )
}

export default LoginComponent