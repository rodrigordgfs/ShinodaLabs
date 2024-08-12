import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { z } from "zod";

const educationSchema = z.object({
  school: z.string().min(1, "School is required"),
  course: z.string().min(1, "Course is required"),
  description: z.string().min(1, "Description is required"),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid start date",
  }),
  endDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid ebd date",
  }),
});

// Helper function to handle errors and send response
const handleError = (error: any, message: string) => {
  console.error(message, error);
  return NextResponse.json({ error: message }, { status: 500 });
};

// GET: Fetch all educations
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const page = Number(url.searchParams.get("page")) || 1;
    const pageSize = Number(url.searchParams.get("pageSize")) || 25;

    const [educations, totalEducations] = await Promise.all([
      prisma.education.findMany({
        orderBy: { startDate: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.education.count(),
    ]);

    return NextResponse.json(
      {
        data: educations,
        total: totalEducations,
        page,
        pageSize,
        totalPages: Math.ceil(totalEducations / pageSize),
      },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "Failed to fetch educations");
  }
}

// POST: Create a new education
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedBody = educationSchema.parse(body);
    const { course, endDate, school, startDate, description } = parsedBody;

    const newEducation = await prisma.education.create({
      data: {
        course,
        description,
        endDate: new Date(endDate),
        school,
        startDate: new Date(startDate),
      },
    });

    return NextResponse.json(newEducation, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return handleError(error, "Failed to create education");
  }
}
