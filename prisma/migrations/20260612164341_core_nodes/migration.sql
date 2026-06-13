/*
  Warnings:

  - You are about to drop the `Node` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Node";

-- CreateTable
CREATE TABLE "CoreNode" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CoreNode_pkey" PRIMARY KEY ("id")
);
