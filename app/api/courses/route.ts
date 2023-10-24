import { NextResponse, NextRequest } from 'next/server'
import { auth } from '@clerk/nextjs'
import { isTeacher } from '@/lib/teacher'
import { db } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth()
    const { title } = await req.json()

    if (!userId || !isTeacher(userId)) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const course = await db.course.create({
      data: {
        title,
        userId,
      },
    })

    return NextResponse.json(course)
  } catch (error) {
    console.log('[COURSES]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
