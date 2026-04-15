import { Outlet } from 'react-router-dom'
import { Footer } from '../Layout/Footer'
import { Header } from '../Layout/Header'

export function HomeLayout() {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-1 flex-col bg-white">
      <Header />
      <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
