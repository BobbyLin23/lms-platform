import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CoursesPage() {
  return (
    <main className="p-6">
      <Link href="/teacher/create">
        <Button>New Course</Button>
      </Link>
    </main>
  )
}
