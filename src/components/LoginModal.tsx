import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const LoginModal: React.FC = () => {
  const { user, setUser } = useContext(AppContext)
  if (user) return null

  return null
  // kept minimal: Navigation handles demo login. This file exists for future expansion.
}

export default LoginModal
