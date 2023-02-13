import Link from 'next/link'

export default function TaskNavigation({ changeViewType }: any) {
  return (
    <nav className="flex space-x-3 list-none underline mb-2">
      <li className="cursor-pointer" onClick={() => changeViewType('pending')}>
        pending
      </li>
      <li
        className="cursor-pointer"
        onClick={() => changeViewType('completed')}
      >
        completed
      </li>
      <li>
        <Link href="/tasks/add">+add new</Link>
      </li>
    </nav>
  )
}
