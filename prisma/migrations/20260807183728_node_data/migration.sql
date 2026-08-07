/*
  Warnings:

  - A unique constraint covering the columns `[nodeId]` on the table `NodeData` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "NodeData_nodeId_key" ON "NodeData"("nodeId");

-- AddForeignKey
ALTER TABLE "NodeData" ADD CONSTRAINT "NodeData_nodeId_fkey" FOREIGN KEY ("nodeId") REFERENCES "NodeTree"("nodeId") ON DELETE RESTRICT ON UPDATE CASCADE;
