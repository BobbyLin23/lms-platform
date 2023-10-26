import { Logo } from '@/app/(dashboard)/_components/logo'
import { SidebarRoutes } from '@/app/(dashboard)/_components/sidebar-routes'
import { ModeToggle } from '@/components/mode-toggle'

export const Sidebar = () => {
  return (
    <div className="flex h-full flex-col overflow-y-auto border-r shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex w-full flex-col">
        <SidebarRoutes />
      </div>
      <div className="flex flex-1 flex-col items-center justify-end p-6">
        <ModeToggle />
      </div>
    </div>
  )
}
