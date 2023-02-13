'use client'
import { useTasks } from '@/app/hooks/useTasks'
import { useState } from 'react'

export default function AddTaskPage() {
  const { addTask } = useTasks()
  const [text, setText] = useState<string>('')

  const onSubmit = (event: any) => {
    event.preventDefault()
    addTask(text)
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-2 max-w-md">
      <h1>Add New Task</h1>
      <textarea
        className="border"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" className="border" />
    </form>
  )
}
