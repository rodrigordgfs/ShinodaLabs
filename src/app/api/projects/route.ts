import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { z } from "zod";

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  tags: z
    .array(z.string().min(1, "Tag is required"))
    .min(1, "At least one tag is required"),
  image: z.string().url("Invalid URL for image"),
  link: z.string().url("Invalid URL for link"),
  repository: z.string().url("Invalid URL for repository").optional(),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date",
  }),
});

// Helper function to handle errors and send response
const handleError = (error: any, message: string) => {
  console.error(message, error);
  return NextResponse.json({ error: message }, { status: 500 });
};

// GET: Fetch all projects
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const page = Number(url.searchParams.get("page")) || 1;
    const pageSize = Number(url.searchParams.get("pageSize")) || 25;

    const [projects, totalProjects] = await Promise.all([
      prisma.project.findMany({
        orderBy: { date: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.project.count(),
    ]);

    return NextResponse.json(
      {
        data: projects,
        total: totalProjects,
        page,
        pageSize,
        totalPages: Math.ceil(totalProjects / pageSize),
      },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "Failed to fetch projects");
  }
}

// POST: Create a new project
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedBody = projectSchema.parse(body);
    const { title, description, tags, image, link, repository, date } =
      parsedBody;

    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        tags,
        image,
        link,
        repository,
        date: new Date(date),
      },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return handleError(error, "Failed to create project");
  }
}
