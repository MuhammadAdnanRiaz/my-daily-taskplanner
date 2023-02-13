export interface Task {
  text: string
  status: 'completed' | 'pending'
}

export interface Tasklist {
  tasks: Task[]
}
