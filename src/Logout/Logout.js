import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Logout.css'

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <div className='logout'>
      <p className='auth-link'onClick={() => logout()}>
        Log Out
      </p>
      </div>
    )
  )
}

export default Logout