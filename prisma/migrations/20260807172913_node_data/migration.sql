/*
  Warnings:

  - A unique constraint covering the columns `[nodeId]` on the table `NodeTree` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "NodeTree" ADD COLUMN     "nodeData" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "NodeTree_nodeId_key" ON "NodeTree"("nodeId");
