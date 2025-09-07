-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "projectTitle" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "githubLink" TEXT NOT NULL,
    "projectImg" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
