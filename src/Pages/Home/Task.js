import React from 'react'

const Task = () => {
  return (
    <div className='bg-gray-200 p-4 rounded-lg'>
      <h1 className='font-semibold'>Task Title</h1>
      <p>
        <small>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          quasi a, reprehenderit quas alias minus?
        </small>
      </p>
      <div className='flex items-center justify-center gap-x-4 mt-4'>
        <button class='btn btn-outline btn-success'>Done</button>
        <button class='btn btn-outline btn-error'>Delete</button>
      </div>
    </div>
  )
}

export default Task
