import React from 'react'

function SignupComponent() {
  return (
    <form>
    <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Name...' aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Email...' aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" placeholder='Enter Password...' id="exampleInputPassword1"/>
      </div>
      <div className="mb-3">
    <input type="password" placeholder='Confirm Password...' className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-dark">SIGNUP</button>
</form>
  )
}

export default SignupComponent