import React from 'react'

const Task = (props) => {
  const { _id, title, description, email, status } = props.task

  const deleteBtnClickHandler = (id) => {
    props.deleteTask(id)
  }

  return (
    <div className='bg-gray-200 p-4 rounded-lg'>
      <h1 className='font-semibold'>{title}</h1>
      <p>
        <small>{description}</small>
      </p>
      <div className='flex items-center justify-center gap-x-4 mt-4'>
        <button className='btn btn-outline btn-success'>Done</button>
        <button
          onClick={() => {
            deleteBtnClickHandler(_id)
          }}
          className='btn btn-outline btn-error'
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Task
