import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Task } from '../interfaces/task.interface'

export const useTasks = () => {
  const router = useRouter()
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localStorageTask: any[] =
        JSON.parse(localStorage.getItem('tasks')!) || []
      setTasks(localStorageTask)
    }
  }, [setTasks])

  const updateTask = (task: Task) => {
    // update the task
    let updatedTask: Task[] = tasks.map((currentTask) => {
      if (currentTask.text === task.text) {
        return {
          ...currentTask,
          status: 'completed',
        }
      } else {
        return currentTask
      }
    })

    // set to state
    setTasks(updatedTask)

    // set to localstroage
    localStorage.setItem('tasks', JSON.stringify(updatedTask))
  }

  const addTask = (text: string) => {
    //create task
    const task: Task = {
      text: text,
      status: 'pending',
    }

    //make new list
    let newList = [...tasks, task]
    // store to state
    setTasks(newList)

    // update to localstorage
    localStorage.setItem('tasks', JSON.stringify(newList))

    //redirect to homepage
    router.back()
  }

  const pendingTasks = tasks.filter((task) => task.status === 'pending')
  const completedTasks = tasks.filter((task) => task.status === 'completed')

  return { pendingTasks, completedTasks, addTask, updateTask }
}
