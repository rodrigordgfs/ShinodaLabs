-- CreateTable
CREATE TABLE "education" (
    "id" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "education_pkey" PRIMARY KEY ("id")
);
