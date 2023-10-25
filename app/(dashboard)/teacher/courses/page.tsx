import { columns } from '@/app/(dashboard)/teacher/courses/_components/columns'
import { DataTable } from '@/app/(dashboard)/teacher/courses/_components/data-table'
import { Course } from '@prisma/client'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { db } from '@/lib/prisma'

export default async function CoursesPage() {
  const { userId } = auth()

  if (!userId) {
    return redirect('/')
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      title: 'desc',
    },
  })

  return (
    <main className="p-6">
      <DataTable columns={columns} data={courses} />
    </main>
  )
}
