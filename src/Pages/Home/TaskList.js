import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import auth from '../../firebase.init'
import Task from './Task'

const TaskList = ({ taskId }) => {
  const [user] = useAuthState(auth)
  const [taskList, setTaskList] = useState([])

  const deleteTask = (id) => {
    fetch(`http://localhost:5000/task/${id}?email=${user.email}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const filteredTaskList = taskList.filter((task) => task._id !== id)
          setTaskList(filteredTaskList)
          toast('Task is deleted')
        }
      })
  }

  const doneTask = (id) => {
    const task = { newStatus: 'Done' }
    fetch(`http://localhost:5000/task/${id}?email=${user.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        toast('Task is done')
        const updatedTaskList = taskList.map((task) => {
          if (task._id === id) {
            task.status = 'Done'
          }
          return task
        })
        setTaskList(updatedTaskList)
      })
  }

  useEffect(() => {
    fetch(`http://localhost:5000/task?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTaskList(data))
  }, [user.email, taskId])

  return (
    <div className='card w-full md:w-3/4 lg:w-1/2 mx-auto bg-base-100 shadow-xl mt-4'>
      <div className='card-body'>
        <h2 className='text-2xl font-bold text-center'>Task List</h2>
        {taskList.map((task) => (
          <Task
            key={task._id}
            task={task}
            deleteTask={deleteTask}
            doneTask={doneTask}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList
