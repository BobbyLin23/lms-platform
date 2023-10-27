import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'
import { db } from '@/lib/prisma'
import { SearchInput } from '@/components/search-input'
import { Categories } from '@/app/(dashboard)/search/_components/categories'
import { getCourses } from '@/actions/get-courses'
import { CoursesList } from '@/components/courses-list'

interface SearchPageProps {
  searchParams: {
    title: string
    categoryId: string
  }
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { userId } = auth()

  if (!userId) {
    return redirect('/')
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  const courses = await getCourses({
    userId,
    ...searchParams,
  })

  return (
    <>
      <div className="block px-6 pt-6 md:mb-0 md:hidden">
        <SearchInput />
      </div>
      <div className="space-y-4 p-6">
        <Categories items={categories} />
        <CoursesList items={courses} />
      </div>
    </>
  )
}

export default SearchPage
