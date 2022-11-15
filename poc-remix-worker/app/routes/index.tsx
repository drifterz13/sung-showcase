import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div className="px-20 py-10">
      <h1 className="text-2xl">Home page</h1>
      <Link
        to="/projects"
        className="cursor-pointer hover:text-blue-600 focus:ring-2 active:text-blue-400"
      >
        Projects
      </Link>
    </div>
  )
}
