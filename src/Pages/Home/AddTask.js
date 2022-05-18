import React from 'react'

const AddTask = () => {
  const handleAddtask = (event) => {
    event.preventDefault()
    const taskTitle = event.target.taskTitle.value
    const taskDesc = event.target.TaskDesc.value
    console.log(taskTitle, taskDesc)
    event.target.reset()
  }

  return (
    <div className='card w-full md:w-3/4 lg:w-1/2 mx-auto bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h1 className='text-2xl font-bold text-center'>Add Task</h1>
        <form onSubmit={handleAddtask}>
          <div className='form-control w-full max-w-xl'>
            <label className='label'>
              <span className='label-text'>Task Title</span>
            </label>
            <input
              type='text'
              name='taskTitle'
              required
              placeholder='Enter Task Title'
              className='input input-bordered w-full max-w-xl'
            />
          </div>
          <div className='form-control mt-4'>
            <label className='label'>
              <span className='label-text'>Task Description</span>
            </label>
            <textarea
              className='textarea textarea-bordered h-24'
              placeholder='Enter Task Details Here'
              required
              name='TaskDesc'
            ></textarea>
          </div>
          <div className='card-actions justify-center mt-4'>
            <button className='btn btn-primary text-white'>Add Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask
