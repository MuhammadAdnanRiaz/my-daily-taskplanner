import { InputHTMLAttributes } from 'react'
import { Task, Tasklist } from '../interfaces/task.interface'

interface ITask extends Tasklist {
  onCheck: (task: Task) => void
}

export default function Tasks(props: ITask) {
  const { tasks, onCheck } = props

  return (
    <ul>
      {tasks.map((task, index: number) => {
        const { text, status } = task
        return (
          <li key={index}>
            <input
              checked={status === 'completed' ? true : false}
              onChange={() => onCheck(task)}
              type={'checkbox'}
            />
            <span> {text}</span>
          </li>
        )
      })}
      {tasks.length === 0 && <div>No task found!</div>}
    </ul>
  )
}
