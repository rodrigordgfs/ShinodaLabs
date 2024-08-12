import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { z } from "zod";

const skillsSchema = z.object({
  name: z.string().min(1, "name is required"),
  percentage: z.number().min(1, "Percentage is required"),
});

// Helper function to handle errors and send response
const handleError = (error: any, message: string) => {
  console.error(message, error);
  return NextResponse.json({ error: message }, { status: 500 });
};

// GET: Fetch all skills
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const page = Number(url.searchParams.get("page")) || 1;
    const pageSize = Number(url.searchParams.get("pageSize")) || 25;

    const [skills, totalSkills] = await Promise.all([
      prisma.skills.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.skills.count(),
    ]);

    return NextResponse.json(
      {
        data: skills,
        total: totalSkills,
        page,
        pageSize,
        totalPages: Math.ceil(totalSkills / pageSize),
      },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "Failed to fetch skills");
  }
}

// POST: Create a new skill
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedBody = skillsSchema.parse(body);
    const { name, percentage } = parsedBody;

    const newSkill = await prisma.skills.create({
      data: {
        name,
        percentage,
      },
    });

    return NextResponse.json(newSkill, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return handleError(error, "Failed to create skill");
  }
}
