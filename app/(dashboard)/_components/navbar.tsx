import { MobileSidebar } from './mobile-sidebar'
import { NavbarRoutes } from '@/components/navbar-routes'

export default function Navbar() {
  return (
    <div className="flex h-full items-center border-b bg-white p-4 shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}
