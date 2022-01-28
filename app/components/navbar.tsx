import { Form } from 'remix'

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-around py-3 bg-gray-900 text-gray-500 lg:flex-col lg:py-4 lg:px-4 lg:justify-start lg:gap-6">
        <div className="hidden lg:block lg:flex-1" />
        <Form method="post" action="/auth/logout">
          <button type="submit">Logout</button>
        </Form>
      </nav>
    </header>
  )
}
