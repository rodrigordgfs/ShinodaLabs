import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { z } from "zod";

const experienceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  company: z.string().min(1, "Company is required"),
  location: z.string().min(1, "Location is required"),
  locationType: z.string().min(1, "Location type is required"),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid start date",
  }),
  endDate: z.string().optional().nullable().refine((date) => {
    if (date === undefined || date === null) {
      return true
    }
    if (date === "") {
      return true
    }
    return !isNaN(Date.parse(date));
  }, {
    message: "Invalid end date",
  }),
  skills: z
    .array(z.string().min(1, "Skill is required"))
    .min(1, "At least one skill is required"),
});

// Helper function to handle errors and send response
const handleError = (error: any, message: string) => {
  console.error(message, error);
  return NextResponse.json({ error: message }, { status: 500 });
};

// GET: Fetch all experiences
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const page = Number(url.searchParams.get("page")) || 1;
    const pageSize = Number(url.searchParams.get("pageSize")) || 25;

    const [experiences, totalExperiences] = await Promise.all([
      prisma.experience.findMany({
        orderBy: { startDate: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.experience.count(),
    ]);

    return NextResponse.json(
      {
        data: experiences,
        total: totalExperiences,
        page,
        pageSize,
        totalPages: Math.ceil(totalExperiences / pageSize),
      },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "Failed to fetch experiences");
  }
}

// POST: Create a new experience
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedBody = experienceSchema.parse(body);
    const {
      company,
      description,
      location,
      locationType,
      skills,
      startDate,
      title,
      endDate,
    } = parsedBody;

    const newExperience = await prisma.experience.create({
      data: {
        title,
        company,
        description,
        location,
        locationType,
        skills,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
      },
    });

    return NextResponse.json(newExperience, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return handleError(error, "Failed to create experience");
  }
}
