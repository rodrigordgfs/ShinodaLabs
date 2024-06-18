-- CreateTable
CREATE TABLE "career" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "locationType" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "skills" TEXT[],

    CONSTRAINT "career_pkey" PRIMARY KEY ("id")
);
