import React, { useState } from 'react'
import { ContextApi } from './context';

const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

  return (
      <ContextApi.Provider value={{user, setUser}}>
          {children}
    </ContextApi.Provider>
  )
}

export default ContextProvider
