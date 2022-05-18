import React, { useState } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'

const Home = () => {
  const [taskId, setTaskId] = useState('')

  return (
    <div className='bg-gray-50 h-min'>
      <AddTask setTaskId={setTaskId} />
      <TaskList taskId={taskId} />
    </div>
  )
}

export default Home
