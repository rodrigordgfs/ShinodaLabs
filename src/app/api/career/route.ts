// app/api/career/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const careerSchema = z.object({
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  location: z.string().min(1, "Location is required"),
  locationType: z.string().min(1, "Location type is required"),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid start date",
  }),
  endDate: z
    .string()
    .optional()
    .refine((date) => date === undefined || !isNaN(Date.parse(date)), {
      message: "Invalid end date",
    }),
  description: z.string().min(1, "Description is required"),
  skills: z
    .array(z.string().min(1, "Skill is required"))
    .min(1, "At least one skill is required"),
});

// Helper function to handle errors and send response
const handleError = (error: any, message: string) => {
  console.error(message, error);
  return NextResponse.json({ error: message }, { status: 500 });
};

// GET: Fetch all career
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const page = Number(url.searchParams.get("page")) || 1; // Default to page 1 if not provided
    const pageSize = Number(url.searchParams.get("pageSize")) || 25; // Default to page size 10 if not provided

    const [careers, totalCareers] = await Promise.all([
      prisma.career.findMany({
        orderBy: { startDate: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.career.count(),
    ]);

    return NextResponse.json(
      {
        data: careers,
        total: totalCareers,
        page,
        pageSize,
        totalPages: Math.ceil(totalCareers / pageSize),
      },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "Failed to fetch careers");
  }
}

// POST: Create a new career
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedBody = careerSchema.parse(body);

    const {
      title,
      company,
      location,
      locationType,
      startDate,
      endDate,
      description,
      skills,
    } = parsedBody;

    const newCareer = await prisma.career.create({
      data: {
        title,
        company,
        location,
        locationType,
        description,
        skills,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
      },
    });

    return NextResponse.json(newCareer, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return handleError(error, "Failed to create career");
  }
}
