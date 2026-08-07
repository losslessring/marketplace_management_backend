/*
  Warnings:

  - A unique constraint covering the columns `[nodeId]` on the table `NodeTree` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "NodeData" (
    "id" SERIAL NOT NULL,
    "nodeId" INTEGER NOT NULL,
    "applicationId" INTEGER NOT NULL,

    CONSTRAINT "NodeData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NodeTree_nodeId_key" ON "NodeTree"("nodeId");

-- AddForeignKey
ALTER TABLE "NodeData" ADD CONSTRAINT "NodeData_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
