import React from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'

const Home = () => {
  return (
    <div className='bg-gray-50 h-min'>
      <AddTask />
      <TaskList />
    </div>
  )
}

export default Home
