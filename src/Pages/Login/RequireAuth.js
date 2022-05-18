import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading'

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()
  if (loading) {
    return <Loading />
  }
  if (!user) {
    // If user is not present navigate to login page
    return <Navigate to='/login' state={{ from: location }} replace />
  }
  return children
}

export default RequireAuth
