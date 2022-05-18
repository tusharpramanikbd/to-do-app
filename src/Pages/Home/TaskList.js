import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Task from './Task'

const TaskList = ({ taskId }) => {
  const [user] = useAuthState(auth)
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/task?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setTaskList(data))
  }, [user.email, taskId])

  return (
    <div className='card w-full md:w-3/4 lg:w-1/2 mx-auto bg-base-100 shadow-xl mt-4'>
      <div className='card-body'>
        <h2 className='text-2xl font-bold text-center'>Task List</h2>
        {taskList.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default TaskList
