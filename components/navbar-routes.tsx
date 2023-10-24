'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

export const NavbarRoutes = () => {
  const pathname = usePathname()

  const isTeacherPage = pathname.startsWith('/teacher')
  const isCoursePage = pathname.includes('/courses')
  const isSearchPage = pathname === '/search'

  return (
    <>
      {isSearchPage && <div className="hidden md:block">SearchInput</div>}
      <div className="ml-auto flex gap-x-2">
        {isTeacherPage || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="mr-2 h-4 w-4" />
              Exit
            </Button>
          </Link>
        ) : null}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  )
}
