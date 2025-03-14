import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'; 
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {

  const [data, setData] = useState({})

  async function signIn({ email, password }){
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data
      
      localStorage.setItem('@debtor-customers:user', JSON.stringify(user))
      localStorage.setItem('@debtor-customers:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token})

    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)

      } else {
        alert("Não foi possivel entrar.")

      }
    }
  }

  function signOut() {
    localStorage.removeItem('@debtor-customers:user')
    localStorage.removeItem('@debtor-customers:token')

    setData({})
  }

  useEffect (() => {
    const user = localStorage.getItem('@debtor-customers:user')
    const token = localStorage.getItem('@debtor-customers:token')

    if(user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token, 
        user: JSON.parse(user)
      })
    }

  }, [])

  return (
    <AuthContext.Provider 
    value={{ 
      signIn, 
      signOut,
      user: data.user 
      }}>
      {children}
    </AuthContext.Provider>
  )
}

// Definindo a validação de prop para o AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,  // Garantindo que 'children' seja passado e seja válido
};

function useAuth() {
  const context = useContext(AuthContext)

  return context
}


export { AuthProvider, useAuth }