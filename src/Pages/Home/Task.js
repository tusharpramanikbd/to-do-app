import React from 'react'

const Task = (props) => {
  const { _id, title, description, status } = props.task

  const deleteBtnClickHandler = (id) => {
    props.deleteTask(id)
  }

  const doneBtnClickHandler = (id) => {
    props.doneTask(id)
  }

  return (
    <div className='bg-gray-200 p-4 rounded-lg'>
      <h1
        className={`font-semibold ${status === 'Done' ? 'line-through' : ''}`}
      >
        {title}
      </h1>
      <p>
        <small className={status === 'Done' ? 'line-through' : ''}>
          {description}
        </small>
      </p>
      <div className='flex items-center justify-center gap-x-4 mt-4'>
        <button
          onClick={() => {
            doneBtnClickHandler(_id)
          }}
          className='btn btn-outline btn-success'
          disabled={status === 'Done' ? true : false}
        >
          Done
        </button>
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
