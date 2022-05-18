import React from 'react'
import Task from './Task'

const TaskList = () => {
  const taskList = [1, 2, 3, 4]
  return (
    <div class='card w-full md:w-3/4 lg:w-1/2 mx-auto bg-base-100 shadow-xl mt-4'>
      <div class='card-body'>
        <h2 class='text-2xl font-bold text-center'>Task List</h2>
        {taskList.map((task) => (
          <Task key={task} />
        ))}
      </div>
    </div>
  )
}

export default TaskList