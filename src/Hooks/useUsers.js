import React, { useCallback } from 'react';
import axios from 'axios';

const useUsers = () => {
    const handleRegisterUser = useCallback(async (user) => {
        await axios.post('http://localhost:3184/signup', { user })
    }, [])
    return {
        handleRegisterUser
  }
}

export default useUsers
