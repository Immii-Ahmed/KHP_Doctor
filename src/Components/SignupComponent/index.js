import React, { useState } from 'react'
import PasswordInputField from '../PasswordField'

function SignupComponent() {

  const [password, setPassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  

  return (
    <form>
    <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Name...' aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Email...' aria-describedby="emailHelp"/>
  </div>
      <PasswordInputField handlePasswordChange={setPassword} placeholder={'Password...' } />
      <PasswordInputField handlePasswordChange={setcpassword} placeholder={'Confirm Password...'} />
  <button type="submit" className="btn btn-dark">SIGNUP</button>
</form>
  )
}

export default SignupComponent