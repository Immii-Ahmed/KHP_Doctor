import React, { useState } from 'react'
import PasswordInputField from '../PasswordField'

function LoginComponent() {
  const [password, setPassword] = useState('password');

  return (
    <form action='' method='Post'>
    <div className="mb-3">
      <input type="email" className="form-control" id="exampleInputEmail1" placeholder='E-mail' aria-describedby="emailHelp"/>
    </div>
      <PasswordInputField placeholder={'Password..'} handlePasswordChange={setPassword} />
    <button type="submit" className="btn btn-dark">LOGIN</button>
  </form>
  )
}

export default LoginComponent