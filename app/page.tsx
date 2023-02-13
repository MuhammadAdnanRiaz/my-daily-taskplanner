'use client'
import React, { useState } from 'react'
import { useTasks } from './hooks/useTasks'
import TaskNavigation from './tasks/nav.component'
import Tasks from './tasks/tasks.component'

export default function Home() {
  const { pendingTasks, completedTasks, updateTask } = useTasks()
  const [viewType, setViewType] = useState<'pending' | 'completed'>('pending')
  console.log(completedTasks)
  return (
    <div className="p-4">
      <TaskNavigation changeViewType={setViewType} />
      <Tasks
        tasks={viewType === 'pending' ? pendingTasks : completedTasks}
        onCheck={updateTask}
      />
    </div>
  )
}
