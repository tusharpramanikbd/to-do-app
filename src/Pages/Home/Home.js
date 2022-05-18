import React from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <AddTask />
      <TaskList />
    </div>
  )
}

export default Home
