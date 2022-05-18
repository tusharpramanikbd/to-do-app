import React from 'react'

const Login = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-50'>
      <div className='card w-full md:w-3/4 lg:w-1/2 mx-auto bg-base-100 shadow-xl mt-4'>
        <div className='card-body'>
          <h1 className='text-2xl font-bold text-center'>Login</h1>
          <button className='btn btn-outline lg:w-3/4 mx-auto mt-4'>
            Continue with google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
