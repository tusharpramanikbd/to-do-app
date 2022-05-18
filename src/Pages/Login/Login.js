import React, { useEffect } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading'

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  let errorElement
  const navigate = useNavigate()
  const location = useLocation()

  // if location has pathname then go to there otherwise home
  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    const getToken = async (email) => {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()
      localStorage.setItem('accessToken', data.accessToken)
      navigate(from, { replace: true })
    }
    if (user) {
      getToken(user.user.email)
    }
  }, [user, from, navigate])

  if (loading) {
    return <Loading />
  }

  if (error) {
    errorElement = <p className='text-red-500 mt-2'>Error: {error.message}</p>
  }

  return (
    <div className='h-screen flex items-center justify-center bg-gray-50'>
      <div className='card w-full md:w-3/4 lg:w-1/2 mx-auto bg-base-100 shadow-xl mt-4'>
        <div className='card-body'>
          <h1 className='text-2xl font-bold text-center'>Login</h1>
          <button
            onClick={() => signInWithGoogle()}
            className='btn btn-outline w-3/4 mx-auto mt-4'
          >
            Continue with google
          </button>
          {errorElement}
        </div>
      </div>
    </div>
  )
}

export default Login
