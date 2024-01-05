import { useContext } from 'react'
import { ContextApi } from './context';

export const useAuthProvider = () => {
    const {user, setUser} = useContext(ContextApi);
    return {
        user, setUser
  }
}
