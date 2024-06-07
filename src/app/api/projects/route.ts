// app/api/projects/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Use alias '@' para evitar caminhos relativos complicados

// Helper function to handle errors and send response
const handleError = (error: any, message: string) => {
  console.error(message, error);
  return NextResponse.json({ error: message }, { status: 500 });
};

// GET: Fetch all projects
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const page = Number(url.searchParams.get("page")) || 1; // Default to page 1 if not provided
    const pageSize = Number(url.searchParams.get("pageSize")) || 25; // Default to page size 10 if not provided

    const [projects, totalProjects] = await Promise.all([
      prisma.project.findMany({
        orderBy: { date: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.project.count(),
    ]);

    return NextResponse.json({
      data: projects,
      total: totalProjects,
      page,
      pageSize,
      totalPages: Math.ceil(totalProjects / pageSize),
    }, { status: 200 });

  } catch (error) {
    return handleError(error, "Failed to fetch projects");
  }
}

// POST: Create a new project
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, tags, image, link, repository, date } = body;

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
    return handleError(error, "Failed to create project");
  }
}
